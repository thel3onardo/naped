 /* eslint-disable */
<template>
  <header class="col-12 px-0 py-5">
    <div class="row w-50 py-5 m-0">
      <h1 class="text-white font-titles w-75 display-5">
        Mundo nerd? Naped!
      </h1>
      <p class="text-pale-white w-75">
        O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.
      </p>
    </div>
    <div class="row" style="height: 350px">
      <div class="col-12 col-md-8 h-100">
        <post-card background-img-url="https://i.imgur.com/43QmdXr.png" category="movies" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor." />
      </div>
      <div class="col-12 col-md-4 d-flex flex-md-column h-100 pl-0">
        <post-card background-img-url="https://i.imgur.com/43QmdXr.png" category="movies" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor." :title-font-size=".8" :categoryFontSize=".8"/>
        <post-card background-img-url="https://i.imgur.com/43QmdXr.png" category="movies" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor." :title-font-size=".8" :categoryFontSize=".8"/>
      </div>
    </div>
  </header>
</template>

<script>
import PostCard from '../components/PostCard.vue'

export default {
  name: 'Home',
  components: { PostCard },
  head () {
    return {
      title: 'Naped'
    }
  }
}