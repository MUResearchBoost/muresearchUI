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
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Publication',
  data () {
    return {
      sth: 'qq'
    }
  },
  mounted () {
    axios.get('http://35.247.68.0:8080/api/test/publication/default')
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
