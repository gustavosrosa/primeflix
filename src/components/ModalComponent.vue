<template>
    <BModal ref="my-modal" v-model="show" :title="props.title" ok-variant='danger' ok-title="Excluir"
        @ok="userOption(userOptions.OK)" @cancel="userOption(userOptions.CANCEL)" @close="userOption(userOptions.CANCEL)">
        {{ props.body }}
    </BModal>
</template>

<script setup>
import { ref, defineProps, defineEmits, onUpdated } from 'vue'
import { BButton, BModal } from 'bootstrap-vue-next'
import { constants } from '@/utils/constants';

const props = defineProps(['title', 'body', 'showModal']);
const emit = defineEmits(['option']);

const show = ref(false);

onUpdated(() => {
    show.value = props.showModal;
})

const userOptions = constants.MODAL_TEXTS.OPTIONS;

function userOption(option) {
    emit('option', option)
}

</script>