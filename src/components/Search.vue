<template>
  <div>
      Search
    <div>
      <input v-model="searchtext" placeholder="Input Here.">
      <br>
      <input type="checkbox" id="peoplecheck" value="peoplecheck" v-model="checkedNames" true-value="yes" false-value="no">
      <label for="peoplecheck">people</label>
      <input type="checkbox" id="publicationcheck" value="publicationcheck" v-model="checkedNames" true-value="yes" false-value="no">
      <label for="publicationcheck">publication</label>
    </div>
    <div>
      <button v-on:click="sendForm">
        Search
      </button>
    </div>
    <div>
      <br>
      <br>
      <p>Message is: {{ searchtext }}</p>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    sendForm: function () {
      alert(this.searchtext + '\n' + this.checkedNames)
    }
  },
  data () {
    return {
      searchtext: '',
      checkedNames: []
    }
  }
}
</script>

<style scoped>

</style>
