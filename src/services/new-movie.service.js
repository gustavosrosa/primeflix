// URL: https://api.themoviedb.org/3/movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

import { constants } from '@/utils/constants';
import axios from 'axios';

export const newMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const findMovieFromId = ((id) => {

    let movie = {};

    movie = newMovie.get(`/movie/${id}`, {
        params: {
            api_key: constants.ACCESS_API.PARAM,
            language: constants.ACCESS_API.LANGUAGE,
            page: 1,
        }
    })
    .then((response) => {
        return response.data;
    })

    return movie;
})

export default { newMovie, findMovieFromId };