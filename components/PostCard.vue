<template>
  <div class="w-100 h-100 post-card font-titles rounded mt-3" :style="{ 'background-image': `url('${backgroundImgUrl}')` }">
    <div class="d-flex flex-column justify-content-between w-100 h-100 p-4">
      <div class="position-relative z-10">
        <b-button variant="primary py-1 px-4 fw-400" :style="{ 'font-size': `${categoryFontSize}rem` }">
          {{ category }}
        </b-button>
      </div>
      <p class="text-light fw-400 z-10 position-relative m-0" :style="{ 'font-size': `${titleFontSize}rem` }">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    category: {
      type: String,
      required: true
    },
    categoryFontSize: {
      type: Number,
      required: false,
      default: 1
    },
    title: {
      type: String,
      required: true
    },
    titleFontSize: {
      type: Number,
      required: false,
      default: 1.5
    },
    backgroundImgUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
    .post-card
        position: relative
        background-position: center
        background-size: cover

        &:before
            content: ''
            position: absolute
            width: 100%
            height: 100%
            background-image: linear-gradient(180deg, transparent, #13131F)
            padding: 0
</style>