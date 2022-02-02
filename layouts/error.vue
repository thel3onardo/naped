<template>
    <div class="container-fluid bg-dark vw-100 d-flex justify-content-center align-items-center error-container">
        <div class="d-flex align-items-center justify-content-between">
            <div class="w-50">
                <h1 class="text-white display-5">Tenho más notícias para você!</h1>
                <p class="text-pale-white my-3 w-75">A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
                <Nuxt-link to="/"><b-button variant="primary" class="mt-4 px-4">Voltar à home</b-button></Nuxt-link>
            </div>
            <div class="d-flex flex-column align-items-center">
                <b-img src="../static/images/animes/error-page.svg" class="mb-4"></b-img>
                <p class="text-pale-white text-center py-4 w-75">Ups! Você chegou no espaço... Volte para o mundo nerd!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  transition: {
    mode: 'out-in'
  }
}
</script>

<style scoped>
.error-container {
    height: calc(100vh - 86px);
}

img {
    transition: all .5 ease;
    animation: animationErrorImage 5s linear infinite;
    will-change: transform;
}

@keyframes animationErrorImage {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(10px)
    }
    50% {
        transform: translateY(0)
    }
    75% {
        transform: translateY(-10px)
    }
    100% {
        transform: translateY(0)
    }
}
</style>