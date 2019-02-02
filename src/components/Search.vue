<template>
  <div>
      Search
    <div>
      <input v-model="searchtext" placeholder="Input Here.">
      <br>
      <input type="checkbox" id="peoplecheck" value="peoplecheck" v-model="peoplecheck">
      <label for="peoplecheck">people</label>
      <input type="checkbox" id="publicationcheck" value="publicationcheck" v-model="publicationcheck">
      <label for="publicationcheck">publication</label>
    </div>
    <div>
      <button v-on:click="sendForm">
        Search
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    sendForm: function () {
      if (this.peoplecheck === true && this.publicationcheck === false) {
        this.searchrange = 'people'
      } else if (this.peoplecheck === false && this.publicationcheck === true) {
        this.searchrange = 'publication'
      }
      this.$router.push({ name: 'Result', query: { searchtext: this.searchtext, searchrange: this.searchrange } })
    }
  },
  data () {
    return {
      searchtext: '',
      peoplecheck: false,
      publicationcheck: false,
      searchrange: ''
    }
  }
}
</script>

<style scoped>

</style>
