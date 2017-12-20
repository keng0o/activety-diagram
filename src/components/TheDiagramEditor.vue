<template>
  <div>
    <!-- Edit -->
    <div class="editor is-side"
      ref="editor" />
    <!-- Preview  -->
    <preview :content="content" />
    <!-- BottomBar -->
    <bottom-bar :lines="lines"
      :words="words" />

  </div>
</template>

<script>
import content from "src/config/content";

import Preview from "src/components/Preview";
import BottomBar from "src/components/BottomBar";

export default {
  name: "the-diagram-editor",
  components: {
    Preview,
    BottomBar
  },

  data() {
    return {
      lines: 0,
      words: 0,
      content: ""
    };
  },

  mounted() {
    const editor = ace.edit(this.$refs.editor);
    const editSession = editor.getSession();

    // editor options
    editor.setTheme("ace/theme/chrome");
    editor.$blockScrolling = Infinity;
    editor.setShowPrintMargin(false);
    editor.setShowFoldWidgets(false);
    editor.focus();

    editSession.setMode("ace/mode/markdown");
    editSession.setUseWrapMode(true);

    editSession.on("change", () => {
      this.content = editSession.getValue();
      this.lines = editSession.getLength();
      this.words = content.replace(/\s*/g, "").length;
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
</style>
