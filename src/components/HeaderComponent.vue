<template>
    <BNavbar variant="dark" class="d-flex px-5" >
        <BNavbarBrand data-test="brand" to="/" variant="light">{{ headerText.BRAND }}</BNavbarBrand>
        <BNavbarToggle target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>
            <BNavForm class="d-flex ms-auto mb-lg-0" >
                <BButton type="submit" to="/meus-filmes">{{ headerText.BTN_TEXT }}</BButton>
            </BNavForm>
        </BCollapse>
    </BNavbar>
</template>

<style scoped>

</style>

<script setup>
import { constants } from '@/utils/constants';
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavForm, BButton } from 'bootstrap-vue-next'

const headerText = constants.FIELD_TEXTS.HEADER;

</script>