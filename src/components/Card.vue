<template>
<div class="card">
  <div class="card__side card__side--front">
    <!-- <div class="card__picture card__picture--1">&nbsp;</div> -->
    <div class="card__heading" v-bind:style="{fontSize:inm+'rem'}">
      <span class="card__heading-span">{{post.mainTitle}}</span>
    </div>
    <div class="card__authors" v-bind:style="{fontSize:(inm-1.0)+'rem'}">
        <a v-for="(author,index) in post.authors" :key=author>
            {{author+ (index==post.authors.length-1?' ':', ')}}
        </a>
    </div>
    <br/>
    <div class="card__Abstract">
    <p class="card__Abstract-text">{{post.abstractContent}}</p>
    </div>
    <a v-on:click="openModal(post)" class="cardbtn cardbtn--green">Check detail</a>
  </div>
</div>
</template>

<style>
.cardbtn,
.cardbtn:link,
.cardbtn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 2rem;
    display: inline-block;
    border-radius: 3rem;
    -webkit-transition: all .2s;
    transition: all .2s;
    position: relative;
    font-size: 1.3rem;
    border: none;
    cursor: pointer;
    margin-top: 2rem;
    margin-left: 2rem;
}

.cardbtn:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2)
}

.cardbtn:active,
.cardbtn:focus {
    outline: none;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2)
}

.cardbtn--green {
    background-color: #fff;
    color: #55c57a
}

.cardbtn--green::after {
    background-color: #fff
}

.cardbtn::after{
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    -webkit-transition: all .4s;
    transition: all .4s
}

.cardbtn--animated {
    -webkit-animation: moveInBottom .5s ease-out .75s;
    animation: moveInBottom .5s ease-out .75s;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards
}

.card__cta {
    margin-top: 5rem;
    text-align: left;
}

.card__Abstract{
    position: static;
    left: 0;
    text-align: left;
    width: 95%;
}

.card__Abstract p{
    font-size: 1.5rem;
    left: 3rem;
    position: relative;
    height: auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.card__Abstract-title{
    left: 0;
    text-align: left;
}
.card {
    margin: auto;
    width: 80%;
    -webkit-perspective: 300rem;
    perspective: 300rem;
    -moz-perspective: 300rem;
    position: static;
    height: auto;
    margin-top: 3rem;
}

.card__side {
    height: auto;
    -webkit-transition: all .8s ease;
    transition: all .8s ease;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15)
}

.card__heading {
    font-size: 2.8rem;
    font-weight: 300;
    /* text-transform: uppercase; */
    text-align: left;
    color: #28b485;
    position: static;
    margin-top: 1em;
    margin-left: 1em;
    width: 95%
}

.card__heading-span {
    width: 95%;
}

.card__authors{
    font-size: 1.6rem;
    color: #006621;
    position: static;
    margin-left: 1.5rem;

}

.card__authors a{
    padding: 0;
    margin: 0 1rem 0 1rem;
}

.card__side--front {
    background-color: #fff
}

/* .card__side--back {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg)
} */
/*
.card:hover .card__side--front {
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg)
}

.card:hover .card__side--back {
    -webkit-transform: rotateX(0);
    transform: rotateX(0)
} */

/* @media only screen and (max-width: 56.25em),
only screen and (hover: none) {
    .card {
        height: auto;
        border-radius: 3px;
        background-color: #fff;
        -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15)
    }

    .card__side {
        height: auto;
        position: relative;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .card__side--back {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
        -webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%)
    }

    .card:hover .card__side--front {
        -webkit-transform: rotateY(0);
        transform: rotateY(0)
    }

} */

</style>

<script>
export default {
  name: 'Card',
  props: ['post', 'inm'],
  methods: {
    openModal: function (obj) {
      this.$store.dispatch('addModalPublication', obj)
      this.$store.dispatch('addReccomendation', [obj])
    }
  }
}
</script>
