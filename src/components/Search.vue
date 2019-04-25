<template>
  <div>
    <form action="#" class="form">
      <div class="form__group">
        <input  v-model="searchtext" type="text" class="form__input" placeholder="Search Text" id="name" required>
        <label for="name" class="form__label">Search Text</label>
      </div>

      <div class="form__group u-margin-bottom-medium">
        <div class="form__radio-group">
          <input type="checkbox" v-model="peoplecheck" class="form__radio-input" id="peoplecheck" name="peoplecheck">
          <label for="peoplecheck" class="form__radio-label">
            <span class="form__radio-button"></span>
            People
          </label>
        </div>

        <div class="form__radio-group">
          <input type="checkbox" v-model="publicationcheck" class="form__radio-input" id="publicationcheck" name="publicationcheck">
          <label for="publicationcheck" class="form__radio-label">
            <span class="form__radio-button"></span>
            Publication
          </label>
        </div>
      </div>

      <div class="form__group">
        <button class="btn btn--white btn--animated" v-on:click="sendForm">Discover &rarr;</button>
      </div>
    </form>
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
      this.$router.push({
        name: 'Result',
        query: { searchtext: this.searchtext, searchrange: this.searchrange }
      })
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
