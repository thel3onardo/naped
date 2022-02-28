/* eslint-disable no-tabs */
<template>
  <div>
    <header
      class="col-12 w-100 mt-5 p-0 rounded category-page__header__bg"
      :style="{ 'backgroundImage': `url('${backgroundPath}')` }"
    >
      <div
        class="h-100 d-flex flex-column justify-content-center px-5 category-page__header__content"
      >
        <h1 class="text-white">
          {{ capitalizeWord(category) }}
        </h1>
        <p class="text-pale-white w-50">
          {{ description }}
        </p>
      </div>
    </header>
    <b-form-group class="my-4 w-100">
      <b-input-group class="my-3 px-4 search">
        <b-form-input
          v-model="inputText"
          class="bg-transparent border-0 py-4 px-0"
          placeholder="Quer ajuda na procura? Pesquise aqui"
          autocomplete="off"
          @keydown="(key) => verifyKey(key)"
        />
        <b-input-group-append class="d-flex align-items-center">
          <b-icon
            icon="search"
            class="text-light cursor-pointer"
            @click="makeSearch"
          />
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </div>
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
    description: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      inputText: null
    }
  },
  methods: {
    async makeSearch () {
      try {
        const res = await this.$axios.$get(`http://localhost:4000/posts/?search=${this.inputText}&category=${this.category}`)

        if (res.status === 'success') {
          this.$emit('changePostsList', res.data)
        }
      } catch (err) {
        return console.error(err)
      }
    },
    verifyKey (key) {
      if (key.code === 'Enter') {
        return this.makeSearch()
      }
    },
    capitalizeWord (word) {
      return word[0].toUpperCase() + word.slice(1)
    }
  }
}
</script>