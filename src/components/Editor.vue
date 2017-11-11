<template>
  <div style="height: 100px" :id="editorId">
    <p >{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'editor', 
  props: ['editorId', 'content', 'lang', 'theme'],
  data () {
    return {
      editor: Object,
      beforeContent: ''
    }
  },
  watch: {
    'content' (value) {
      if (this.beforeContent !== value) {
        this.editor.setValue(value, 1)
      }
    }
  },
  mounted () {
    const lang = this.lang || 'text'
    const theme = this.theme || 'github'
  
    this.editor = window.ace.edit(this.editorId)
    // this.editor.setValue(this.content, 1)
    
    // // mode-xxx.js or theme-xxx.jsがある場合のみ有効
    // this.editor.getSession().setMode(`ace/mode/${lang}`)
    // this.editor.setTheme(`ace/theme/${theme}`)

    this.editor.on('change', () => {
      this.beforeContent = this.editor.getValue()
      this.$emit('change-content', this.editor.getValue())
    })
  }
}
</script>

<style scoped>
.editor {
  display: flex;
  position: relative;
  height: calc(100vh - 60px);
  background: #353a54;
  font-size: 14px;
  line-height: 1.6;
}
  

.ace_editor {
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;
  width: 100% !important;
  height: calc(100% - 40px) !important;
  color: #ccc !important;
}

 .ace_editor,
 .ace_gutter {
  background: #353a54 !important;
}

 .ace_marker-layer .ace_selection {
  background: #353a54 !important;
}

 .ace_gutter {
  color: #4c5275 !important;
}

 .ace_gutter-active-line,
 .ace_marker-layer .ace_active-line {
  background: #353a54 !important;
}

 .ace_scroller.ace_scroll-left {
  transition: box-shadow 120ms ease-out;

  .ace_scroll-left {
    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.2) inset !important;
  }
}

 .ace_entity,
 .ace_keyword,
 .ace_meta.ace_tag,
 .ace_storage {
  color: #d99 !important;
}

 .ace_entity.ace_name.ace_function,
 .ace_entity.ace_other,
 .ace_entity.ace_other.ace_attribute-name,
 .ace_variable {
  color: #71ddf1 !important;
}

 .ace_string {
  color: #fff8b7 !important;
}

 .ace_storage.ace_type,
 .ace_support.ace_class,
 .ace_support.ace_type {
  color: #5092e3;
  font-style: normal !important;
}

 .ace_comment {
  color: #818495 !important;
}
</style>
