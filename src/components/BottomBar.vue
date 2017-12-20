<template>
  <div class="bottombar">
    <div class="status-bar">
      <img class="logo"
        src="static/img/logo.jpeg"
        alt="" />
      <span class="lines">lines: {{lines}}</span>
      <span class="words">words: {{words}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom-bar",
  props: {
    lines: {
      type: Number,
      default: 0
    },
    words: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.bottombar {
  width: 100%;
  height: 40px;
  padding: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  user-select: none;
  background: #fcfcfc;
  position: fixed;
  border-top: 1px dashed #bbb;
  left: 0;
  bottom: 0;
  opacity: 1;
  z-index: 9;
}
.status-bar {
  height: 100%;
  margin-right: 20px;
  font-size: 12px;
  color: #959694;
  text-align: right;
}

.status-bar span {
  display: inline-block;
  min-width: 4em;
  margin-left: 1em;
}
</style>
