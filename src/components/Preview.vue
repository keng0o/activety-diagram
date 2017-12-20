<template>
  <div class="preview is-side">
    {{content}}
  </div>
</template>

<script>
export default {
  name: "preview",
  props: {
    content: {
      type: String,
      default: ""
    }
  }
};
</script>


<style scoped>
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
