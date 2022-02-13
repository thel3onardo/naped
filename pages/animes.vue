<template>
  <div class="d-flex flex-column flex-md-row py-5">
    <div v-for="post in posts" :key="post._id" class="mx-3">
      <post-card
        :title="post.title"
        :category="post.category"
        :background-img-url="post.image_url"
        :category-visible="false"
        :title-font-size=".9"
        justify-content-type="justify-content-end"
        style="height: 250px; max-width: 338px"
      />
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
    const res = await this.$axios.get('http://localhost:4000/posts/?category=animes')
    if (res.status === 200) {
      this.posts = res.data
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
  }
}
</script>