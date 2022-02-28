<template>
  <CategoryIndex
    background-path="images/movies/capa-noticia.png"
    category="movies"
    category-description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis ipsum facilis ad est deleniti."
  />
  <!-- <div class="w-100">
    <CategoryHeader
      background-path="images/filmes/capa-noticia.png"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis ipsum facilis ad est deleniti."
      category="filmes"
      @changePostsList="changePosts"
    />
    <div class="row py-5">
      <div v-for="post in posts" :key="post.id" class="col-12 col-md-6">
        <post-card
          :title="post.title"
          :category="post.category"
          :background-img-url="post.image_url"
          :category-visible="false"
          :title-font-size="0.9"
          height="250px"
          justify-content-type="justify-content-end"
          class="my-4"
        />
        <div />
      </div>
    </div>
  </div> -->
</template>

<script>
import CategoryIndex from '../components/Category/CategoryIndex.vue'

export default {
  name: 'Movies',
  components: { CategoryIndex },
  layout: 'category',
  data () {
    return {
      posts: []
    }
  },
  head () {
    return {
      title: 'Movies - Naped'
    }
  }
}
</script>