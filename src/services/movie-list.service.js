import { constants } from "@/utils/constants";
import { movieListContainsAnExistentMovie } from "../utils/list.util"

const storage = constants.STORAGE.LOCAL_STORAGE_MOVIE;

export const getMovieStorage = (() => {
    if (window.localStorage.getItem(storage)) {
        return JSON.parse(window.localStorage.getItem(storage));
    }
    return [];
})

export const saveMovieIntoLocalStorage = ((id, title) => {

    let movieListStorage = getMovieStorage();
    const movieExists = movieListContainsAnExistentMovie(id, movieListStorage);

    if (!movieListContainsAnExistentMovie(id, movieListStorage)) {
        movieListStorage.push({ id, title });
        window.localStorage.setItem(storage, JSON.stringify(movieListStorage));
    }
    
    return movieExists;
})

export default { saveMovieIntoLocalStorage, getMovieStorage };