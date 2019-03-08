<template>
  <div class="hello">
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
  name: 'People',
  data () {
    return {
      sth2: 'cc'
    }
  },
  mounted () {
    axios.get('http://35.247.68.0:8080/api/test/people/' + this.$route.query.peopleID)
      .then((response) => {
      // handle success
        console.log(response.data)
        this.sth2 = response.data
      })
      .catch(function (error) {
      // handle error
        console.log(error)
      })
      .then(function () {
      // always executed
      })
    /*
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
      */
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
