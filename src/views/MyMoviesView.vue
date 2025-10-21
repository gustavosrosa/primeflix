<template>
    <div class="m-4 ms-5">
        <h1 class="mb-5" >Lista dos Filmes</h1>
        <div class="container">
            <MovieListComponent :movieList="movieList"/>
            <BButton class="mt-5" variant="danger" :disabled="true">Remover filmes</BButton>
        </div>
    </div>
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
import { getMovieStorage } from '@/services/movie-list.service';
import { onBeforeMount, reactive } from 'vue';
import { BButton } from 'bootstrap-vue-next'

let movieList = reactive([]);

onBeforeMount(() => {
    movieList = getMovieStorage();
})

</script>