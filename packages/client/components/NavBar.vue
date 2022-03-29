<template>
  <div class="w-100 d-flex align-items-center justify-content-between py-5" style="z-index: 30">
    <div class="h-100 d-flex align-items-center">
      <Nuxt-link to="/" class="text-decoration-none">
        <h4 class="text-primary m-0">
          Naped
        </h4>
      </Nuxt-link>
    </div>
    <div class="d-flex justify-content-between">
      <ul class="d-flex align-items-center m-0 nav-bar__menu">
        <li class="mx-4">
          <Nuxt-link to="/" class="font-weight-normal">
            Home
          </Nuxt-link>
        </li>
        <li class="mx-4">
          <Nuxt-link to="/series" class="font-weight-normal">
            Séries
          </Nuxt-link>
        </li>
        <li class="mx-4">
          <Nuxt-link to="/movies" class="font-weight-normal">
            Filmes
          </Nuxt-link>
        </li>
        <li class="mx-4">
          <Nuxt-link to="/animes" class="font-weight-normal">
            Animes
          </Nuxt-link>
        </li>
        <li class="mx-4">
          <Nuxt-link to="/games" class="font-weight-normal">
            Games
          </Nuxt-link>
        </li>
      </ul>
      <div class="ml-5">
        <b-button variant="outline-primary" class="text-white rounded-full font-titles nav-bar__my-account__font-size ml-3 px-4 py-2">
          Minha conta
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
