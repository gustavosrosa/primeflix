import { constants } from "@/utils/constants";
import HeaderComponent from "../../../src/components/HeaderComponent.vue"
import { mount } from "@vue/test-utils"

describe('HeaderComponent', () => {
    it("Verifica se o brand foi renderizado com sucesso", () => {
        const wrapper = mount(HeaderComponent);

        const brand = wrapper.get('[data-test="brand"]');

        expect(brand.text()).toBe(constants.FIELD_TEXTS.HEADER.BRAND);
    });

    it("Verifica se o botao foi renderizado com sucesso", () => {
        const wrapper = mount(HeaderComponent);

        const brand = wrapper.get('[data-test="brand"]');

        expect(brand.text()).toBe(constants.FIELD_TEXTS.HEADER.BRAND);
    });
})