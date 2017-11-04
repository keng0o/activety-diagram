import { mount } from 'vue-test-utils';
import Hello from '../src/components/Hello.vue';

describe('Hello component', () => {
	const wrapper = mount(Hello, {
        propsData: {}
    });
    it('default msg is Welcome to Your Vue.js PWA', () => {
        expect(wrapper.vm.msg).toEqual('Welcome to Your Vue.js PWA');
    });
    it('render', () => {
    	expect(wrapper.html()).toMatchSnapshot();
    })
});
