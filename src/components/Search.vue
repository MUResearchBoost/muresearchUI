<template>
  <header class="header">
    <div class="header__logo-box">
      <img src="../img/logo-white.png" alt="Logo" class="header__logo">
    </div>

    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Muresearch Boost</span>
        <span class="heading-primary--sub">better search</span>
      </h1>
      <div>
    <form class="form">
      <div class="form__group">
        <input  v-model="searchtext" type="text" class="form__input"  onkeydown="if(event.keyCode==13)return false;" @keyup.enter="sendForm" placeholder="Search Text" id="name" required>
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
        <div class="btn btn--white btn--animated" v-on:click.once="sendForm">Discover &rarr;</div>
      </div>
    </form>
  </div>
    </div>

  </header>
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
      this.$store.dispatch('setSearchObject', {
        searchtext: this.searchtext,
        searchrange: this.searchrange
      })
      this.$emit('send-searchtext')
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
