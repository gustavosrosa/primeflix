<template>
    <section class="container mt-5 d-flex flex-column">
        <div class="d-grid gap-3">
            <h1>Lorem ipsum</h1>
            <BImg src="https://picsum.photos/1024/400/?image=41" fluid />
            <h2>Sinopse</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, molestiae quis eveniet magni aut voluptas accusamus consequuntur sequi cum maxime, cumque quibusdam iure similique illo dicta laboriosam rerum maiores ipsum?</p>
            <h3 class="fs-5">Avaliação: 7,2/10</h3>
            <div>
                <BButton variant="danger" class="me-2">Salvar</BButton>
                <BButton>Trailer</BButton>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        max-width: 90%;
    }
    
}
</style>

<script setup>
import { BImg, BButton } from 'bootstrap-vue-next';

</script>