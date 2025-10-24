import { mockLocalStorage } from "@/mocks/mock-local-storage.mock";
import { getMovieStorage, saveMovieIntoLocalStorage, setItemInStorage } from "@/services/movie-list.service";
import { constants } from "@/utils/constants";

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

describe("MovieListService", () => {

    const storage = constants.STORAGE.LOCAL_STORAGE_MOVIE;
    const list = [1, 2, 3];
    const listWithMovies = [{ id: 1, title: "Filme A" }, { id: 2, title: "Filme B" }, { id: 3, title: "Filme C" }];

    beforeEach(() => {
        mockLocalStorage.clear();
    });

    it('verify getMovieStorage if storage is clear', () => {
        expect(getMovieStorage()).toEqual([]);
    });

    it('verify getMovieStorage if storage contains a value inside', () => {
        const item = "[1]"
        setItemInMockStorage(item);
        expect(getMovieStorage()).toEqual(item);
    });

    it('verify if setItemInStorage set an item in storage correctly', () => {
        setItemInStorage(list);
        expect(getMockStorage()).toBe(JSON.stringify(list));
    });

    it("verify if saveMovieIntoLocalStorage save movie correctly in storage if movie do not exists in storage", () => {
        setItemInMockStorage(listWithMovies);

        const addInfo = {
            id: 4,
            title: "Filme D"
        }

        saveMovieIntoLocalStorage(addInfo.id, addInfo.title)

        listWithMovies.push(addInfo);

        expect(JSON.parse(getMockStorage())).toEqual(listWithMovies);
    });

    it("verify if saveMovieIntoLocalStorage return storage if movie exists in storage", () => {
        setItemInMockStorage(listWithMovies);

        const addInfo = {
            id: 3,
            title: "Filme C"
        }

        saveMovieIntoLocalStorage(addInfo.id, addInfo.title)

        expect(JSON.parse(getMockStorage())).toEqual(listWithMovies);
    });

    function setItemInMockStorage(item) {
        mockLocalStorage.setItem(storage, JSON.stringify(item));
    }

    function getMockStorage() {
        return mockLocalStorage.getItem(storage);
    }

})