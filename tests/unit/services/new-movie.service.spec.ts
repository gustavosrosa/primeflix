import { newMovieMock } from "@/mocks/new-movie.mock";
import { newMovie } from "@/services/new-movie.service";
import AboutMovieView from "@/views/AboutMovieView.vue";
import { shallowMount } from "@vue/test-utils";
import MockAdapter from "axios-mock-adapter";
import { createRouterMock, injectRouterMock } from 'vue-router-mock';

describe("NewMovieService / AboutMovieView", () => {

    let mock: MockAdapter;
    const id = '1156594';
    const router = createRouterMock({ params: { id: id } });

    beforeEach(() => {
        injectRouterMock(router);
        mock = new MockAdapter(newMovie);
    });

    afterEach(() => {
        mock.reset();
    });

    afterAll(() => {
        mock.restore();
    });

    it("should call findMovieFromId and set movie data", async () => {

        mock.onAny().reply(200, newMovieMock);

        const wrapper = shallowMount(AboutMovieView);

        await wrapper.vm.getMovieFromId(id);

        // Aguarda processamento
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.movie).toEqual(newMovieMock);
    });
});