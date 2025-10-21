<template>
    <BButton @click="modal = !modal"> Toggle modal </BButton>
    <BModal ref="my-modal" v-model="modal" :title="props.title" ok-variant='danger' ok-title="Excluir"
        @ok="userOption(userOptions.OK)" @cancel="userOption(userOptions.CANCEL)">
        {{ props.body }}
    </BModal>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { BButton, BModal } from 'bootstrap-vue-next'
import { constants } from '@/utils/constants';

const modal = ref(false)
const props = defineProps(['title', 'body']);
const emit = defineEmits(['option']);

const userOptions = constants.MODAL_TEXTS.OPTIONS;

function userOption(option) {
    emit('option', option)
}

</script>