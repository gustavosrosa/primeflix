<template>
    <section v-if="movie.title" class="container mt-5 d-flex flex-column">
        <div class="d-grid gap-3">
            <h1>{{ movie.title }}</h1>
            <BImg :src="moviePoster(movie.backdrop_path)" width="750" fluid />
            <h2>Sinopse</h2>
            <p>{{ movie.overview }}</p>
            <h3 class="fs-5">Avaliação: {{movie.vote_average}} / 10</h3>
            <div>
                <BButton variant="danger" class="me-2">Salvar</BButton>
                <BButton>Trailer</BButton>
            </div>
        </div>
    </section>
    <section v-else>
        <h1 class="loading mt-5">Carregando....</h1>
    </section>
</template>

<script setup>
import newMovie from '@/services/new-movie.service';
import { useRoute } from 'vue-router';
import { BImg, BButton } from 'bootstrap-vue-next';
import { onMounted, ref } from 'vue';
import { constants } from '@/utils/constants';
import getMoviePoster from '../services/get-poster-from-path.service'

const route = useRoute();

let movie = ref({})

onMounted(() => {
    const id = route.params.id;
    getMovieFromId(id)
})

async function getMovieFromId(id) {

    await newMovie.get(`/movie/${id}`, {
        params: {
            api_key: constants.ACCESS_API.PARAM,
            language: "pt-BR",
            page: 1,
        }
    })
    .then((response)=>{
        movie.value = response.data;
      })

}

function moviePoster(backdropPath) {
    return getMoviePoster(backdropPath);
}

</script>

<style lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        max-width: 90%;
    }
}

.loading {
    text-align: center;
}
</style>