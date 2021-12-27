<template>
  <div class="w-100 h-100 d-flex justify-content-between py-3">
    <div class="h-100 d-flex align-items-center">
        <h4 class="text-primary m-0">Naped</h4>
    </div>
    <div class="d-flex justify-content-between">
      <ul class="d-flex align-items-center m-0 nav-bar__menu">
        <li class="mx-4">
          <Nuxt-link to="/" class="font-weight-normal">Home</Nuxt-link>
        </li>
        <li class="mx-4">
          <Nuxt-link to="/series" class="font-weight-normal">Séries</Nuxt-link>
        </li>
        <li class="mx-4">
          <Nuxt-link to="/filmes" class="font-weight-normal">Filmes</Nuxt-link>
        </li>
        <li class="mx-4">
          <Nuxt-link to="/animes" class="font-weight-normal">Animes</Nuxt-link>
        </li>
        <li class="mx-4">
          <Nuxt-link to="/games" class="font-weight-normal">Games</Nuxt-link>
        </li>
      </ul>
      <div class="mx-4">
        <b-button variant="outline-primary" class="text-white rounded-full font-titles nav-bar__my-account__font-size ml-3 px-4 py-1">Minha conta</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>