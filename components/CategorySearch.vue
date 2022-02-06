<template>
  <b-form-group class="my-4 w-100">
    <b-input-group class="my-3 px-4 search">
      <b-form-input v-model="inputText" class="bg-transparent border-0 py-4 px-0" placeholder="Quer ajuda na procura? Pesquise aqui" autocomplete="off" @keydown="(key) => verifyKey(key)" />
      <b-input-group-append class="d-flex align-items-center">
        <b-icon icon="search" class="text-light cursor-pointer" @click="makeSearch" />
      </b-input-group-append>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'CategorySearch',
  data () {
    return {
      inputText: null
    }
  },
  methods: {
    makeSearch () {
      return console.log(this.inputText)
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
.search
  background: #282830
  input
    color: #989898
    &::placeholder
      color: rgba(152, 152, 152, .4)
    &:-ms-input-placeholder /* Internet Explorer 10-11 */
      color: rgba(152, 152, 152, .4)
    &::-ms-input-placeholder /* Microsoft Edge */
      color: rgba(152, 152, 152, .4)
    &:focus
      border: none
      box-shadow: none
</style>