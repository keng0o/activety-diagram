import { shallow, createLocalVue } from 'vue-test-utils';
import Hello from '../src/components/Hello.vue';
const localVue = createLocalVue();

describe('Hello component', () => {
	const wrapper = shallow(Hello, {
        propsData: {},
        localVue
    });
    it('default msg is Welcome to Your Vue.js PWA', () => {
        expect(wrapper.vm.msg).toEqual('Welcome to Your Vue.js PWA');
    });
    it('render', () => {
    	expect(wrapper.html()).toMatchSnapshot();
    })
});
