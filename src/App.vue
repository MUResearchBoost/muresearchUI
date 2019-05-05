<template>
  <div id="app">
<!--
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>01</span>About Natous
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>02</span>Your benfits
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>03</span>Popular tours
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>04</span>Stories
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div> -->

    <Search
      v-on:send-searchtext="goResult"
    >
    </Search>
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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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

    }
  }
}
</script>
