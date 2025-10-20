// URL: https://api.themoviedb.org/3/movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

import axios from 'axios';

const newMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export default newMovie;