<template>
  <div>
    Result
    <div>
      <li v-for="people in peoplelist" :key="people"><span>Name : </span><button v-on:click="jumpToPeople(people.id)">{{people.fullname}}</button></li>

    </div>
    <div>
      *******************************************
    </div>
    <div>
      <li v-for="publication in publicationlist" :key="publication">
        <p><button v-on:click="jumpToPublication(publication.id)">{{publication.mainTitle}}</button></p>
      <p><span>Authors : </span><span v-for="author in publication.authors" :key="author">{{author.fullname}}, </span></p>
      <p><span>Abstract : </span>{{publication.abstractContent}}</p>
      </li>
    </div>
    <div>
      *******************************************
    </div>
    <div>
<button v-on:click="jumpToLastPage">last page</button><button v-on:click="jumpToNextPage">next page</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
        this.getPeopleResults()
      } else {
        this.getPublicationResults()
      }
    },
    getAllResults: function () {
      this.url = 'http://35.247.68.0:8080/api/test/search/' + this.page + '/' + this.$route.query.searchtext
      axios.get(this.url).then(
        response => {
          this.peoplelist = response.data.data.people
          this.publicationlist = response.data.data.publication
          console.log(response)
        }
      ).catch(error => {
        console.log(error)
      })
    },
    getPeopleResults: function () {
      this.url = 'http://35.247.68.0:8080/api/test/search/people/' + this.page + '/' + this.$route.query.searchtext
      axios.get(this.url).then(
        response => {
          this.peoplelist = response.data.data
          console.log(response.data)
        }
      ).catch(error => {
        console.log(error)
      })
    },
    getPublicationResults: function () {
      this.url = 'http://35.247.68.0:8080/api/test/search/publication/' + this.page + '/' + this.$route.query.searchtext
      axios.get(this.url).then(
        response => {
          this.publicationlist = response.data.data
          console.log(response.data)
        }
      ).catch(error => {
        console.log(error)
      })
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
    }
  },
  data () {
    return {
      url: '',
      page: 0,
      peoplelist: [{
        'career': [
          'string'
        ],
        'email': '',
        'firstname': '',
        'fullname': '',
        'id': '',
        'imageLargeUrl': '',
        'imageMediumUrl': '',
        'imageSmailUrl': '',
        'imageUrl': '',
        'information': '',
        'isUser': true,
        'lastname': '',
        'organization': [
          ''
        ],
        'phonenumber': '',
        'userId': ''
      }
      ],

      publicationlist: [{
        'id': '',
        'otherId': {
          'MOSPACE': '',
          'WIKI': '',
          'IEEE': ''
        },
        'mainTitle': 'Main',
        'subTitle': '',
        'abstractContent': 'Abstract',
        'content': '',
        'contentFileIds': [
          ''
        ],
        'references': [
          '',
          ''
        ],
        'originUrl': '',
        'citation': [
          ''
        ],
        'collections': [
          ''
        ],
        'authorsIds': [
          '10'
        ],
        'publishDate': '',
        'submitDate': '',
        'publisher': [
          ''
        ],
        'subjectIds': [
          ''
        ],
        'language': '',
        'publicationType': ''
      }
      ]

    }
  }
}
</script>

<style scoped>

</style>
