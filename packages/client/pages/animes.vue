<template>
  <div class="w-100">
    <CategoryHeader
      background-path="./static/images/animes/capa-noticia.svg"
      category="animes"
      @changePostsList="changePosts"
    />
    <div class="row py-5">
      <div v-for="post in posts" :key="post._id" class="col-12 col-md-6 col-lg-4">
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
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'

export default {
  name: 'Animes',
  components: {
    PostCard
  },
  layout: 'category',
  transition: {
    name: 'layout',
    mode: 'out-in'
  },
  data () {
    return {
      posts: []
    }
  },
  async fetch () {
    const res = await this.$axios.$get(
      'http://localhost:4000/posts/?category=animes'
    )
    if (res.status === 'success') {
      this.posts = res.data.posts
    }
  },
  fetchOnServer: false,
  head () {
    return {
      title: 'Animes - Naped'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    changePosts (newPostsList) {
      this.posts = newPostsList.posts
    }
  }
}
</script>