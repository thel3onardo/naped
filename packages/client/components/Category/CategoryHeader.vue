/* eslint-disable no-tabs */
<template>
  <div>
    <header
      class="col-12 w-100 mt-5 p-0 rounded anime-page__header__bg"
    >
      <div
        class="h-100 d-flex flex-column justify-content-center px-5 anime-page__header__content"
        :style="{ 'backgroundImage': `url('${backgroundPath}')` }"
      >
        <h1 class="text-white">
          Animes
        </h1>
        <p class="text-pale-white w-50">
          O Naped pode ser sua fonte de informações sobre o mundo nerd
          e outros assuntos relacionados.
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
    }
  },
  data () {
    return {
      inputText: null
    }
  },
  mounted () {
    console.log(this.backgroundPath)
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
    }
  }
}
</script>

<style lang="sass" scoped>
/* eslint-disable no-tabs */
.anime-page__header__bg
  width: 100%
  height: 300px
  position: relative
  z-index: 1

  &:before
    content: ""
    position: absolute
    width: 100%
    height: 100%
    z-index: 2
    background-image: linear-gradient(90deg, #13131f 0%, rgba(19, 19, 31, 0) 100%)

.anime-page__header__content
  position: relative
  z-index: 3

.search
  background: #282830

  input
    color: #989898
    &::placeholder
      color: rgba(152, 152, 152, 0.4)
    &:-ms-input-placeholder /* Internet Explorer 10-11 */
      color: rgba(152, 152, 152, 0.4)
    &::-ms-input-placeholder /* Microsoft Edge */
      color: rgba(152, 152, 152, 0.4)
    &:focus
      border: none
      box-shadow: none
.test
  background-image: url("../../static/images/animes/capa-noticia.svg")
</style>