<template>
  <div class="w-100">
    <transition name="fade" appear>
      <LazyCategoryHeader :background-path="backgroundPath" :category-description="categoryDescription" :category="category" />
    </transition>
    <LazyCategorySearch :category="category" @newPostsList="newPostsList" />
    <div class="row">
      <div v-for="(post, index) in posts" :key="post._id" class="col-12 col-md-6 col-lg-4 grupos-move">
        <transition name="post-card" appear>
          <post-card
            :title="post.title"
            :category="post.category"
            :background-img-url="post.imageUrl"
            :category-visible="false"
            :title-font-size="0.9"
            :style="{ 'transition-delay': `${index / 4}s`}"
            height="250px"
            justify-content-type="justify-content-end"
            class="my-4"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryHeader from './CategoryHeader.vue'
import CategorySearch from './CategorySearch.vue'
export default {
  components: { CategoryHeader, CategorySearch },
  props: {
    category: {
      type: String,
      required: true
    },
    categoryDescription: {
      type: String,
      required: true
    },
    backgroundPath: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      posts: []
    }
  },
  async fetch () {
    try {
      const res = await this.$axios.$get(`http://localhost:4000/posts/?category=${this.category}`)
      if (res.status === 'success') {
        this.posts = res.data.posts
      }
    } catch (err) {
      return console.error(err)
    }
  },
  fetchOnServer: false,
  methods: {
    newPostsList (data) {
      this.posts = data.posts
    }
  }
}
</script>
