import { filterMoviesFromId, movieListContainsAnExistentMovie, removeSelectedMovies } from "@/utils/list.util";

describe('ListUtil', () => {

    const defaultList = [{ id: 1, name: 'Osvaldo' }, { id: 2, name: 'Mariana' }, { id: 3, name: 'Luciola' }];

    it('Verifica se metodo filterMoviesFromId filtra os filmes da forma esperada', () => {
        const id = 1;
        const list = [{ id: 1, name: 'Osvaldo' }, { id: 2, name: 'Mariana' }]

        expect(filterMoviesFromId(id, list)).toEqual([{ id: 1, name: 'Osvaldo' }]);
    });

    it('Verifica se metodo removeSelectedMovies realiza remocao dos itens da forma esperada', () => {
        const idList = [1, 2];

        expect(removeSelectedMovies(idList, defaultList)).toEqual([{ id: 3, name: 'Luciola' }]);
        expect(removeSelectedMovies(idList, defaultList)).toEqual([{ id: 3, name: 'Luciola' }]);
    })

    it('Verifica se metodo movieListContainsAnExistentMovie realiza contagem dos itens da forma esperada', () => {
        expect(movieListContainsAnExistentMovie(1, defaultList)).toBeTruthy();
        expect(movieListContainsAnExistentMovie(99, defaultList)).toBeFalsy();
    })
})