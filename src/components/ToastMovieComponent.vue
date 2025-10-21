<template>
    <BButton
    variant="danger" class="me-2"
    @click="
        create({
            title: props.toastTitle,
            variant: 'light',   
            modelValue: 2000,
            progressProps: {
                variant: 'success',
            },
            body: props.toastBody,
        })
        ">
        {{ btnText }}
    </BButton>
</template>

<script setup>
import { BButton, useToast } from 'bootstrap-vue-next';
import { defineProps } from 'vue';

const { create } = useToast()

const props = defineProps(['btnText', 'toastTitle', 'toastBody']);

</script>

<style scoped></style>