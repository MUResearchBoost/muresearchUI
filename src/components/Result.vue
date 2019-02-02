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
    if (this.$route.query.searchrange === '') {
      this.url = 'http://35.247.68.0:8080/api/test/search/0/' + this.$route.query.searchtext
      axios.get(this.url).then(
        response => {
          this.peoplelist = response.data.data.people
          this.publicationlist = response.data.data.publication
        }
      ).catch(error => {
        console.log(error)
      })
    } else if (this.$route.query.searchrange === 'people') {
      this.url = 'http://35.247.68.0:8080/api/test/search/people/0/' + this.$route.query.searchtext
      axios.get(this.url).then(
        response => {
          this.peoplelist = response.data.data
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
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
        'mainTitle': 'Main Title',
        'subTitle': 'Sub Title',
        'abstractContent': 'Abstract Content',
        'content': 'Some Content',
        'contentFileIds': [
          ''
        ],
        'references': [
          'A Reference',
          'Other'
        ],
        'originUrl': 'https://www.google.com',
        'citation': [
          'A Citation',
          'Other'
        ],
        'collections': [
          'A Collection',
          'Other'
        ],
        'authorsIds': [
          '1'
        ],
        'publishDate': '',
        'submitDate': '',
        'publisher': [
          'A Publisher',
          'Other'
        ],
        'subjectIds': [
          ''
        ],
        'language': 'English',
        'publicationType': 'PublicationType'
      }
      ]

    }
  }
}
</script>

<style scoped>

</style>
