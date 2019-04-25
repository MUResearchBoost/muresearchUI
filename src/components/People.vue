<template>
  <div id="app">
    <div class="container-fluid wrapper-body__nm">
      <main id="main" class="container main">
        <div>
          <a href="#" class="vue-skip-to">Skip to main content</a>
          <div class="page home">
            <section class="row section-more home__see-more">
              <div class="column more-posts sm-100 md-67">
                <div
                  itemscope="itemscope"
                  itemtype="#"
                  class="card-author box-default footer__card-author card-author--no-shadow"
                >
                  <div class="row">
                    <div class="column xs-33">
                      <img
                        src="../assets/2.jpg"
                        itemprop="image"
                        alt="Avatar photo of Ding Hao"
                        class="card-author__avatar"
                      >
                    </div>
                    <div class="column xs-67 card-author-info">
                      <div class="card-author-info__role">
                        <span class="bullet no_bw bullet--primary bullet--undefined"></span>
                        <span itemprop="jobTitle" class="meta-text">Student</span>
                      </div>
                      <a href="#" class="card-author__link" itemprop="url">
                        <h3 itemprop="name" class="card-author-info__title">Ding Hao</h3>
                      </a>
                      <div class="card-author-info__joined">
                        <span class="text">hd945@mail.missouri.edu</span>
                      </div>
                      <div class="card-author-social"></div>
                    </div>
                  </div>
                </div>
                <div></div>
                <ul class="more-posts__list">
                  <li class="more-posts__item">
                    <h2>
                      Deep learning allows computational models that are composed of multiple processing layers to
                      learn representations of data with multiple levels of abstraction. 😝
                    </h2>
                  </li>
                </ul>
                <!---->
              </div>
              <div class="column more-sidebar sm-100 md-33">
                <div class="sidebar">
                  <!---->
                  <div class="sidebar__categories">
                    <h3 class="meta-text meta-text--primary">organization</h3>
                    <nav class="categories">
                      <ul class="categories__list">
                        <li class="categories__item">
                          <a href="#" class="categories__link">
                            <span class="bullet no_bw bullet--vuejs bullet--small"></span>
                            <span class="meta-text">University Of Missouri</span>
                          </a>
                        </li>
                        <li class="categories__item">
                          <a href="#" class="categories__link">
                            <span class="bullet no_bw bullet--html5 bullet--small"></span>
                            <span class="meta-text">Google</span>
                          </a>
                        </li>
                        <!---->
                      </ul>
                    </nav>
                  </div>
                  <div class="sidebar__categories">
                    <h3 class="meta-text meta-text--primary">career</h3>
                    <nav class="categories">
                      <ul class="categories__list">
                        <li class="categories__item">
                          <a href="#" class="categories__link">
                            <span class="bullet no_bw bullet--vuejs bullet--small"></span>
                            <span class="meta-text">Software Engineer</span>
                          </a>
                        </li>
                        <li class="categories__item">
                          <a href="#" class="categories__link">
                            <span class="bullet no_bw bullet--html5 bullet--small"></span>
                            <span class="meta-text">Professor</span>
                          </a>
                        </li>
                        <!---->
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <!---->
          <!---->
        </div>
      </main>
      <footer class="footer">
        <div class="footer-box1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1366 161"
            class="footer-box__shape"
          >
            <path
              d="M-11.925-4809v-154.746c40.454,19.75,273.683,130.936,420.544,142.612,161.25,12.821,339.978-42.709,521.543-86.3,169.82-40.769,395.43,29.2,423.912,38.429v60Z"
              transform="translate(11.926 4970)"
            ></path>
          </svg>
        </div>
        <div class="footer-box2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1366 246"
            class="footer-box__shape"
          >
            <path
              d="M-1505.5-4725.5v-238.1c8.149-3.133,18.138-5.059,29.672-5.9h30.954c201.21,11.667,696.6,224.535,855.572,236.458,205.129,15.385,287.179-164.1,432.047-175.625a42.381,42.381,0,0,1,16.756,1.857V-4725.5Z"
              transform="translate(1506 4971)"
            ></path>
          </svg>
        </div>
      </footer>
    </div>
    <div data-v-d2ab3a3c id="announcer" aria-live="polite" aria-atomic="true" class="announcer"></div>
    <!---->
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
    axios
      .get(
        'http://35.247.68.0:8080/api/test/people/' + this.$route.query.peopleID
      )
      .then(response => {
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
.ui-input-field.reset-input {
  font-family: inherit;
  font-size: 1rem;
  padding: 10px 24px;
  border-radius: 60px;
  background-color: #fff;
  color: #343434;
}
.newsletter {
  text-align: center;
}
.newsletter__title {
  font-size: 1.625rem;
  line-height: 1.625rem;
}
@media (max-width: 576px) {
  .newsletter__title {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
}
.newsletter__form {
  display: flex;
  position: relative;
  margin-top: 20px;
  justify-content: center;
}
.newsletter__label {
  width: 100%;
  max-width: 300px;
}
.newsletter__input {
  width: 100%;
  padding: 12px 20px;
}
.newsletter__input.ui-input-field {
  border-radius: 60px 0 0 60px;
}
.newsletter__button {
  position: relative;
  right: 17px;
  top: -1px;
}
@media (max-width: 576px) {
  .newsletter__form {
    flex-wrap: wrap;
  }
  .newsletter__label {
    max-width: none;
  }
  .newsletter__input.ui-input-field {
    border-radius: 60px;
  }
  .newsletter__button {
    margin-top: 16px;
    right: 0;
  }
}
.back-button {
  position: relative;
}
.back-button__icon {
  display: inline-block;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.bullet {
  position: relative;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: #000;
  display: inline-block;
}
.bullet--small {
  width: 6px;
  height: 6px;
}
.bullet--primary {
  background-color: $colorPrimary;
}
.footer {
  position: relative;
  overflow: hidden;
}
.footer-box__shape {
  position: absolute;
  bottom: 0;
  left: 0;
}
.footer-box1 {
  height: 175px;
  top: 4px;
}
.footer-box1 .footer-box__shape {
  fill: #35495e;
}
.footer-box2 {
  height: 250px;
  background-color: #35495e;
  bottom: -2px;
}
.footer-box2 .footer-box__shape {
  fill: #263647;
}
.footer-box3 {
  background-color: #263647;
  padding: 50px 0;
}
.footer-box1,
.footer-box2,
.footer-box3 {
  position: relative;
}
.footer-social__list {
  display: inline-block;
  margin-top: 8%;
  margin-left: 30px;
  z-index: 2;
  position: relative;
}
.footer-social__item {
  display: inline;
  margin-right: 16px;
  color: #fff;
}
.footer-social__icon {
  color: #fff;
  font-size: 2rem;
}
.footer-newsletter {
  position: relative;
  width: 40%;
  float: right;
  margin-top: -10px;
  margin-right: 12%;
  z-index: 10;
}
.footer-newsletter .newsletter,
.footer-newsletter .newsletter .meta-text {
  color: #fff;
}
.footer-card {
  position: relative;
}
.footer__card-author {
  position: relative;
  z-index: 6;
  margin-left: 8px;
  margin-right: 8px;
}
.watermark-logo {
  position: absolute;
  top: -150px;
  left: -30px;
  width: 472px;
  height: 429px;
  background-image: url(/watermark-logo.png);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 5;
}
.footer-nav {
  padding-right: 4vw !important;
  z-index: 6;
}
.footer-nav__box {
  text-align: right;
}
.footer-nav .title {
  color: #fff;
  font-weight: 700;
  font-size: 0.875rem;
}
.footer-nav1,
.footer-nav2 {
  margin-top: 10px;
}
.footer-nav1__item,
.footer-nav2__item {
  font-size: 0.75rem;
  color: #fff;
}
.footer-nav1__item a,
.footer-nav2__item a {
  float: right;
  display: block;
  width: 85%;
  padding: 6px 4px;
  margin-bottom: 3px;
}
.footer-nav1__item a:hover,
.footer-nav2__item a:hover {
  text-decoration: underline;
  color: #fff;
}
.footer-copy {
  color: #fff;
  font-size: 11px;
  text-align: right;
  padding-top: 50px;
  padding-right: 4vw !important;
}
.footer-copy a:hover {
  color: #3eaf7c;
}
@media (max-width: 576px) {
  .footer-box2 {
    height: 110px;
  }
  .footer-card {
    order: 2;
    margin: 40px 0;
  }
  .footer-copy {
    order: 3;
    text-align: center;
    padding-top: 10px;
  }
  .footer-nav {
    order: 1;
  }
  .footer-nav__box--1.column {
    text-align: left;
    padding-left: 5vw !important;
  }
  .footer-nav__box--2.column {
    padding-right: 5vw !important;
  }
  .footer-nav1__item a {
    float: left;
  }
  .footer-social__list {
    position: relative;
    left: 50%;
    margin-top: 5%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .footer-newsletter {
    display: none;
  }
}
@media (max-width: 768px) {
  .footer-newsletter {
    width: 50%;
    margin-right: 8%;
  }
}
@media (min-width: 1200px) {
  .footer-box1 {
    height: 249px;
  }
}
.spinner {
  width: 60px;
  height: 60px;
}
.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ae4967;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}
.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
@-webkit-keyframes sk-bounce {
  0%,
  to {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes sk-bounce {
  0%,
  to {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
.observer {
  position: relative;
  height: 100%;
  min-height: 200px;
}
.observer--displayed {
  min-height: auto;
}
.observer__spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: visibility 0.5s 1s, opacity 0.5s 1s;
}
.observer__spinner--hide {
  opacity: 0;
  visibility: hidden;
}
.bizu {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.bizu:hover .bizu-info__link {
  text-decoration: underline;
}
.bizu--vertical {
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
}
.bizu--vertical .bizu-image,
.bizu--vertical .bizu-info {
  width: 100%;
  padding-right: 0;
}
.bizu--vertical .bizu-info {
  padding-bottom: 40px;
}
.bizu-close {
  position: absolute;
  top: 6px;
  right: 12px;
  color: #666;
  cursor: pointer;
}
.bizu-image {
  width: 45%;
  padding-right: 20px;
}
.bizu-image__image {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.bizu-info {
  position: relative;
  width: 55%;
}
.bizu-info__text {
  margin-top: 10px;
  font-size: 0.875rem;
  color: #5d5d5d;
  line-height: 1rem;
}
.bizu-info__by {
  position: relative;
  margin-top: 10px;
  font-size: 0.75rem;
  color: #666;
}
.bizu-info__link {
  display: block;
}
.elevator {
  position: relative;
  z-index: 99;
}
.elevator__link {
  position: fixed;
  border-radius: 50%;
  padding: 12px 18px;
  display: inline-block;
  transition: bottom 0.5s;
  right: 12vw;
  bottom: -300px;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  background-color: #ae4967;
  transition: all 0.5s;
}
.elevator__link--fire {
  -webkit-animation: fire 1s linear infinite;
  animation: fire 1s linear infinite;
}
.elevator__link--show {
  bottom: 300px;
  opacity: 1;
  visibility: visible;
}
.elevator__icon {
  display: inline-block;
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  font-size: 20px;
  color: #fff;
  top: 2px;
}
@-webkit-keyframes fire {
  0% {
    box-shadow: 0 30px 5px -10px #35495e;
  }
  40% {
    box-shadow: 0 15px 5px -10px #253342;
  }
  60% {
    box-shadow: 0 30px 5px -10px #35495e;
  }
  80% {
    box-shadow: 0 15px 5px -10px #253342;
  }
  to {
    box-shadow: 0 30px 5px -10px #35495e;
  }
}
@keyframes fire {
  0% {
    box-shadow: 0 30px 5px -10px #35495e;
  }
  40% {
    box-shadow: 0 15px 5px -10px #253342;
  }
  60% {
    box-shadow: 0 30px 5px -10px #35495e;
  }
  80% {
    box-shadow: 0 15px 5px -10px #253342;
  }
  to {
    box-shadow: 0 30px 5px -10px #35495e;
  }
}
.switch-bw {
  display: flex;
}
.switch-bw__text {
  font-size: 8px;
  color: #000;
  text-transform: uppercase;
  margin-right: 12px;
  margin-top: 5px;
  letter-spacing: 0.5px;
}
.switch-bw__text--turnon {
  color: #fff;
}
.switch-bw__label {
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 9px;
  background-color: #e2e2e2;
  cursor: pointer;
}
.switch-bw__ball {
  position: absolute;
  top: -2px;
  left: -3px;
  width: 24px;
  height: 24px;
  background: #ae4967;
  border-radius: 50%;
  transition: left 0.5s;
}
.switch-bw__input {
  opacity: 0;
  cursor: pointer;
}
.switch-bw__input:checked + .switch-bw__ball {
  left: 20px;
  background-color: #999;
}
.nav-mobile {
  position: relative;
}
.nav-mobile__title {
  display: block;
  font-weight: 700;
  font-size: 18px;
  padding-top: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #c97d94;
}
.nav-mobile__list {
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
}
.nav-mobile__item {
  padding-right: 5px;
  margin-bottom: 10px;
}
@media (max-width: 576px) {
  .nav-mobile__item {
    width: 50%;
  }
}
.nav-mobile__link {
  padding: 12px;
  display: block;
  color: hsla(0, 0%, 100%, 0.8);
  font-weight: 700;
  border-radius: 10px;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
}
.nav-mobile__link .bullet {
  width: 6px;
  height: 6px;
  top: 5px;
  margin-right: 8px;
}
.nav-mobile__link:hover {
  color: #ae4967;
  background-color: hsla(0, 0%, 100%, 0.8);
}
.languages {
  font-size: 0.75rem;
  width: 70px;
  padding: 10px;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 2;
}
.languages,
.languages__box {
  display: inline-block;
}
.languages__list {
  height: 0;
  overflow: hidden;
  transition: all 0.2s;
  padding-left: 2px;
  padding-right: 14px;
}
.languages__item {
  margin-bottom: 2px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s 0.2s;
}
.languages__item:before {
  content: "-";
  color: #ae4967;
}
.languages__link {
  padding: 7px 4px;
  display: inline-block;
}
.languages__link:hover {
  color: #ae4967;
  text-decoration: underline;
}
.languages__icon {
  display: inline-block;
  padding: 2px;
  position: relative;
  top: -2px;
  margin-left: 4px;
  border: solid #ae4967;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  transition: all 0.5s;
}
.languages:hover {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  background-color: #fff;
  box-shadow: 1px 1px 99px #e2e2e2;
  border-radius: 10px;
}
.languages:hover > .languages__list {
  margin-top: 18px;
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
}
.languages:hover > .languages__list .languages__item {
  visibility: visible;
  opacity: 1;
  transition: all 0.5s 0.2s;
}
.languages:hover .languages__icon {
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
  top: 1px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(53, 73, 94, 0.5);
  z-index: 9;
}
.share__item {
  display: inline-flex;
}
.share__item:not(:last-child) {
  margin-right: 25px;
}
.share__item .txt-share {
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  top: -3px;
}
.share__link {
  cursor: pointer;
}
.share__link.-filler-s-gplus .icon {
  font-size: 18px;
  top: -3px;
}
.share__icon {
  font-size: 13px;
  width: 24px;
  height: 14px;
  text-align: center;
}
.share__text {
  font-size: 10px;
  float: left;
  margin-top: 1px;
  margin-left: 5px;
}
.vue-skip-to {
  position: absolute;
  left: -10000px;
  top: 0;
  z-index: 1000;
  min-width: 1px;
  min-height: 1px;
  overflow: hidden;
  padding: 8px 10px;
  color: #fff;
}
.vue-skip-to:focus {
  background-color: maroon;
  left: 0;
}
.table-contents {
  width: 100%;
}
@media (max-width: 576px) {
  .table-contents {
    max-width: 300px;
  }
}
.table-contents__title {
  font-size: 2rem;
  line-height: 1em;
  margin-bottom: 30px;
}
.table-contents__item {
  counter-increment: a;
  margin-bottom: 10px;
}
.table-contents__item:before {
  content: counter(a);
  border-radius: 5px;
  margin-right: 4px;
  background-color: #ae4967;
  color: #fff;
  width: 25px;
  padding: 4px 0;
  text-align: center;
  display: inline-block;
  font-weight: 700;
}
.table-contents__link {
  color: #343434;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 10px;
}
.table-contents__link:hover {
  text-decoration: underline;
}
.badge[data-v-099ab69c] {
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 0 6px;
  color: #fff;
  margin-right: 5px;
  background-color: #42b983;
}
.badge.middle[data-v-099ab69c] {
  vertical-align: middle;
}
.badge.top[data-v-099ab69c] {
  vertical-align: top;
}
.badge.green[data-v-099ab69c],
.badge.tip[data-v-099ab69c] {
  background-color: #42b983;
}
.badge.error[data-v-099ab69c] {
  background-color: #da5961;
}
.badge.warn[data-v-099ab69c],
.badge.warning[data-v-099ab69c],
.badge.yellow[data-v-099ab69c] {
  background-color: #e7c000;
}
.header-nav__link:first-child {
  background-color: #ae4967;
}
.header-nav__link:nth-child(2) {
  background-color: #35495e;
}
.header-nav__link:nth-child(3) {
  background-color: #263647;
}
.header-nav__link:nth-child(4) {
  background-color: #581845;
}
.bullet {
  background-color: #ae4967 !important;
}
.content.custom > .typeform--fix {
  overflow: hidden;
  min-height: 500px;
}
.content.custom > .typeform--fix .lazy-load-iframe {
  margin-top: -350px;
}
.content.custom > .email-link {
  display: none;
}
@media (max-width: 480px) {
  .content.custom > .typeform {
    display: none;
  }
  .content.custom > .email-link {
    display: block;
  }
}
.search,
.search__icon {
  position: relative;
}
.search__icon {
  float: right;
  padding: 10px;
  cursor: pointer;
}
.search__icon:hover {
  color: #ae4967;
}
.search-box {
  position: absolute;
  top: 74px;
  right: 0;
  z-index: 10;
  width: 88vw;
  max-width: 400px;
  padding: 20px;
  padding-bottom: 40px;
  background-color: #fff;
  overflow: auto;
  border-radius: 0 0 10px 10px;
}
.search-box__input.reset-input {
  position: relative;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #343434;
  font-family: inherit;
  font-size: 1.625rem;
  outline: none;
  border-bottom: 1px solid #ccc;
}
.search-box__input.reset-input:focus {
  border-top-color: #666;
  border-bottom-color: #666;
}
.search-box__input.reset-input::-webkit-input-placeholder {
  color: #666;
}
.search-box__input.reset-input::-ms-input-placeholder {
  color: #666;
}
.search-box__input.reset-input::placeholder {
  color: #666;
}
.search-box--show .search-box__input {
  opacity: 1;
  visibility: visible;
}
.search-box--show .suggestions {
  position: relative;
  margin-top: 20px;
  width: 100%;
  background-color: #fff;
  z-index: 10;
}
@media (max-width: 576px) {
  .search-box--show .suggestions {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.search-box--show .suggestion__badge {
  width: 66px;
  height: 30px;
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
  margin-right: 10px;
  text-align: center;
  display: inline-block;
  padding: 6px 4px;
  color: #ae4967;
  border-radius: 6px;
  font-size: 8px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  background-color: #f2f2f2;
}
.search-box--show .suggestion__badge--post {
  color: #5abf97;
}
.search-box--show .suggestion__badge--author {
  color: #ff0085;
}
.search-box--show .suggestion__badge--page {
  color: #c70039;
}
@media (max-width: 576px) {
  .search-box--show .suggestion__badge {
    display: block;
    margin-bottom: 10px;
  }
}
.search-box--show .suggestion__link {
  line-height: 1.4;
  padding: 1em 0.5em;
  border-radius: 4px;
  cursor: pointer;
  white-space: normal;
  color: #7b7b7b;
  display: flex;
}
.search-box--show .suggestion__link .page-title {
  font-weight: 600;
}
.search-box--show .suggestion__link .page-title span {
  margin-top: 4px;
  display: block;
  margin: 0;
}
.search-box--show .suggestion__link .header {
  font-size: 0.9em;
  margin-left: 0.25em;
  display: inline;
}
.search-box--show .suggestion__link:hover {
  background-color: #f3f4f5;
  color: #35495e;
}
.hamburguer {
  width: 44px;
  height: 44px;
  cursor: pointer;
}
.hamburguer__wrapper {
  width: 30px;
  position: relative;
  left: 50%;
  top: 12px;
  margin-left: -15px;
  transition: 0.5s ease-in-out;
}
.hamburguer__line,
.hamburguer__wrapper {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.hamburguer__line {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: #ae4967;
  border-radius: 50px;
  opacity: 1;
  left: 0;
  transition: 0.25s ease-in-out;
}
.hamburguer__line:first-child {
  top: 0;
}
.hamburguer__line:nth-child(2) {
  top: 8px;
  width: 60%;
}
.hamburguer__line:nth-child(3) {
  top: 16px;
  width: 80%;
}
.hamburguer--open .hamburguer__line:first-child {
  top: 8px;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.hamburguer--open .hamburguer__line:nth-child(2) {
  opacity: 0;
  position: fixed;
  left: 700px;
  width: 100%;
}
.hamburguer--open .hamburguer__line:nth-child(3) {
  top: 8px;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
  width: 100%;
}
.header-nav__link {
  display: block;
  position: relative;
  padding-top: 26px;
  padding-bottom: 26px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}
.header-nav__link:hover {
  color: #fff;
  text-decoration: underline;
}
.header-nav__link--semantica {
  background-color: #41b883;
}
.header-nav__link--acessibilidade {
  background-color: #c70039;
}
.header-nav__link--seo {
  background-color: #900c3f;
}
.header-nav__link--ux {
  background-color: #581845;
}
.header-nav__link.router-link-exact-active:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-bottom-color: #fff;
}
.header--search-open {
  position: relative;
  z-index: 20;
}
.header__logo {
  text-align: center;
}
.header-navigation.header-nav {
  position: relative;
}
@media (max-width: 576px) {
  .header-navigation.header-nav {
    display: none;
  }
}
.header-top {
  position: relative;
  padding: 30px 20px 24px;
  background-color: #fff;
}
.header-top__hamburguer {
  position: relative;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.header-top__toggle.switch-bw {
  position: absolute;
  bottom: -35px;
  right: 10px;
}
.header-top__languages {
  position: absolute;
  top: 32px;
  left: 100px;
}
@media (max-width: 576px) {
  .header-top__languages {
    top: auto;
    bottom: -42px;
    left: 18px;
  }
}
@media (max-width: 576px) {
  .header-top {
    top: 0;
    left: 0;
    width: 100%;
  }
  .header-top__toggle.switch-bw {
    display: none;
  }
}
.card {
  display: flex;
}
.card.box-default {
  padding-bottom: 0;
}
.card--cover-top .card-title {
  height: 84px;
}
.card__box1 {
  width: 100%;
  min-width: 120px;
}
.card__box1--left {
  order: 2;
  padding-right: 30px;
}
.card__box2 {
  min-width: 120px;
}
.card__box2--left {
  order: 1;
  padding-right: 30px;
}
.card__box2--right {
  padding-left: 30px;
}
@media (max-width: 768px) {
  .card__box1 {
    width: 100%;
  }
  .card__box2 {
    display: none;
  }
}
.card-category__link {
  display: inline-block;
  margin-bottom: 10px;
}
.card-cover {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
}
.card-cover__image {
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.card-cover__image--top {
  height: 150px;
}
.card-cover__image--side {
  height: 120px;
}
.card-title {
  display: block;
  height: 60px;
}
.card-title__text {
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 700;
}
@media (max-width: 1024px) {
  .card-title__text {
    font-size: 1rem;
    line-height: 1rem;
  }
}
@media (max-width: 768px) {
  .card-title {
    height: -webkit-max-content !important;
    height: -moz-max-content !important;
    height: max-content !important;
    padding-bottom: 20px;
  }
}
.card-info.row {
  border-top: 0.5px solid #ebebeb;
}
.card-info.row .column {
  padding: 0;
}
.card-info__item {
  display: inline-flex;
}
.card-info__item .youtube-play {
  top: 3px;
}
.card-readmore,
.card-readtime,
.card-timeago {
  font-size: 0.75rem;
  color: #666;
  padding: 16px 0;
}
.card-readmore {
  position: relative;
  right: 4px;
  display: block;
  text-align: right;
}
.card-readmore__icon {
  margin-left: 6px;
}
.card-readmore__text {
  text-transform: uppercase;
}
.card-readmore:hover .card-readmore__icon {
  -webkit-animation-name: arrow;
  animation-name: arrow;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
@-webkit-keyframes arrow {
  0% {
    left: 0;
  }
  50% {
    left: 6px;
  }
  to {
    left: -5px;
  }
}
@keyframes arrow {
  0% {
    left: 0;
  }
  50% {
    left: 6px;
  }
  to {
    left: -5px;
  }
}
.ui-button {
  font-family: inherit;
  padding: 14px 30px;
  border-radius: 60px;
}
.ui-button.ui-button--primary {
  background-color: #ae4967;
  color: #fff;
  transition-property: background-color;
  transition-duration: 0.5s;
}
.ui-button.ui-button--primary:hover {
  background-color: #8b3a52;
}
.section-more {
  border-top: 1px solid #ebebeb;
}
.more-posts__list {
  margin-top: 30px;
}
.more-posts.column {
  padding-right: 30px;
}
.allposts-button {
  margin-top: 50px;
  text-align: center;
}
.allposts-button .ui-button {
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .more-sidebar {
    border-left: 1px solid #ebebeb;
  }
}
.more-sidebar.column {
  padding-left: 30px;
}
.more-posts,
.more-sidebar {
  padding-top: 30px;
  padding-bottom: 30px;
}
.categories__item {
  margin-bottom: 2px;
}
.categories__item--inline {
  display: inline-flex;
  margin-right: 4px;
}
.categories__item--inline .categories__link {
  padding: 12px;
  margin-bottom: 4px;
}
.categories__item .meta-text {
  margin-bottom: 16px;
}
.categories__link {
  display: block;
  padding: 6px 0;
}
.categories__link .bullet {
  margin-right: 4px;
  top: -1px;
}
.sidebar {
  padding-top: 50px;
}
.sidebar__bizu {
  margin-bottom: 40px;
}
.sidebar__categories .categories {
  margin-top: 10px;
}
@media (max-width: 768px) {
  .home__first-card {
    margin-bottom: 30px;
  }
}
.home__see-more.row,
.single-page .page-content {
  margin-top: 50px;
}
.section-contact__title {
  margin-top: 5px;
  font-size: 1.625rem;
}
.section-contact__button.ui-button {
  position: relative;
  left: -26px;
}
.page-header-cat {
  margin-top: 14px;
}
.post-cover {
  width: 100%;
  height: 358px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #f7ecf0;
}
@media (max-width: 768px) {
  .post-cover {
    height: 192px;
  }
}
.post-cover--video {
  height: 80vh;
}
@media (max-width: 768px) {
  .post-cover--video {
    height: 300px;
  }
}
.post-cover__image {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.post-share {
  position: relative;
  margin-bottom: 20px;
}
.post-share__item {
  display: inline-flex;
}
.post-share__item > .twitter-share-button {
  position: relative !important;
  top: 4px;
}
.post-share:before {
  content: "";
  width: 150px;
  height: 2px;
  background-color: #ae4967;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (max-width: 576px) {
  .post-share:before {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.post-share .share {
  margin-top: 12px;
  padding-bottom: 30px;
}
.post-demo-button {
  text-align: right;
}
.post-demo-button .icon {
  top: -1px;
  margin-left: 6px;
}
@media (max-width: 576px) {
  .post-share {
    order: 2;
  }
  .post-demo-button {
    order: 1;
    margin-bottom: 30px;
  }
  .post-demo-button,
  .post-share {
    text-align: center;
  }
}
.post-content {
  width: calc(100% - 100px);
}
.post-content__box-player {
  overflow: hidden;
}
.post-content__player {
  position: relative;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.post-content__table-contents {
  margin-top: 60px;
  margin-bottom: 80px;
}
.post-content__disqus {
  margin-top: 60px;
}
.post-content__excerpt > .page-header__subtitle {
  font-size: 21px;
  line-height: 1.58em;
}
.post-sidebar__bizu {
  margin-top: 40px;
  float: right;
  width: 100%;
  max-width: 180px;
}
@media (max-width: 1024px) {
  .post-sidebar__bizu {
    word-break: break-all;
  }
}
.posts-grid .card-category {
  margin-bottom: 10px;
}
.posts-grid .card-category__link {
  display: none;
}
.author__avatar {
  width: 100%;
  border-radius: 50%;
}
.author__title.page-header__title {
  font-size: 2.5em;
}
.author-joined {
  margin-bottom: 40px;
  color: #343434;
  font-size: 0.875rem;
}
.author-joined__icon {
  top: 10px;
  font-size: 1.625rem;
  color: #000;
}
.author-social__list {
  margin-left: -12px;
}
.author-social__item {
  display: inline-flex;
  margin-right: 2px;
}
.author-social__link {
  padding: 8px 10px;
}
.author-social__icon {
  font-size: 1.625rem;
}
.card-author {
  position: relative;
  max-height: 150px;
  max-width: 500px;
}
.card-author--no-shadow.box-default {
  box-shadow: none;
}
.card-author__avatar {
  width: 100%;
  max-width: 120px;
  max-height: 120px;
  border-radius: 50%;
}
.card-author__link:hover {
  color: #ae4967;
}
@media (max-width: 768px) {
  .card-author-info__title {
    font-size: 1rem;
  }
}
.card-author-info.column {
  padding-left: 15px !important;
}
.card-author-info__joined {
  color: #343434;
  font-size: 0.875rem;
  margin-top: 2px;
}
.card-author-info__joined .icon {
  top: 5px;
  font-size: 1rem;
  color: #000;
}
.card-author-info__joined .text {
  font-size: 0.75rem;
}
.card-author-social__list {
  margin-left: -12px;
}
.card-author-social__item {
  display: inline-flex;
  margin-right: 2px;
}
.card-author-social__link {
  padding: 8px 10px;
}
.card-author-social__icon {
  font-size: 1.25rem;
}
@media (max-width: 576px) {
  .authors-grid .card-author-info__role .meta-text {
    font-size: 10px;
  }
}
.sitemap-body__title {
  margin-top: 40px;
  margin-bottom: 40px;
}
.tags__item {
  display: inline-flex;
  margin-right: 10px;
}
.tags__link {
  background-color: #fff;
  text-transform: uppercase;
  font-size: 0.75rem;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 10px 14px;
}
.sw-update-popup {
  position: fixed;
  right: 1em;
  bottom: 1em;
  padding: 1em;
  border: 1px solid #35495e;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.sw-update-popup button {
  margin-top: 0.5em;
  padding: 0.25em 2em;
}
.sw-update-popup-enter-active,
.sw-update-popup-leave-active {
  transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
}
.sw-update-popup-enter,
.sw-update-popup-leave-to {
  opacity: 0;
  -webkit-transform: translateY(50%) scale(0.5);
  transform: translateY(50%) scale(0.5);
}
.container,
.container *,
.container-fluid,
.container-fluid *,
.container-fluid:after,
.container-fluid :after,
.container-fluid:before,
.container-fluid :before,
.container:after,
.container :after,
.container:before,
.container :before {
  box-sizing: border-box;
}
.container,
.container-fluid {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.9375rem;
  margin-right: -0.9375rem;
}
.row.justify-center {
  justify-content: center;
}
.row.justify-right {
  justify-content: flex-end;
}
.column {
  flex: 0 0 100%;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
}
.container-fluid.fill .column,
.container.fill .column {
  padding-left: 0;
  padding-right: 0;
}
.column.xs-20 {
  flex: 0 0 20%;
  max-width: 20%;
}
.column.xs-25 {
  flex: 0 0 25%;
  max-width: 25%;
}
.column.xs-33 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}
.column.xs-40 {
  flex: 0 0 40%;
  max-width: 40%;
}
.column.xs-50 {
  flex: 0 0 50%;
  max-width: 50%;
}
.column.xs-60 {
  flex: 0 0 60%;
  max-width: 60%;
}
.column.xs-67 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}
.column.xs-75 {
  flex: 0 0 75%;
  max-width: 75%;
}
.column.xs-80 {
  flex: 0 0 80%;
  max-width: 80%;
}
.column.xs-100 {
  flex: 0 0 100%;
  max-width: 100%;
}
.column.xs-auto {
  flex: auto;
}
@media (min-width: 36rem) {
  .row.sm-reverse {
    flex-direction: row-reverse;
  }
  .column.sm-20 {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .column.sm-25 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .column.sm-33 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .column.sm-40 {
    flex: 0 0 40%;
    max-width: 40%;
  }
  .column.sm-50 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .column.sm-60 {
    flex: 0 0 60%;
    max-width: 60%;
  }
  .column.sm-67 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .column.sm-75 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .column.sm-80 {
    flex: 0 0 80%;
    max-width: 80%;
  }
  .column.sm-100 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .column.sm-auto {
    flex: auto;
  }
}
@media (min-width: 48rem) {
  .container {
    width: 46.875rem;
  }
  .row.md-reverse {
    flex-direction: row-reverse;
  }
  .column {
    flex: 1;
  }
  .column.md-20 {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .column.md-25 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .column.md-33 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .column.md-40 {
    flex: 0 0 40%;
    max-width: 40%;
  }
  .column.md-50 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .column.md-60 {
    flex: 0 0 60%;
    max-width: 60%;
  }
  .column.md-67 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .column.md-75 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .column.md-80 {
    flex: 0 0 80%;
    max-width: 80%;
  }
  .column.md-100 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .column.md-auto {
    flex: auto;
  }
}
@media (min-width: 62rem) {
  .container {
    width: 60.625rem;
  }
  .row.lg-reverse {
    flex-direction: row-reverse;
  }
  .column.lg-20 {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .column.lg-25 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .column.lg-33 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .column.lg-40 {
    flex: 0 0 40%;
    max-width: 40%;
  }
  .column.lg-50 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .column.lg-60 {
    flex: 0 0 60%;
    max-width: 60%;
  }
  .column.lg-67 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .column.lg-75 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .column.lg-80 {
    flex: 0 0 80%;
    max-width: 80%;
  }
  .column.lg-100 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .column.lg-auto {
    flex: auto;
  }
}
@media (min-width: 75rem) {
  .container {
    width: 73.125rem;
  }
  .row.xl-reverse {
    flex-direction: row-reverse;
  }
  .column.xl-20 {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .column.xl-25 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .column.xl-33 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .column.xl-40 {
    flex: 0 0 40%;
    max-width: 40%;
  }
  .column.xl-50 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .column.xl-60 {
    flex: 0 0 60%;
    max-width: 60%;
  }
  .column.xl-67 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .column.xl-75 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .column.xl-80 {
    flex: 0 0 80%;
    max-width: 80%;
  }
  .column.xl-100 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .column.xl-auto {
    flex: auto;
  }
}
@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("Poppins Regular"), local("Poppins-Regular"),
    url(https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJfecg.woff2)
      format("woff2");
  unicode-range: u+00??, u+0131, u+0152-0153, u+02bb-02bc, u+02c6, u+02da,
    u+02dc, u+2000-206f, u+2074, u+20ac, u+2122, u+2191, u+2193, u+2212, u+2215,
    u+feff, u+fffd;
}
@font-face {
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-display: auto;
  src: local("Poppins Bold"), local("Poppins-Bold"),
    url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2)
      format("woff2");
  unicode-range: u+00??, u+0131, u+0152-0153, u+02bb-02bc, u+02c6, u+02da,
    u+02dc, u+2000-206f, u+2074, u+20ac, u+2122, u+2191, u+2193, u+2212, u+2215,
    u+feff, u+fffd;
}
@font-face {
  font-family: Hack;
  src: url(/assets/fonts/hack-regular.3eccb984.woff2) format("woff2"),
    url(/assets/fonts/hack-regular.b038bd31.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: ktquez;
  src: url(/assets/fonts/ktquez.06665560.eot);
  src: url(/assets/fonts/ktquez.06665560.eot#iefix) format("embedded-opentype"),
    url(/assets/fonts/ktquez.9d97d905.ttf) format("truetype"),
    url(/assets/fonts/ktquez.87607358.woff) format("woff"),
    url(/assets/img/ktquez.8ef6334d.svg#ktquez) format("svg");
  font-weight: 400;
  font-style: normal;
}
body {
  font-family: Lato, Calibri, Arial;
  font-weight: 400;
}
.fonts-loaded body {
  font-family: Poppins, Lato, Calibri, Arial;
}
.icon,
[class*=" icon-"],
[class^="icon-"] {
  font-family: ktquez !important;
  position: relative;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  letter-spacing: 0;
  -webkit-font-feature-settings: "liga";
  -ms-font-feature-settings: "liga" 1;
  font-feature-settings: "liga";
  -webkit-font-variant-ligatures: discretionary-ligatures;
  font-variant-ligatures: discretionary-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon--arrow {
  font-size: 7px;
}
[class*="icon-"] {
  transition: color 0.5s;
}
.icon-twitter:hover {
  color: #1da1f2;
}
.icon-facebook:hover {
  color: #4267b2;
}
.icon-google:hover {
  color: #dc4a38;
}
.icon-site:hover {
  color: #ae4967;
}
.icon-github:hover {
  color: #239a3b;
}
code,
kbd,
pre,
samp {
  font-family: Hack, monospace;
}
.sr-only {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  width: 1px;
  height: 1px;
  border: 0;
  padding: 0;
  margin: -1px;
}
.fullX {
  width: 100%;
}
.reset-button,
.reset-input {
  background-color: transparent;
  border: none;
}
.reset-button {
  cursor: pointer;
}
.txt-underline {
  text-decoration: underline;
}
.txt-upper {
  text-transform: uppercase;
}
.mt-30 {
  margin-top: 30px;
}
.tac {
  text-align: center;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.inline-block {
  display: inline-block;
}
.no-pad {
  padding: 0;
}
.no-pad-l {
  padding-left: 0;
}
.no-pad-r {
  padding-right: 0;
}
.xsShow {
  display: none;
}
@media (max-width: 576px) {
  .xsShow {
    display: block;
  }
}
@media (max-width: 576px) {
  .xsNone {
    display: none !important;
  }
}
@media (max-width: 768px) {
  .smShow {
    display: block !important;
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  .smNone {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .mdNone {
    display: none;
  }
}
.content.custom {
  display: block;
  min-height: 150px;
  font-size: 16px;
  line-height: 1.8;
  color: #343434;
  margin-bottom: 60px;
}
.content.custom p {
  word-wrap: break-word;
  margin-bottom: 40px;
}
.content.custom p code {
  border-radius: 4px;
  background-color: #151718;
  color: #fff;
  font-size: 0.875rem;
  padding: 4px 10px;
}
.content.custom p abbr {
  cursor: help;
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration-style: dotted;
  text-decoration-style: dotted;
}
.content.custom ol,
.content.custom p,
.content.custom ul {
  font-size: 19px;
  line-height: 1.58em;
}
@media (max-width: 576px) {
  .content.custom ol,
  .content.custom p,
  .content.custom ul {
    font-size: 17px;
  }
}
.content.custom figure,
.content.custom h1,
.content.custom h2,
.content.custom h3,
.content.custom h4,
.content.custom h5,
.content.custom h6,
.content.custom ol,
.content.custom pre,
.content.custom table,
.content.custom ul {
  margin-bottom: 1.2em;
}
.content.custom h1 .header-anchor,
.content.custom h3 .header-anchor,
.content.custom h4 .header-anchor,
.content.custom h5 .header-anchor,
.content.custom h6 .header-anchor {
  display: none;
}
.content.custom h2 {
  position: relative;
  margin-top: 60px;
  text-transform: capitalize;
  z-index: 2;
  font-size: 38px;
  line-height: 1.04em;
  margin-bottom: 0;
}
.content.custom h2 + p {
  margin-top: 30px;
}
.content.custom h2 .header-anchor {
  position: absolute;
  top: 0;
  left: -0.5em;
  padding-right: 4px;
  color: #ae4967;
  opacity: 0.1;
  text-decoration: none;
  font-size: 100px;
  transition: opacity 1s 0.5s;
  z-index: 1;
}
.content.custom h2:hover .header-anchor {
  opacity: 0.3;
  transition: opacity 0.5s;
}
.content.custom h3 {
  font-size: 30px;
  line-height: 1.1em;
  margin-top: 30px;
  margin-bottom: 20px;
}
@media (max-width: 576px) {
  .content.custom h2 {
    font-size: 30px;
    line-height: 1em;
  }
  .content.custom h3 {
    font-size: 26px;
    line-height: 1em;
  }
}
.content.custom a {
  position: relative;
  text-decoration: none;
  color: #ae4967;
}
.content.custom a:hover {
  background-color: #ae4967;
  color: #fff;
}
.content.custom a .icon.outbound {
  display: none;
}
.content.custom blockquote {
  margin: 2em 0 2em 1em;
  padding: 4px 24px;
  font-style: italic;
  color: $gray-color;
  border-left: 0.375em solid #ae4967;
}
.content.custom blockquote p {
  margin-top: 0;
}
.content.custom blockquote p:last-child {
  margin-bottom: 0;
}
.content.custom blockquote footer {
  font-size: 80%;
}
.content.custom strong {
  font-weight: 600;
  margin: 0 0.2em;
}
.content.custom code,
.content.custom kbd {
  display: inline;
  margin: 0 0.3em;
  padding: 0.125em 0.25em;
  box-shadow: none;
}
.content.custom ol,
.content.custom ul {
  padding-left: 2em;
  list-style-type: disc;
  margin-top: 40px;
  margin-bottom: 40px;
}
.content.custom ol li:not(:last-child),
.content.custom ul li:not(:last-child) {
  margin-bottom: 16px;
}
.content.custom table {
  width: 100%;
  border: 1px solid #dedede;
  border-collapse: collapse;
  border-spacing: 0;
}
.content.custom table thead tr {
  background: #f8f8f8;
}
.content.custom table tbody tr:hover {
  background: #efefef;
}
.content.custom table td,
.content.custom table th {
  border: 1px solid #dedede;
  padding: 0.375em 0.75em;
}
.content.custom hr {
  border-top: 1px solid #ebebeb;
  margin-top: 20px;
  margin-bottom: 20px;
}
.content.custom audio,
.content.custom video {
  max-width: 100%;
}
.content.custom img {
  max-width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.content.custom .observer {
  text-align: center;
}
.content.custom div[class*="language-"] {
  margin-bottom: 30px;
}
.content.custom code[class*="language-"],
.content.custom pre[class*="language-"] {
  background: none;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #b390d0;
}
.content.custom pre[class*="language-"] {
  position: relative;
  padding: 4em 1.5em 1.5em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 6px;
}
.content.custom pre[class*="language-"] code {
  margin: 0;
  padding: 0;
}
.content.custom pre[class*="language-"] code:before {
  position: absolute;
  top: 16px;
  left: 18px;
  content: "";
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #ff5f56;
  box-shadow: 18px 0 0 0 #ffbd2e, 36px 0 0 0 #27c93f;
}
.content.custom :not(pre) > code[class*="language-"],
.content.custom pre[class*="language-"] {
  background: #151718;
}
.content.custom :not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}
.content.custom .token.block-comment,
.content.custom .token.cdata,
.content.custom .token.comment,
.content.custom .token.doctype,
.content.custom .token.prolog {
  color: #999;
}
.content.custom .token.punctuation {
  color: #ccc;
}
.content.custom .token.attr-name,
.content.custom .token.deleted,
.content.custom .token.namespace,
.content.custom .token.tag {
  color: #e2777a;
}
.content.custom .token.function-name {
  color: #6196cc;
}
.content.custom .token.boolean,
.content.custom .token.function,
.content.custom .token.number {
  color: #55b5db;
}
.content.custom .token.class-name,
.content.custom .token.constant,
.content.custom .token.property,
.content.custom .token.symbol {
  color: #f8c555;
}
.content.custom .token.atrule,
.content.custom .token.builtin,
.content.custom .token.important,
.content.custom .token.keyword,
.content.custom .token.selector {
  color: #e6cd69;
}
.content.custom .token.attr-value,
.content.custom .token.char,
.content.custom .token.regex,
.content.custom .token.string,
.content.custom .token.variable {
  color: #7ec699;
}
.content.custom .token.entity,
.content.custom .token.operator,
.content.custom .token.url {
  color: #9fca56;
}
.content.custom .token.bold,
.content.custom .token.important {
  font-weight: 700;
}
.content.custom .token.italic {
  font-style: italic;
}
.content.custom .token.entity {
  cursor: help;
}
.content.custom .token.inserted {
  color: green;
}
.content.custom .token.template-string > .token.string {
  color: hsla(0, 0%, 100%, 0.8);
}
.content.custom .highlighted-line {
  display: block;
  margin: 0 -1.5rem;
  padding: 0 1.5rem;
  background-color: rgba(0, 0, 0, 0.66);
}
.content.custom :first-child {
  margin-top: 0;
}
.content.custom iframe {
  margin-top: 20px;
  margin-bottom: 20px;
}
#nprogress {
  pointer-events: none;
}
@media (max-width: 576px) {
  #nprogress {
    display: none;
  }
}
#nprogress .bar {
  background: #ae4967;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #ae4967;
  opacity: 1;
  -webkit-transform: rotate(3deg) translateY(-4px);
  transform: rotate(3deg) translateY(-4px);
}
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}
#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-top-color: #ae4967;
  border-left-color: #ae4967;
  border-radius: 50%;
  -webkit-animation: nprogress-spinner 0.4s linear infinite;
  animation: nprogress-spinner 0.4s linear infinite;
}
.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}
.nprogress-custom-parent #nprogress .bar,
.nprogress-custom-parent #nprogress .spinner {
  position: absolute;
}
* {
  margin: 0;
  padding: 0;
}
body {
  color: #343434;
  overflow-x: hidden;
  background-color: #f7f7f7;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: #35495e;
}
a:active {
  color: #ae4967;
}
abbr {
  text-decoration: none;
}
ol,
ul {
  list-style-type: none;
}
img.cover {
  position: relative;
  display: flex;
  width: 100%;
  line-height: 1em;
  text-align: center;
  background-color: #fff;
  overflow: hidden;
}
img.cover:after {
  content: "";
  background-image: url(/fallback.png);
  background-size: 80px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #35495e;
  font-size: 14px;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.layout-main > .container-fluid {
  background-color: #f7f7f7;
}
.main {
  width: 100%;
  max-width: 1360px;
  padding-left: 24px;
  padding-right: 24px;
}
@media (min-width: 1500px) {
  .main {
    max-width: 1500px;
  }
}
.container-fluid {
  padding: 0.4px;
}
@media (max-width: 576px) {
  .container-fluid {
    padding: 0;
  }
}
.row {
  margin: 0;
}
@media (max-width: 768px) {
  .column {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
.column .column {
  padding-right: 0;
  padding-left: 0;
}
.box-default {
  border-radius: 20px;
  padding: 16px 20px;
  box-shadow: 1px 1px 99px #e2e2e2;
  background-color: #fff;
  border: 1px solid #fff;
}
.meta-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 400;
}
.meta-text--primary {
  color: #8b3a52;
}
.divider {
  border-top: 1px solid #ebebeb;
  margin-top: 20px;
  margin-bottom: 20px;
}
.page {
  margin-top: 50px;
}
.page__full__box {
  width: 95vw;
  padding: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
@media (max-width: 576px) {
  .page__full__box {
    border-radius: 0;
  }
}
@media (min-width: 576px) {
  .page__full__box {
    max-width: 95vw !important;
  }
}
.page__full-content,
.page__full-header {
  padding: 40px 60px;
}
@media (max-width: 576px) {
  .page__full-content,
  .page__full-header {
    padding: 10px 20px;
  }
}
.page-header .back-button {
  left: -25px;
}
.page-header__title {
  font-size: 1.625rem;
  line-height: 1em;
}
@media (min-width: 1024px) {
  .page-header__title {
    font-size: 3em;
    line-height: 1em;
    width: 80%;
  }
}
.page-header__subtitle {
  font-size: 1rem;
  font-weight: 400;
  font-family: Georgia, "Times New Roman, Times, serif";
  font-style: italic;
  color: #666;
  margin-top: 10px;
  margin-bottom: 25px;
}
.page-header__meta {
  margin-top: 16px;
  margin-bottom: 10px;
}
.page-header__meta .text {
  font-size: 0.875rem;
  color: #666;
}
.page-header__meta .icon {
  top: 1px;
}
.page-header__author {
  font-size: 0.75rem;
  margin-top: 10px;
}
.page-header__author .link {
  color: #343434;
  text-decoration: underline;
  margin-left: 6px;
}
.page-header-cat__nav {
  display: inline-block;
}
.page-header-cat__list {
  position: relative;
  left: -10px;
}
.page-header-cat__item {
  display: inline-flex;
}
.page-header-cat__item:not(:last-child):after {
  content: "\2022";
  color: #ae4967;
  position: relative;
  top: 9px;
}
.page-header-cat__link {
  margin-bottom: 4px;
  padding: 12px;
}
.page-header-cat__link:hover {
  color: #ae4967;
}
.section-newsletter {
  width: 100%;
}
.section-newsletter.row {
  margin-top: 150px;
  margin-bottom: 150px;
}
.content.custom > .fix-typeform {
  overflow: hidden;
  min-height: 500px;
}
.content.custom > .fix-typeform .lazy-load-iframe {
  margin-top: -350px;
}
.posts-grid.row {
  margin-top: 30px;
}
.posts-grid.row .card-title {
  height: 80px;
}
.youtube-play {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 14px;
  background-color: #ae4967;
  border-radius: 4px;
}
.youtube-play:before {
  content: "\25B6";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 7px;
}
.shapes {
  position: absolute;
  width: 20px;
  height: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #fff;
  z-index: 1;
}
.shapes--circle {
  border-radius: 50%;
}
.shapes--primary {
  border-color: #ae4967;
}
.shapes--color3 {
  border-color: #900c3f;
}
.shapes--color4 {
  border-color: #581845;
}
.bottom-top-enter-active {
  transition: all 0.3s ease;
}
.bottom-top-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.bottom-top-enter,
.bottom-top-leave-to {
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  opacity: 0;
}
.nav-mobile-enter-active {
  transition: all 0.2s ease 0.2s;
}
.nav-mobile-enter,
.nav-mobile-leave-to {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
  opacity: 0;
}
.link {
  color: #ae4967;
  transition: color 0.5s;
  text-decoration: none;
}
.link,
.link > span {
  position: relative;
}
.link > span {
  z-index: 2;
}
.link > .icon {
  padding-left: 4px;
  padding-right: 10px;
}
.link:hover {
  color: #35495e;
}
.link:hover:before {
  width: 120%;
}
.link:before {
  content: "";
  width: 0;
  height: 60%;
  left: -5px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  z-index: 1;
  transition: width 0.5s cubic-bezier(0.93, 0.01, 0, 0.98);
}
.link--filler-primary:before,
.link--filler-s-primary:before {
  background-color: #ae4967;
}
.link--filler-accent:before {
  background-color: #35495e;
}
.link--filler-red:before,
.link--filler-s-google:before {
  background-color: red;
}
.link--filler-black:before {
  background-color: #000;
}
.link--filler-green:before {
  background-color: green;
}
.link--filler-s-github:before {
  background-color: #000;
}
.link--filler-s-youtube:before {
  background-color: red;
}
.link--filler-s-facebook:before {
  background-color: #3b5998;
}
.link--filler-s-twitter:before {
  background-color: #1da1f2;
}
.link--filler-s-linkedin:before {
  background-color: #0077b5;
}
.link[class*="--filler-s"]:hover {
  color: #fff;
}
.link[class*="--filler-s"]:before {
  height: 180%;
  bottom: -5px;
}
.layout-main__nm--opened {
  background-color: #304255;
}
.layout-main__negative.layout-main__nm--opened,
.layout-main__negative
  :not(.no_bw):not([class*="switch-bw"]):not([class*="hamburguer__"]):not([class*="language-"]):not(code):not(.token) {
  background-color: #000 !important;
  color: #ccc !important;
  box-shadow: none !important;
  fill: #000 !important;
}
.layout-main__negative.layout-main__nm--opened button:not(.back-button),
.layout-main__negative.layout-main__nm--opened input,
.layout-main__negative
  :not(.no_bw):not([class*="switch-bw"]):not([class*="hamburguer__"]):not([class*="language-"]):not(code):not(.token)
  button:not(.back-button),
.layout-main__negative
  :not(.no_bw):not([class*="switch-bw"]):not([class*="hamburguer__"]):not([class*="language-"]):not(code):not(.token)
  input {
  border: 1px solid #fff !important;
}
.layout-main__negative.layout-main__nm--opened ::-webkit-input-placeholder,
.layout-main__negative
  :not(.no_bw):not([class*="switch-bw"]):not([class*="hamburguer__"]):not([class*="language-"]):not(code):not(.token)
  ::-webkit-input-placeholder {
  color: #fff;
}
.layout-main__negative.layout-main__nm--opened ::-ms-input-placeholder,
.layout-main__negative
  :not(.no_bw):not([class*="switch-bw"]):not([class*="hamburguer__"]):not([class*="language-"]):not(code):not(.token)
  ::-ms-input-placeholder {
  color: #fff;
}
.layout-main__negative.layout-main__nm--opened ::placeholder,
.layout-main__negative
  :not(.no_bw):not([class*="switch-bw"]):not([class*="hamburguer__"]):not([class*="language-"]):not(code):not(.token)
  ::placeholder {
  color: #fff;
}
.wrapper-body__nm {
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  -webkit-transform-origin: top center;
  transform-origin: top center;
}
.wrapper-body__nm--opened {
  border-radius: 20px;
  overflow: hidden;
  -webkit-transform: perspective(400px) scale3d(0.85, 0.85, 1);
  transform: perspective(400px) scale3d(0.85, 0.85, 1);
}
@media (max-width: 576px) {
  [class^="slideleft"],
  [class^="slideright"] {
    will-change: transform, opacity;
  }
  .slideright-enter-active,
  .slideright-leave-active {
    transition: opacity 0.1s, -webkit-transform 0.25s;
    transition: transform 0.25s, opacity 0.1s;
    transition: transform 0.25s, opacity 0.1s, -webkit-transform 0.25s;
  }
  .slideright-enter {
    opacity: 0;
    position: absolute !important;
    -webkit-transform: translate(-100%) !important;
    transform: translate(-100%) !important;
  }
  .slideright-leave-to {
    opacity: 0;
    -webkit-transform: translate(100%) !important;
    transform: translate(100%) !important;
    position: absolute !important;
  }
  .slideleft-enter-active,
  .slideleft-leave-active {
    transition: opacity 0.1s, -webkit-transform 0.25s;
    transition: transform 0.25s, opacity 0.1s;
    transition: transform 0.25s, opacity 0.1s, -webkit-transform 0.25s;
  }
  .slideleft-enter {
    -webkit-transform: translate(100%) !important;
    transform: translate(100%) !important;
  }
  .slideleft-enter,
  .slideleft-leave-to {
    opacity: 0;
    position: absolute !important;
  }
  .slideleft-leave-to {
    -webkit-transform: translate(-100%) !important;
    transform: translate(-100%) !important;
  }
}
.not-found {
  position: relative;
  height: 40vh;
}
.not-found__message {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
}
.not-found__message p {
  font-size: 0.875rem;
  color: #666;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 1.25rem;
}
.not-found__image {
  position: relative;
  text-align: center;
  top: -5%;
  z-index: 1;
}
.not-found__image img {
  width: 100%;
  opacity: 0.3;
}
.icon.outbound {
  color: #aaa;
  display: inline-block;
}
</style>
