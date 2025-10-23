import { getMovieStorage, setItemInStorage } from "@/services/movie-list.service";
import { constants } from "@/utils/constants";
import { vi } from "vitest";


const mockLocalStorage = (() => {
    let store = {};
    return {
        getItem: vi.fn(key => store[key] || null),
        setItem: vi.fn((key, value) => { store[key] = value.toString(); }),
        removeItem: vi.fn(key => { delete store[key]; }),
        clear: vi.fn(() => { store = {}; }),
    };
})();

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

describe("MovieListService", () => {

    const storage = constants.STORAGE.LOCAL_STORAGE_MOVIE;
    const list = [1, 2, 3];

    beforeEach(() => {
        mockLocalStorage.clear();
    });

    it('verify getMovieStorage if storage is clear', () => {
        expect(getMovieStorage()).toEqual([]);
    });

    it('verify getMovieStorage if storage contains a value inside', () => {
        const item = "[1]"
        mockLocalStorage.setItem(storage, item);
        expect(getMovieStorage()).toEqual(JSON.parse(item));
    });

    it('verify if setItemInStorage set an item in storage correctly', () => {
        
        setItemInStorage(list);
        expect(mockLocalStorage.getItem(storage)).toBe(JSON.stringify(list));
    });

})