 /* eslint-disable */
<template>
  <div>
    <header class="w-100 px-0 py-5">
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
          <post-card
            v-if="!$fetchState.pending"
            :background-img-url="posts[0].imageUrl"
            :category="posts[0].category"
            :title="posts[0].title"
            :category-font-size="0.8"
            class="h-100"
          />
          <skeleton-component v-else class="rounded" />
        </div>
        <div class="col-12 col-md-4 d-flex flex-md-column h-100 pl-0">
          <div class="h-50 pb-1">
            <skeleton-component v-if="$fetchState.pending" class="rounded" />
            <post-card
              v-else
              class="h-100"
              :background-img-url="posts[0].imageUrl"
              :category="posts[0].category"
              :title="posts[0].title"
              :title-font-size="1"
              :category-font-size=".8"
            />
          </div>
          <div class="h-50 pt-1">
            <skeleton-component v-if="$fetchState.pending" class="rounded" />
            <post-card
              v-else
              class="h-100"
              :background-img-url="posts[0].imageUrl"
              :category="posts[0].category"
              :title="posts[0].title"
              :title-font-size="1"
              :category-font-size=".8"
            />
          </div>
        </div>
      </div>
    </header>
    <recent-news v-if="posts.length > 0" :posts="posts" />
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'
import SkeletonComponent from '../components/SkeletonComponent.vue'

export default {
  name: 'Index',
  components: {
    PostCard,
    SkeletonComponent
  },
  data () {
    return {
      posts: []
    }
  },
  async fetch () {
    try {
      const res = await this.$axios.get('http://localhost:4000/posts')
      if (res.status === 200) {
        this.posts = res.data.data.posts
		console.log(this.post[0])
      }
    } catch (err) {
      return new Error(err)
    }
  },
  fetchOnServer: false,
  head () {
    return {
      title: 'Naped'
    }
  }
}
</script>
