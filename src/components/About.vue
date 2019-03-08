<template>
  <div class="hello">
    <h3>Publication</h3>
    <p style="text-align:left;padding-left: 30em">
      id:&emsp;{{ sth.id }}<br>
      otherId:&emsp;{{ sth.otherId }}<br>
      mainTitle:&emsp;{{ sth.mainTitle}}<br>
      subTitle:&emsp;{{ sth.subTitle}}<br>
      abstractContent:&emsp;{{ sth.abstractContent }}<br>
      content:&emsp;{{ sth.content }}<br>
      references:&emsp;{{ sth.references }}<br>
      originUrl:&emsp;{{ sth.originUrl }}<br>
      citation:&emsp;{{ sth.citation }}<br>
      collections:&emsp;{{ sth.collections }}<br>
      publishDate:&emsp;{{ sth.publishDate }}<br>
      submitDate:&emsp;{{ sth.submitDate }}<br>
      publisher:&emsp;{{ sth.publisher }}<br>
      language:&emsp;{{ sth.language }}<br>
      publicationType:&emsp;{{ sth.publicationType }}<br>
      <br>
    </p>
    <h3>People</h3>
    <ul>
      id:&emsp;{{ sth2.id }}<br>
      email:&emsp;{{ sth2.email }}<br>
      career:&emsp;{{ sth2.career }}<br>
      organization:&emsp;{{ sth2.organization }}<br>
      information:&emsp;{{ sth2.information }}<br>
      imageUrl:&emsp;{{ sth2.imageUrl }}<br>
      isUser:&emsp;{{ sth2.isUser }}<br>
      userId:&emsp;{{ sth2.userId }}<br>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'About',
  props: {
    msg: String
  },
  data () {
    return {
      sth: 'qq',
      sth2: 'cc'
    }
  },
  mounted () {
    axios.get('http://35.247.68.0:8080/api/test/publication/' + this.$route.query.userID)
      .then((response) => {
      // handle success
        console.log(response.data)
        this.sth = response.data
      })
      .catch(function (error) {
      // handle error
        console.log(error)
      })
      .then(function () {
      // always executed
      })
    axios.post('http://35.247.68.0:8080/api/test/people/', {
      'id': '377',
      'email': 'jnqh4@mail.missouri.edu',
      'career': [
        'Hardcore chef',
        'Profirer'
      ],
      'organization': [
        'Mizzou',
        'SHO'
      ],
      'information': 'Hello Zomboes',
      'imageUrl': 'http://google.com',
      'isUser': false,
      'userId': '377'
    })
      .then((response) => {
        console.log(response)
        this.sth2 = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
