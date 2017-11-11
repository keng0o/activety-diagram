<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <div class="editor">
        <editor editor-id="editor" content="a"/>  
      </div>
      <div class="editor">
        <hello />
      </div>
    </main>
  </div>
</template>

<script>
import Hello from "@/components/Hello";
import Editor from "@/components/Editor";

export default {
  name: 'app',

  components: {
    Hello,
    Editor,
  },
};
</script>

<style scoped>
* {
  &,
  &::before,
  &::after {
    box-sizing: inherit;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar:horizontal {
  height: 6px;
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.02);
}

::-webkit-scrollbar-track:hover {
  background: rgba(0, 0, 0, 0.06);
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #4c5275;
}

body {
  margin: 0;
}

#app {
  box-sizing: border-box;
  font-size: 16px;
  font-family: Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #4c5275;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  display: flex;
  width: 100%;
  height: 100%;
}

.editor {
  flex: 1 1 50%;
  position: relative;
  max-width: 50%;
}
.editor not(:first-child)::before {
  display: block;
  position: absolute;
  top: 0;
  left: -2px;
  bottom: 0;
  z-index: 11;
  width: 4px;
  height: 100%;
  background: #353a54;
  content: '';
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
