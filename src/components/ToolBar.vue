<template>
  <div class="editor-toolbar"
    :class="{
        'is-side': isSideBySide,
        'is-readmode': isReadmode
      }">
      <div class="icons">
        <a class="icon-book"
          @click="example()">example
        </a>
        <a class="icon-download-cloud"
          @click="download()">download
        </a>
      </div>

  </div>
</template>

<script>
// import toolbar from "src/config/toolbar";

export default {
  name: "tool-bar",
  created() {
    this.toolbar = toolbar;
  },
  props: {
    isReadmode: {
      type: Boolean,
      default: false
    },
    isSideBySide: {
      type: Boolean,
      default: true
    },
    download: {
      type: Function
    },
    example: {
      type: Function
    }
  },
  methods: {
    executeAction(action) {
      if (
        action === "" ||
        !this[action] ||
        typeof this[action] !== "function"
      ) {
        throw Error("command does not exist");
      }
      const actions = ["toggleSideBySide", "toggleReadmode", "toggleHtmlCode"];
      if (
        (this.isReadmode || this.showHtmlCode) &&
        actions.indexOf(action) < 0
      ) {
        return;
      }
      if (this.showHtmlCode && action !== "toggleHtmlCode") {
        this.toggleHtmlCode();
      }
      this[action]();
    },
    toggleReadmode() {
      if (this.isSideBySide) {
        this.editor.unsetStyle("is-side");
        this.isSideBySide = false;
        this._resize();
      }
      this._toggleClass("is-readmode", this.isReadmode);
      this.isReadmode = !this.isReadmode;
    }
  }
};
</script>

<style scoped>
@import "../assets/css/icons.css";
.icons {
  margin-right: 20px;
  text-align: right;
}
.icons > a {
  padding-right: 10px;
  padding-left: 10px;
}
.editor-toolbar {
  width: 100%;
  height: 40px;
  padding: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  user-select: none;
  border: 0;
  border-bottom: 1px dashed #bbb;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 9;
}

/* .editor-toolbar:after,
.editor-toolbar:before {
  display: block;
  content: " ";
  height: 1px;
}

.editor-toolbar:before {
  margin-bottom: 8px;
}

.editor-toolbar:after {
  margin-top: 8px;
} */

.editor-toolbar:hover,
.editor-wrapper input.title:focus,
.editor-wrapper input.title:hover {
  opacity: 0.8;
}

.editor-toolbar::before {
  width: 20px;
  height: 40px;
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(100%, rgba(255, 255, 255, 0))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}

.editor-toolbar::after {
  width: 20px;
  height: 40px;
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgb(226, 255, 255) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 0)),
    color-stop(100%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
}

.icons a {
  display: inline-block;
  text-align: center;
  text-decoration: none !important;
  color: #2c3e50 !important;
  margin: 0;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
}

.icons a.active,
.icons a:hover {
  background: #fcfcfc;
  border-color: #95a5a6;
}

.icons a:before {
  line-height: 30px;
}

.editor-toolbar i.separator {
  display: inline-block;
  width: 0;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #fff;
  color: transparent;
  text-indent: -10px;
  margin: 0 6px;
}
</style>
