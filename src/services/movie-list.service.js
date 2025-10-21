import { constants } from "@/utils/constants";
import { movieListContainsAnExistentMovie } from "../utils/list.util"

const storage = constants.STORAGE.LOCAL_STORAGE_MOVIE;

const getMovieStorage = (() => {
    if (window.localStorage.getItem(storage)) {
        return JSON.parse(window.localStorage.getItem(storage));
    }
    return [];
})

const saveMovieIntoLocalStorage = ((id, title) => {

    let movieListStorage = getMovieStorage();

    if (!movieListContainsAnExistentMovie(id, movieListStorage)) {
        movieListStorage.push({ id, title });
        window.localStorage.setItem(storage, JSON.stringify(movieListStorage));
    }
    
    return movieListContainsAnExistentMovie(id, movieListStorage);
})

export default saveMovieIntoLocalStorage;