<template>
  <CategoryIndex
    background-path="images/animes/capa-noticia.svg"
    category="animes"
    category-description="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
  />
</template>

<script>
export default {
  name: 'Animes',
  layout: 'category',
  data () {
    return {
      posts: []
    }
  },
  head () {
    return {
      title: 'Animes - Naped'
    }
  }
  // mounted () {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()
  //     setTimeout(() => this.$nuxt.$loading.finish(), 1500)
  //   })
  // }
}
</script>