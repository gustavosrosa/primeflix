<template>
    <BToast :variant="light" :progress-props="{ variant: props.progressVariant }" :model-value="2000" class="top-0 end-0 position-fixed m-3" no-close-button="true" >
        <template #title> {{ props.toastTitle }} </template>
        {{ props.toastBody }}
    </BToast>
</template>

<script setup>
import { BToast } from 'bootstrap-vue-next';
import { defineProps  } from 'vue';

const props = defineProps(['btnText', 'toastTitle', 'toastBody', 'progressVariant']);

</script>

<style scoped></style>