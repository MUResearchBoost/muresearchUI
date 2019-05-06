<template>
  <div id="app">
    <Search v-on:send-searchtext="goResult"></Search>
    <Result v-if="this.$store.getters.hasVal"></Result>
    <Modal></Modal>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
@import './css/style.css';
</style>
<script>
import Search from './components/Search.vue'
import Result from './components/Result.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Search,
    Result,
    Modal
  },
  methods: {
    goResult: function () {
      this.$store.dispatch('goSearch', 0)
    }
  }
}
</script>
