<template>
    <BToast v-if="active" v-model="active" variant="light" :progress-props="{ variant: props.progressVariant }" :model-value="2000" class="top-0 end-0 position-fixed m-3" :no-close-button="true" >
        <template #title> {{ props.toastTitle }} </template>
        {{ props.toastBody }}
    </BToast>
    
</template>

<script setup>
import { BToast } from 'bootstrap-vue-next';
import { defineProps, ref, defineExpose } from 'vue';

const props = defineProps(['btnText', 'toastTitle', 'toastBody', 'progressVariant']);

const active = ref(false);

function openToast(option) {
    console.log(option)
    active.value = true
}

defineExpose({ openToast })


</script>

<style scoped></style>