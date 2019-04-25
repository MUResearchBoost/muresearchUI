<template>
  <div>
    <div v-if="getPeoAmount">
      <ul>
        <li v-for="people in peoplelist" :key="people.id">
          {{people.firstName}}
        </li>
      </ul>
    </div>
    <div v-if="getPubAmount">
        <div v-for="publication in publicationlist" :key="publication.id">
          <Card
            v-bind:post="publication"
          ></Card>
        </div>
    </div>
    <!-- <People></People> -->
  </div>
</template>

<script>
import axios from 'axios'
<<<<<<< HEAD
export default {
  name: 'Result',
  mounted () {
    this.getResults()
  },
  methods: {
    getResults: function () {
      if (this.$route.query.searchrange === '') {
        this.getAllResults()
      } else if (this.$route.query.searchrange === 'people') {
=======
import Card from './Card.vue'
// import People from './People.vue'
export default {
  name: 'Result',
  components: {
    // People,
    Card
  },
  mounted () {
    this.getResults()
  },
  computed: {
    getPubAmount () {
      return this.publicationlist.length
    },
    getPeoAmount () {
      return this.peoplelist.length
    }
  },
  methods: {
    getResults: function () {
      if (this.$store.getters.searchObj.searchrange === '') {
        this.getAllResults()
      } else if (this.$store.getters.searchObj.searchrange === 'people') {
>>>>>>> 7128eeab1335a2654f3526f7e6ce412636cf85fe
        this.getPeopleResults()
      } else {
        this.getPublicationResults()
      }
    },
    getAllResults: function () {
      this.url =
        'http://35.247.68.0:8080/api/test/search/' +
        this.page +
        '/' +
<<<<<<< HEAD
        this.$route.query.searchtext
=======
        this.$store.getters.searchObj.searchtext
>>>>>>> 7128eeab1335a2654f3526f7e6ce412636cf85fe
      axios
        .get(this.url)
        .then(response => {
          this.peoplelist = response.data.data.people
          this.publicationlist = response.data.data.publication
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getPeopleResults: function () {
      this.url =
        'http://35.247.68.0:8080/api/test/search/people/' +
        this.page +
        '/' +
<<<<<<< HEAD
        this.$route.query.searchtext
=======
        this.$store.getters.searchObj.searchtext
>>>>>>> 7128eeab1335a2654f3526f7e6ce412636cf85fe
      axios
        .get(this.url)
        .then(response => {
          this.peoplelist = response.data.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getPublicationResults: function () {
      this.url =
        'http://35.247.68.0:8080/api/test/search/publication/' +
        this.page +
        '/' +
<<<<<<< HEAD
        this.$route.query.searchtext
=======
        this.$store.getters.searchObj.searchtext
>>>>>>> 7128eeab1335a2654f3526f7e6ce412636cf85fe
      axios
        .get(this.url)
        .then(response => {
          this.publicationlist = response.data.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
<<<<<<< HEAD
    },
    jumpToPeople: function (ID) {
      alert(ID)
      this.$router.push({ name: 'People', query: { peopleID: ID } })
    },
    jumpToPublication: function (ID) {
      this.$router.push({ name: 'Publication', query: { publicationID: ID } })
    },
    jumpToLastPage: function (page) {
      this.page = this.page - 1
      this.getResults()
    },
    jumpToNextPage: function (page) {
      this.page = this.page + 1
      this.getResults()
=======
>>>>>>> 7128eeab1335a2654f3526f7e6ce412636cf85fe
    }
    // ,
    // jumpToPeople: function(ID) {
    //   alert(ID);
    //   this.$router.push({ name: "People", query: { peopleID: ID } });
    // },
    // jumpToPublication: function(ID) {
    //   this.$router.push({ name: "Publication", query: { publicationID: ID } });
    // },
    // jumpToLastPage: function(page) {
    //   this.page = this.page - 1;
    //   this.getResults();
    // },
    // jumpToNextPage: function(page) {
    //   this.page = this.page + 1;
    //   this.getResults();
    // }
  },
  data () {
    return {
      url: '',
      page: 0,
      peoplelist: [
<<<<<<< HEAD
        {
          career: ['string'],
          email: '',
          firstname: '',
          fullname: '',
          id: '',
          imageLargeUrl: '',
          imageMediumUrl: '',
          imageSmailUrl: '',
          imageUrl: '',
          information: '',
          isUser: true,
          lastname: '',
          organization: [''],
          phonenumber: '',
          userId: ''
        }
      ],

      publicationlist: [
        {
          id: '',
          otherId: {
            MOSPACE: '',
            WIKI: '',
            IEEE: ''
          },
          mainTitle: 'Main',
          subTitle: '',
          abstractContent: 'Abstract',
          content: '',
          contentFileIds: [''],
          references: ['', ''],
          originUrl: '',
          citation: [''],
          collections: [''],
          authorsIds: ['10'],
          publishDate: '',
          submitDate: '',
          publisher: [''],
          subjectIds: [''],
          language: '',
          publicationType: ''
        }
=======
        // {
        //   career: ['string'],
        //   email: '',
        //   firstname: '',
        //   fullname: '',
        //   id: '',
        //   imageLargeUrl: '',
        //   imageMediumUrl: '',
        //   imageSmailUrl: '',
        //   imageUrl: '',
        //   information: '',
        //   isUser: true,
        //   lastname: '',
        //   organization: [''],
        //   phonenumber: '',
        //   userId: ''
        // }
      ],

      publicationlist: [
        // {
        //   id: '',
        //   otherId: {
        //     MOSPACE: '',
        //     WIKI: '',
        //     IEEE: ''
        //   },
        //   mainTitle: 'Main',
        //   subTitle: '',
        //   abstractContent: 'Abstract',
        //   content: '',
        //   contentFileIds: [''],
        //   references: ['', ''],
        //   originUrl: '',
        //   citation: [''],
        //   collections: [''],
        //   authorsIds: ['10'],
        //   publishDate: '',
        //   submitDate: '',
        //   publisher: [''],
        //   subjectIds: [''],
        //   language: '',
        //   publicationType: ''
        // }
>>>>>>> 7128eeab1335a2654f3526f7e6ce412636cf85fe
      ]
    }
  }
}
</script>
