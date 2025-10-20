<template>
    <BCard :title="props.title" style="max-width: 40rem; margin: 0 1em" class="card mb-4 mt-4" body-class="text-center">
        <BImg :src="setPoster(props.src)" fluid :alt="props.title" class="mb-4"/>
        <BButton :to="setToMovie(props.id)" variant="primary">Acessar</BButton>
    </BCard>
</template>

<script setup>

import { BCard, BButton, BImg } from 'bootstrap-vue-next';
import { defineProps } from 'vue';

const props = defineProps(['title', 'src', 'id']);

function setPoster(posterBackdropUrl) {
    return `https://image.tmdb.org/t/p/original/${posterBackdropUrl}`
}

function setToMovie(id) {
    return `/filme/${id}`;
}

</script>