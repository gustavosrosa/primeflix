<template>
  <BApp>
    <HeaderComponent />
    <router-view/>
  </BApp>
</template>

<script setup lang="ts">
  import {BApp} from 'bootstrap-vue-next'
  import HeaderComponent from './components/HeaderComponent.vue';
</script>