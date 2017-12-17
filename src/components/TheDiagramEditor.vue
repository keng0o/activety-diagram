<template>
  <div>
    <!-- Edit -->
    <div class="editor is-side"
      ref="editor" />
  </div>
</template>

<script>
import content from "src/config/content";

export default {
  name: "the-diagram-editor",
  mounted() {
    const editor = ace.edit(this.$refs.editor);
    const editSession = editor.getSession();

    // editor options
    editor.setTheme("ace/theme/chrome");
    editor.$blockScrolling = Infinity;
    editor.setShowPrintMargin(false);
    editor.setShowFoldWidgets(false);
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
