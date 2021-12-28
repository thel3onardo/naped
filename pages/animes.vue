<template>
  <div class="row w-100 my-5">
      <header class="col-12 w-100 my-5 mx-4 p-0 rounded anime-page__header__bg">
          <div class="h-100 d-flex flex-column justify-content-center px-4 anime-page__header__content">
            <h1 class="text-white">Animes</h1>
            <p class="text-pale-white w-50">O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
          </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'Animes',
  head () {
    return {
      title: 'Animes - Naped'
    }
  },
  async fetch () {
    const response = await this.$axios.$get('https://waifu.now.sh/sfw/waifu')

    console.log(response)
  }
  // async asyncData ({ $axios }) {
  //   const response = await $axios.$get('https://animechan.vercel.app/api/random')

  //   console.log(response)
  //   return response
  // },
  // mounted () {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()
  //     setTimeout(() => this.$nuxt.$loading.finish(), 500)
  //   })
  // }
}
</script>