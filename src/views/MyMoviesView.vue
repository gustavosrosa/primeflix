<template>
    <div class="m-4 ms-5">
        <h1 class="mb-5" >Lista dos Filmes</h1>
        <div class="container">
            <MovieListComponent @movies="selectedMovies" :movieList="movieList"/>
            <BButton @click="showModal = !showModal" class="mt-5" variant="danger" :disabled="moviesToDelete.length == 0">Remover filmes</BButton>
        </div>
    </div>
    <ModalComponent @option="selectedOption" :ok_title="modalInfo.DELETE_MOVIES" :cancel_title="modalInfo.CANCEL_ACTION" :title="modalInfo.TITLE" :body="modalInfo.BODY" :showModal="showModal"/>
    <ToastMovieComponent ref="toastRef" :toastTitle="infoToast.title" :toastBody="infoToast.body" :progressVariant="infoToast.progressVariant" />
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>

<script setup>
import MovieListComponent from '@/components/MovieListComponent.vue';
import { getMovieStorage, setItemInStorage } from '@/services/movie-list.service';
import { onBeforeMount, reactive, ref } from 'vue';
import { BButton } from 'bootstrap-vue-next'
import ModalComponent from '@/components/ModalComponent.vue';
import { constants } from '@/utils/constants';
import { removeSelectedMovies } from '@/utils/list.util';
import ToastMovieComponent from '@/components/ToastMovieComponent.vue';

const modalInfo = constants.MODAL_TEXTS.ARE_YOU_SURE_TO_REMOVE;
const infoToast = constants.TOAST_INFORMATIONS.DELETE_SUCCESSFUL;

let movieList = reactive([]);
let moviesToDelete = ref([]);
let showModal = ref(false);
const toastRef = ref(null);

onBeforeMount(() => {
    movieList = getMovieStorage();
})

function selectedMovies(movies) {
    moviesToDelete.value = movies;
}

function selectedOption(option) {
    if (option == constants.MODAL_TEXTS.OPTIONS.OK) {
        let filteredMovieList = removeSelectedMovies(moviesToDelete.value, movieList);

        setItemInStorage(filteredMovieList);
        toastRef.value.openToast();
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    showModal.value = false;
}

</script>