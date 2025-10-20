<template>
  <div class="home">
    <template v-for="movie in loadedMovie" :key="movie">
      <MovieCardComponent class="card" :title="movie.title" :src="movie.backdrop_path" :id="movie.id"></MovieCardComponent>
    </template>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>

<script setup>
import MovieCardComponent from '@/components/MovieCardComponent.vue';
import { onMounted, ref, } from 'vue';
import newMovie from '../services/new-movie.service';
import { constants } from '@/utils/constants';

let loadedMovie = ref([])

onMounted(() => {
  loadFilmes();
})

async function loadFilmes() {
  const response = await newMovie.get("movie/now_playing", {
    params: {
      api_key: constants.ACCESS_API.PARAM,
      language: constants.ACCESS_API.LANGUAGE,
      page: 1,
    }
  })

  loadedMovie.value = response.data.results.slice(0, 10);
}


</script>
