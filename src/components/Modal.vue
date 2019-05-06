<template>
<div class="modal" v-if="seen">
  <div class="modal-content">
    <div class="modal-content-container">
        <div class="modal-header">
            <div class="close" v-on:click="closeModal">&times;</div>
            <h2> {{publication.mainTitle}} </h2>
        </div>
        <div class="modal-body">
          <div class="modal-author">
            <a v-for="(author,index) in publication.authors" :key=author>
              {{author+ (index==publication.authors.length-1?' ':', ')}}
            </a>
          </div>
          <div>
            publish date: {{publication.publishDate}}
            <a v-bind:href="publication.originUrl">origin url</a>
          </div>
          <hr/>
          <h2>Abstract:</h2>
          <p>{{publication.abstractContent}}</p>
        </div>
        <hr/>
        <div class="recommendation">
          <h2>Relative recommendation:</h2>
          <div v-for="publication1 in recommendationlist" :key="publication1.id">
            <Card
              v-bind:post="publication1"
              v-bind:inm=2.3
            ></Card>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>
  .modal{
      display: block;
      position: fixed;
      z-index: 1001;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.6);
  }
  p{
    font-size: 1.5rem;
  }
  .modal-content {
      background-color: #fefefe;
      margin: 10% auto;
      border: 1px solid #888;
      width: 80%;
      height: auto;
  }
  .modal-content-container {
      padding: 2rem;
  }
  .modal-header {
      padding: 2px 16px;
      background-color: white;
      font-size: 2.6rem;
      color: #5cb85c;
  }
  .modal-body{
      padding: 2px 16px;
      font-size: 1.5rem;
  }
  .recommendation{
    font-size: 1.5rem;
    padding-left: 16px;
  }
  .modal-author{
    color: #006621;
    font-size: 1.6rem;
  }
  .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      line-height: 1;
  }

  .close:hover,
  .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
  }
</style>

<script>

import Card from './Card.vue'

var a = {
  id: '5cca36819c0b1500018e9bb4',
  mainTitle: 'Parallel MapReduce: Maximizing Cloud Resource Utilization and Performance Improvement Using Parallel Execution Strategies.',
  abstractContent: "MapReduce is the preferred cloud computing framework used in large data analysis and application processing. MapReduce frameworks currently in place suffer performance degradation due to the adoption of sequential processing approaches with little modification and thus exhibit underutilization of cloud resources. To overcome this drawback and reduce costs, we introduce a Parallel MapReduce (PMR) framework in this paper. We design a novel parallel execution strategy of Map and Reduce worker nodes. Our strategy enables further performance improvement and efficient utilization of cloud resources execution of Map and Reduce functions to utilize multicore environments available with computing nodes. We explain in detail makespan modeling and working principle of the PMR framework in the paper. Performance of PMR is compared with Hadoop through experiments considering three biomedical applications. Experiments conducted for BLAST, CAP3, and DeepBind biomedical applications report makespan time reduction of 38.92%, 18.00%, and 34.62% considering the PMR framework against Hadoop framework. Experiments' results prove that the PMR cloud computing platform proposed is robust, cost-effective, and scalable, which sufficiently supports diverse applications on public and private cloud platforms. Consequently, overall presentation and results indicate that there is good matching between theoretical makespan modeling presented and experimental values investigated.",
  originUrl: 'none',
  publicationType: 'Journal Article',
  publishDate: '2019-02-20T00:00:00.000+0000',
  collections: [],
  authors: [
    'Ahmed Abdulhakim Al-Absi',
    'Najeeb Abbas Al-Sammarraie',
    'Wael Mohamed Shaher Yafooz',
    'Dae-Ki Kang'
  ],
  otherId: {
    PMID: '30417014',
    ELocationID: '10.1155/2018/7501042'
  }
}

export default {
  name: 'Modal',
  components: {
    Card
  },
  computed: {
    publication () {
      return this.$store.getters.getModalPublication
    },
    seen () {
      return this.$store.getters.getModalSeen
    }
  },
  data () {
    return {
      recommendationlist: [
        a, a, a
      ]
    }
  },
  methods: {
    closeModal: function () {
      this.$store.dispatch('rmModalPublication')
    }
  }
}

</script>
