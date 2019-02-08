<template>
  <div>
    Result
    <div>
      <li v-for="people in peoplelist" :key="people"><span>Name : </span>{{people.id}}</li>

    </div>
    <div>
      *******************************************
    </div>
    <div>
      <li v-for="publication in publicationlist" :key="publication">
      <p>{{publication.mainTitle}}</p>
      <p><span>Authors : </span><span v-for="author in publication.authorsIds" :key="author">{{author}}, </span></p>
      <p><span>Abstract : </span>{{publication.abstractContent}}</p>
      </li>
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
      this.url = 'http://35.247.68.0:8080/api/test/search/0/' + this.$route.query.searchtext
      axios.get(this.url).then(
        response => {
          // this.peoplelist = response.data.data.people
          // this.publicationlist = response.data.data.publication
          console.log(response)
        }
      ).catch(error => {
        console.log(error)
      })
    },
    getPeopleResults: function () {
      this.url = 'http://35.247.68.0:8080/api/test/search/people/0/' + this.$route.query.searchtext
      axios.get(this.url).then(
        response => {
          this.peoplelist = response.data.data
        }
      ).catch(error => {
        console.log(error)
      })
    },
    getPublicationResults: function () {
      this.url = 'http://35.247.68.0:8080/api/test/search/publication/0/' + this.$route.query.searchtext
      axios.get(this.url).then(
        response => {
          this.publicationlist = response.data.data
        }
      ).catch(error => {
        console.log(error)
      })
    }
  },
  data () {
    return {
      url: '',
      peoplelist: [{
        'career': [
          'string'
        ],
        'email': '',
        'firstname': '',
        'fullname': '',
        'id': '123',
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
