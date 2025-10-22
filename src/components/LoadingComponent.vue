<template>
    <div>
        <h1 class="loading mt-5">{{ loadingText }}</h1>
    </div>
</template>

<style>

</style>

<script setup>
import { constants } from '@/utils/constants';

const loadingText = constants.FIELD_TEXTS.LOADING;

</script>