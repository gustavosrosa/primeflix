<template>
    <BNavbar variant="dark" class="d-flex px-5" >
        <BNavbarBrand to="/" variant="light">Prime Flix</BNavbarBrand>
        <BNavbarToggle target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>
            <BNavForm class="d-flex ms-auto mb-lg-0" >
                <BButton type="submit" to="/meus-filmes">Meus filmes</BButton>
            </BNavForm>
        </BCollapse>
    </BNavbar>
</template>

<style scoped>

</style>

<script setup>
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavForm, BButton } from 'bootstrap-vue-next'

</script>