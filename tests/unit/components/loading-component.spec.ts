import LoadingComponent from '../../../src/components/LoadingComponent.vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

describe('LoadingComponent', () => {
  it('renderiza o texto "Carregando...."', () => {
    const wrapper = mount(LoadingComponent)
    expect(wrapper.text()).toContain('Carregando')
  })
})