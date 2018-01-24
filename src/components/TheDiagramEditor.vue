<template>
  <div>
    <tool-bar
      :isReadmode="isReadmode"
      :isSideBySide="isSideBySide"
      :download="download"
      :example="example" />
    <!-- Edit -->
    <div class="editor is-side"
      ref="editor" />
    <!-- Preview  -->
    <div class="preview is-side"
      ref="svg" />

    <div class="toc-preview" v-show="showToc">
      ここにエグザンプル的な何か
    </div>

    <!-- BottomBar -->
    <bottom-bar :lines="lines"
      :words="words" />

  </div>
</template>

<script>
import content from "src/config/content";
import ToolBar from "src/components/ToolBar";
import BottomBar from "src/components/BottomBar";

export default {
  name: "the-diagram-editor",
  components: {
    ToolBar,
    BottomBar
  },

  data() {
    return {
      showToc: false,
      result: "",
      lines: 0,
      words: 0,
      svg: null,
      isReadmode: true,
      isSideBySide: true
    };
  },

  methods: {
    example() {
      this.showToc = !this.showToc;
    },
    download() {
      const png = Viz.svgXmlToPngImageElement(this.result);
      const aTag = document.createElement("a");
      const blob = new Blob([this.image]);
      aTag.download = "diaglam.png";
      aTag.href = png;
      aTag.click();
      URL.revokeObjectURL(png);
    }
  },

  mounted() {
    const editor = ace.edit(this.$refs.editor);
    const editSession = editor.getSession();
    const parser = new DOMParser();

    // editor options
    editor.setTheme("ace/theme/chrome");
    editor.$blockScrolling = Infinity;
    editor.setShowPrintMargin(false);
    editor.setShowFoldWidgets(false);
    editor.getSession().setTabSize(2);

    editor.focus();

    editSession.setUseWrapMode(true);
    editSession.setMode("ace/mode/dot");
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });

    editSession.on("change", () => {
      const str = editSession.getValue();
      this.lines = editSession.getLength();
      this.words = str.replace(/\s*/g, "").length;

      try {
        this.result = Viz(`digraph g {${str}}`);
      } catch (e) {
        console.error(e);
      }

      if (!this.result) {
        return;
      }

      this.svg = parser.parseFromString(
        this.result,
        "image/svg+xml"
      ).documentElement;
      this.svg.id = "svg_output";
      const svg = this.$refs.svg.querySelector("svg");
      if (svg) {
        this.$refs.svg.removeChild(svg);
      }
      this.$refs.svg.appendChild(this.svg);
    });

    editSession.on("changeScrollTop", scrollTop => {
      // console.log("changeScrollTop");
    });

    editSession.setValue(content);
  }
};
</script>

<style scoped>
.editor {
  position: fixed !important;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 40px;
  font-size: 14px !important;
  opacity: 1;
}
.is-side {
  width: 40%;
  border: 1px dashed #bbb;
  border-bottom: 0;
  border-top-width: 0;
  border-left-width: 0;
}

.preview {
  bottom: 40px;
}

.preview {
  position: fixed;
  left: 0;
  right: 0;
  top: 40px;
  padding-top: 15px;
  overflow: auto;
  display: none;
  letter-spacing: 1px;
}

.preview::-webkit-scrollbar {
  display: none;
}

.preview:hover::-webkit-scrollbar {
  display: inherit;
}

.preview.is-side {
  width: 60%;
  left: 40%;
  display: block;
}

.preview.is-readmode {
  display: block;
}

.preview input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  margin-top: 0.3rem;
}
.preview a {
  text-decoration: none;
}

.preview img {
  max-width: 100%;
  box-sizing: content-box;
}

.preview .contains-task-list {
  padding-left: 0;
}

.preview .task-list-item {
  list-style: none;
}

.toc-preview {
  position: absolute;
  background: white;
  top: 40px;
  bottom: 0;
  right: 0;
  border: 1px dashed #ccc;
  overflow: auto;
  width: 300px;
  z-index: 2;
  padding: 18px;
  padding-bottom: 30px;
}
</style>
