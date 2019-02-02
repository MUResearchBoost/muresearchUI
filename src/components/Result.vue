<template>
  <div>
    Result
    <div>
      <li v-for="people in peopleJson.peoplelist" :key="people"><span>Name : </span>{{people.fullname}}</li>

    </div>
    <div>
      *******************************************
    </div>
    <div>
      <li v-for="publication in publicationJson.publicationlist" :key="publication">
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
    // alert(this.$route.query.searchtext)
    // this.url = 'http://35.247.68.0:8080/api/test/search/people/0/$(this.$route.query.searchtext)'
    if (this.$route.query.searchrange === '') {
      this.url = 'http://35.247.68.0:8080/api/test/search/0/' + this.$route.query.searchtext
    } else if (this.$route.query.searchrange === 'people') {
      this.url = 'http://35.247.68.0:8080/api/test/search/people/0/' + this.$route.query.searchtext
    } else {
      this.url = 'http://35.247.68.0:8080/api/test/search/publication/0/' + this.$route.query.searchtext
    }
    axios.get(this.url).then(
      response => {
        console.log(response.data)
      }
    ).catch(error => {
      console.log(error)
    })
  },
  data () {
    return {
      url: '',
      peopleJson: {
        'peoplelist': [{
          'career': [
            'string'
          ],
          'email': 'string',
          'firstname': 'string',
          'fullname': 'string',
          'id': 'string',
          'imageLargeUrl': 'string',
          'imageMediumUrl': 'string',
          'imageSmailUrl': 'string',
          'imageUrl': 'string',
          'information': 'string',
          'isUser': true,
          'lastname': 'string',
          'organization': [
            'string'
          ],
          'phonenumber': 'string',
          'userId': 'string'
        }
        ]
      },
      publicationJson: {
        'publicationlist': [{
          'id': '12345',
          'otherId': {
            'MOSPACE': '1234123',
            'WIKI': '345634563',
            'IEEE': '12312341'
          },
          'mainTitle': 'Main Title',
          'subTitle': 'Sub Title',
          'abstractContent': 'Abstract Content',
          'content': 'Some Content',
          'contentFileIds': [
            '1',
            '2',
            '3'
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
            '1',
            '2',
            '3'
          ],
          'publishDate': '2018-10-07T20:51:40.343+0000',
          'submitDate': '2018-10-07T20:51:40.343+0000',
          'publisher': [
            'A Publisher',
            'Other'
          ],
          'subjectIds': [
            '1',
            '2',
            '3'
          ],
          'language': 'English',
          'publicationType': 'PublicationType'
        },
        {
          'id': '12345',
          'otherId': {
            'MOSPACE': '1234123',
            'WIKI': '345634563',
            'IEEE': '12312341'
          },
          'mainTitle': 'Main Title',
          'subTitle': 'Sub Title',
          'abstractContent': 'Abstract Content',
          'content': 'Some Content',
          'contentFileIds': [
            '1',
            '2',
            '3'
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
            '1',
            '2',
            '3'
          ],
          'publishDate': '2018-10-07T20:51:40.343+0000',
          'submitDate': '2018-10-07T20:51:40.343+0000',
          'publisher': [
            'A Publisher',
            'Other'
          ],
          'subjectIds': [
            '1',
            '2',
            '3'
          ],
          'language': 'English',
          'publicationType': 'PublicationType'
        }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
