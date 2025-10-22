export const filterMoviesFromId = ((id, list) => {
    return list.filter((movie) => movie.id == id);
});

export const removeItems = ((moviesToDelete, listStorage) => {
    return listStorage.filter((movie) => !moviesToDelete.includes(movie.id));
})

export const movieListContainsAnExistentMovie = ((idMovie, storageList) => {
    return filterMoviesFromId(idMovie, storageList).length !== 0;
});

export const removeSelectedMovies = ((selectedMoviesToDelete, moviesFromStorage) => {
    return removeItems(selectedMoviesToDelete, moviesFromStorage);
});

export default { movieListContainsAnExistentMovie, removeSelectedMovies };