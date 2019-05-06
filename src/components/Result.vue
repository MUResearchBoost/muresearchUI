<template>
  <div>
    <!-- <div v-if="getPeoAmount">
      <ul>
        <li v-for="people in peoplelist" :key="people.id">
          {{people.firstName}}
        </li>
      </ul>
    </div> -->
    <div v-if="publicationlist.length">
        <div v-for="publication in publicationlist" :key="publication.id">
          <Card
            v-bind:post="publication"
            v-bind:inm=2.8
          ></Card>
        </div>
    </div>
    <!-- <People></People> -->
  </div>
</template>

<script>
import Card from './Card.vue'
// import People from './People.vue'
export default {
  name: 'Result',
  components: {
    // People,
    Card
  },
  computed: {
    getPubAmount () {
      return this.publicationlist.length
    },
    getPeoAmount () {
      return this.peoplelist.length
    },
    publicationlist () {
      return this.$store.getters.getPublicationSearchResults
    }
  }
}
</script>
