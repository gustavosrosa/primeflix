<template>
    <ToastMovieComponent ref="toastRef" btnText="Salvar" :toastTitle="infoToast.title" :toastBody="infoToast.body" :progressVariant="infoToast.progressVariant"/>
    <section v-if="movie.title" class="container mt-5 mb-5 d-flex flex-column">
        <div class="d-grid gap-3">
            <h1>{{ movie.title }}</h1>
            <BImg :src="moviePoster(movie.backdrop_path)" width="700" fluid />
            <h2>Sinopse</h2>
            <p>{{ movie.overview }}</p>
            <h3 class="fs-5">Avaliação: {{roundAverage(movie.vote_average)}} / 10</h3>
            <div>
                <BButton type="button" @click="handleSave()" variant="danger" class="me-3">Salvar</BButton>
                <BButton type="button" target="_blank" :href="viewTrailerInYT(movie.title)">Trailer</BButton>
            </div>
        </div>
    </section>
    <section v-else>
        <LoadingComponent />
    </section>
</template>

<script setup>
import { findMovieFromId } from '@/services/new-movie.service';
import { useRoute } from 'vue-router';
import { BImg, BButton } from 'bootstrap-vue-next';
import { onMounted, ref, defineExpose } from 'vue';
import getMoviePoster from '../services/get-poster-from-path.service'
import LoadingComponent from '@/components/LoadingComponent.vue';
import ToastMovieComponent from '@/components/ToastMovieComponent.vue';
import { saveMovieIntoLocalStorage } from '../services/movie-list.service'
import { constants } from '@/utils/constants';

const route = useRoute();

let movie = ref({});
let id = ref(0);
const toastRef = ref(null);
const infoToast = ref({title: '', body: '', progressVariant: ''});

onMounted(() => {
    id.value = route.params.id;
    getMovieFromId(id.value);
})

async function getMovieFromId(id) {
    movie.value = await findMovieFromId(id);
}

function moviePoster(backdropPath) {
    return getMoviePoster(backdropPath);
}

function roundAverage(average) {
    return average.toFixed(1);
}

function viewTrailerInYT(movieTitle) {
    return `https://youtube.com/results?search_query=${movieTitle} Trailer`;
}

function saveMovie() {
    return saveMovieIntoLocalStorage(movie.value.id, movie.value.title);
}

function handleSave() {
    const movieExists = saveMovie();

    setInfoToast(movieExists);

    toastRef.value.openToast()
}

function setInfoToast(movieExists) {
    if (movieExists) {
        infoToast.value = constants.TOAST_INFORMATIONS.MOVIE_EXISTS;
        return;
    }
    infoToast.value = constants.TOAST_INFORMATIONS.MOVIE_NOT_EXISTS;
}

defineExpose({ getMovieFromId, movie, infoToast, setInfoToast })

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