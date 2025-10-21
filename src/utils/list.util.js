export const movieListContainsAnExistentMovie = ((idMovie, storageList) => {
    return storageList.filter((movie) => movie.id == idMovie).length !== 0;
})

export default movieListContainsAnExistentMovie;