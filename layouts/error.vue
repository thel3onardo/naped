<template>
    <div class="container-fluid bg-dark vh-100 vw-100 d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center justify-content-between">
            <div class="w-50">
                <h1 class="text-white display-5">Tenho más notícias para você!</h1>
                <p class="text-pale-white my-3 w-75">A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
                <Nuxt-link to="/"><b-button variant="primary" class="mt-4 px-4">Voltar à home</b-button></Nuxt-link>
            </div>
            <div class="d-flex flex-column align-items-center">
                <b-img src="../static/images/animes/error-page.svg" class="mb-3"></b-img>
                <p class="text-pale-white text-center py-4 w-75">Ups! Você chegou no espaço... Volte para o mundo nerd!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>