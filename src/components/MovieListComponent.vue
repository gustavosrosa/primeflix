<template>
    <BTableSimple class="container" :fixed="true" responsive="sm">
        <BThead>
            <BTr>
                <BTh>ID do filme</BTh>
                <BTh>Título</BTh>
                <BTh>Selecionar</BTh>
            </BTr>
        </BThead>
        <BTbody>
            <BTr v-for="movie in props.movieList" :key="movie">
                <BTd>{{ movie.id }}</BTd>
                <BTd>{{ movie.title }}</BTd>
                <BTd>
                    <BFormCheckbox :id="movie.id" v-model="selectedItems" name="checkbox-1" :value="movie.id" @update:model-value="checkboxFunc()">
                    </BFormCheckbox>
                </BTd>
            </BTr>
        </BTbody>
    </BTableSimple>
</template>

<script setup>

import { BTableSimple, BTbody, BTr, BTd, BThead, BTh, BFormCheckbox } from 'bootstrap-vue-next';
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps(['movieList']);
const selectedItems = ref([]);
const emit = defineEmits(['movies']);

function checkboxFunc() {
    emit('movies', selectedItems.value);
}

</script>

<style scoped>

</style>