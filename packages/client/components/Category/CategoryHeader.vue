/* eslint-disable no-tabs */
<template>
  <header
    class="col-12 w-100 mt-5 p-0 rounded category-page__header__bg"
    :style="{ 'backgroundImage': `url('${backgroundPath}')` }"
	v-once
  >
    <div
      class="h-100 d-flex flex-column justify-content-center px-5 category-page__header__content"
    >
      <h1 class="text-white">
        {{ capitalizeWord(category) }}
      </h1>
      <p class="text-pale-white w-50">
        {{ categoryDescription }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CategoryHeader',
  props: {
    backgroundPath: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    categoryDescription: {
      type: String,
      required: true
    }
  },
  methods: {
    capitalizeWord (word) {
      return word[0].toUpperCase() + word.slice(1)
    }
  }
}
</script>
