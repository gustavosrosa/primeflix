import { createRefMock } from "@/mocks/reusable-ref.mock";
import { saveMovieIntoLocalStorage } from "@/services/movie-list.service";
import { constants } from "@/utils/constants";
import AboutMovieView from "@/views/AboutMovieView.vue";
import { shallowMount } from "@vue/test-utils";
import { vi } from "vitest";
import { createRouterMock, injectRouterMock } from "vue-router-mock";

vi.mock('@/services/movie-list.service', () => ({
    saveMovieIntoLocalStorage: vi.fn(),
}))

const openToastMock = vi.fn()

describe("AboutMovieView", () => {

    const router = createRouterMock({ params: { id: 4 } });

    let wrapper;
    const movieMock = createRefMock({ id: 1, title: 'Matrix' });

    beforeEach(() => {
        injectRouterMock(router);
        wrapper = shallowMount(AboutMovieView);
        global.movie = { value: movieMock };
        vi.clearAllMocks();
    })

    it("Verify method saveMovie", async () => {
        await wrapper.vm.saveMovie();

        expect(saveMovieIntoLocalStorage).toHaveBeenCalled()
    });

    it('deve definir infoToast como MOVIE_EXISTS quando o filme já existir', async () => {
        await wrapper.vm.setInfoToast(true)

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.infoToast.title).toEqual(constants.TOAST_INFORMATIONS.MOVIE_EXISTS.title)
    })

    it('deve definir infoToast como MOVIE_NOT_EXISTS quando o filme não existir', async () => {
        wrapper.vm.setInfoToast(false)

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.infoToast.title).toBe(constants.TOAST_INFORMATIONS.MOVIE_NOT_EXISTS.title)
    })



})