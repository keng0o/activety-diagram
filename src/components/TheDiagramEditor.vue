<template>
  <div>
    <!-- Edit -->
    <div class="editor is-side"
      ref="editor" />
    <!-- Preview  -->
    <div class="preview is-side"
      ref="svg" />

    <!-- BottomBar -->
    <bottom-bar :lines="lines"
      :words="words" />

  </div>
</template>

<script>
import content from "src/config/content";
import BottomBar from "src/components/BottomBar";

export default {
  name: "the-diagram-editor",
  components: {
    BottomBar
  },

  data() {
    return {
      lines: 0,
      words: 0,
      svg: null
    };
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
    editor.focus();

    editSession.setMode("ace/mode/markdown");
    editSession.setUseWrapMode(true);

    editSession.on("change", () => {
      const str = editSession.getValue();
      this.lines = editSession.getLength();
      this.words = str.replace(/\s*/g, "").length;

      let result;
      try {
        result = Viz(`digraph D {
        ${str}
      }`);
      } catch (e) {
        console.error(e);
      }

      if (!result) {
        return;
      }

      this.svg = parser.parseFromString(
        result,
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
  top: 50px;
  bottom: 40px;
  font-size: 14px !important;
  opacity: 1;
}
.is-side {
  width: 50%;
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
  top: 50px;
  padding: 30px;
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
  width: 50%;
  left: 50%;
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
</style>
