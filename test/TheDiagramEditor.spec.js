import { shallow, createLocalVue } from "vue-test-utils";
import ace from "../static/ace/ace.js";
import TheDiagramEditor from "../src/components/TheDiagramEditor.vue";

describe("TheDiagramEditor component", () => {
  it("render", () => {
    expect(shallow(TheDiagramEditor).html()).toMatchSnapshot();
  });
});
