export const filterMoviesFromId = ((id, list) => {
    return list.filter((movie) => movie.id == id);
});

export const movieListContainsAnExistentMovie = ((idMovie, storageList) => {
    return filterMoviesFromId(idMovie, storageList).length !== 0;
});

export const removeSelectedMovies = ((selectedMoviesToDelete, moviesFromStorage) => {
    return moviesFromStorage.filter((movie) => !selectedMoviesToDelete.includes(movie.id));
});

export default { movieListContainsAnExistentMovie, removeSelectedMovies };