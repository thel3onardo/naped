<template>
  <div class="container-fluid bg-dark">
    <div class="container-xl margin-x-auto row w-100 justify-content-center">
      <nav-bar />
      <header class="col-12 w-100 mx-4 mt-5 p-0 rounded anime-page__header__bg">
        <div class="h-100 d-flex flex-column justify-content-center px-5 anime-page__header__content">
          <h1 class="text-white">
            Animes
          </h1>
          <p class="text-pale-white w-50">
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.
          </p>
        </div>
      </header>
      <category-search />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>