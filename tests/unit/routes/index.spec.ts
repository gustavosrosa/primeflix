import { routes } from '../../../src/router/index';

describe("Routes", () => {
    it("verify if home route is already defined", () => {
        const homeRoute = routes.find((route) => route.name == 'home');
        expect(homeRoute).toBeDefined();
        expect(homeRoute?.path).toBe('/')
    });

    it("verify if meus-filmes route is already defined", () => {
        const meusFilmesRoute = routes.find((route) => route.name == 'meus-filmes');
        expect(meusFilmesRoute).toBeDefined();
        expect(meusFilmesRoute?.path).toBe('/meus-filmes')
    });

    it("verify if /filme/:id route is already defined", () => {
        const filmeRoute = routes.find((route) => route.name == 'filme');
        expect(filmeRoute).toBeDefined();
        expect(filmeRoute?.path).toBe('/filme/:id')
    });
})