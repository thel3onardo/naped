<template>
  <div class="w-100 d-flex flex-column text-white pb-5">
    <div class="d-inline mb-2">
      <h4 class="font-titles recent-news__h1 pb-2">
        Notícias mais recentes
      </h4>
    </div>
    <div class="row">
      <post-card
        class="col px-0 mx-3 mt-5"
        category="Lorem"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        height="250px"
        :title-font-size="0.8"
        :background-img-url="posts[0].imageUrl"
        :category-font-size=".7"
      />
      <post-card
        class="col px-0 mx-3 mt-5"
        category="Lorem"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        height="250px"
        :title-font-size="0.8"
        :background-img-url="posts[0].imageUrl"
        :category-font-size=".7"
      />
      <post-card
        class="col px-0 mx-3 mt-5"
        category="Lorem"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        height="250px"
        :title-font-size="0.8"
        :background-img-url="posts[0].imageUrl"
        :category-font-size=".7"
      />
      <div class="w-100" />
      <post-card
        class="col px-0 mx-3 mt-5"
        category="Lorem"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        height="250px"
        :title-font-size="0.8"
        :background-img-url="posts[0].imageUrl"
        :category-font-size=".7"
      />
      <post-card
        class="col px-0 mx-3 mt-5"
        category="Lorem"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        height="250px"
        :title-font-size="0.8"
        :background-img-url="posts[0].imageUrl"
        :category-font-size=".7"
      />
      <post-card
        class="col px-0 mx-3 mt-5"
        category="Lorem"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor."
        height="250px"
        :title-font-size="0.8"
        :background-img-url="posts[0].imageUrl"
        :category-font-size=".7"
      />
    </div>
  </div>
</template>

<script>
import PostCard from './PostCard.vue'
export default {
  name: 'RecentNews',
  components: { PostCard },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  mounted() {
	  console.log(this.posts[0]);
  }
}
</script>

<style lang="scss" scoped>
 h4 {
    position: relative;
    display: inline;

    &:before {
      content: '';
      position: absolute;
      width: 90%;
      height: 3px;
      bottom: 0;
      background-color: #8257E6;
    }
  }
</style>
