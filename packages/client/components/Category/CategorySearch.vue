<template>
  <b-form-group class="my-4 w-100">
    <b-input-group class="my-3 px-4 search">
      <b-form-input
        v-model="searchString"
        class="bg-transparent border-0 py-4 px-0"
        placeholder="Quer ajuda na procura? Pesquise aqui"
        autocomplete="off"
        @keydown="(key) => verifyEnterKey(key)"
      />
      <b-input-group-append class="d-flex align-items-center">
        <b-icon
          icon="search"
          class="text-light cursor-pointer"
          @click="search"
        />
      </b-input-group-append>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'CategorySearch',
  props: {
    category: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      searchString: null
    }
  },
  methods: {
    verifyEnterKey (key) {
      if (key.code === 'Enter') {
        return this.search()
      }
    },
    async search () {
      try {
        const res = await this.$axios.$get(`http://localhost:4000/posts/?search=${this.searchString}&category=${this.category}`)

        if (res.status === 'success') {
          this.$emit('newPostsList', res.data)
        }
      } catch (err) {
        return console.error(err)
      }
    }
  }
}
</script>