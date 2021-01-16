import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Testing Logo', () => {

  it('is a Vue instance', () => {

    const wrapper = mount(Logo);
    expect(wrapper.vm).toBeTruthy();

  });

}); // describe (Testing Logo)
