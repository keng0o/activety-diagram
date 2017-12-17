import Vue from "vue";
import Router from "vue-router";
import TheDiagramEditor from "src/components/TheDiagramEditor";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "App",
      component: TheDiagramEditor
    }
  ]
});
