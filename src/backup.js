
    <main>
    <section class="section-about">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Exciting tours for adventurous people</h2>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <h3
            class="heading-tertiary u-margin-bottom-small"
          >You're going to fall in love with nature</h3>
          <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
            ducimus quam nisi exercitationem omnis earum qui.
          </p>

          <h3
            class="heading-tertiary u-margin-bottom-small"
          >Live adventures like you never have before</h3>
          <p
            class="paragraph"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.</p>

          <a href="#" class="btn-text">Learn more &rarr;</a>
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            <img
              srcset="./img/nat-1.jpg 300w, ./img/nat-1-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 1"
              class="composition__photo composition__photo--p1"
              src="./img/nat-1-large.jpg"
            >

            <img
              srcset="./img/nat-2.jpg 300w, ./img/nat-2-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 2"
              class="composition__photo composition__photo--p2"
              src="./img/nat-2-large.jpg"
            >

            <img
              srcset="./img/nat-3.jpg 300w, ./img/nat-3-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 3"
              class="composition__photo composition__photo--p3"
              src="./img/nat-3-large.jpg"
            >

            <!--
                          <img src="./img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
                          <img src="./img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
                          <img src="./img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
            -->
          </div>
        </div>
      </div>
    </section>
    <section class="section-tours" id="section-tours">
      <!-- <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Most popular tours</h2>
      </div> -->
      <div>
      <Card
        title="The NIST definition of cloud computing"
        v-bind:authors="[{
          name: 'P Mell',
          url: 'https://scholar.google.com/citations?user=FoFadTEAAAAJ&hl=en&oi=sra'
        },{
          name: 'T Grance',
          url: ''
        }]"
        abstract="The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347. NIST is responsible for developing"
      >
      </Card>
      <Card
        title="The NIST definition of cloud computing"
        v-bind:authors="[{
          name: 'P Mell',
          url: 'https://scholar.google.com/citations?user=FoFadTEAAAAJ&hl=en&oi=sra'
        },{
          name: 'T Grance',
          url: ''
        }]"
        abstract="The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347. NIST is responsible for developing"
      >
      </Card>
      <Card
        title="The NIST definition of cloud computing"
        v-bind:authors="[{
          name: 'P Mell',
          url: 'https://scholar.google.com/citations?user=FoFadTEAAAAJ&hl=en&oi=sra'
        },{
          name: 'T Grance',
          url: ''
        }]"
        abstract="The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347. NIST is responsible for developing"
      >
      </Card>
      </div>

      <div class="u-center-text u-margin-top-huge">
        <a href="#" class="btn btn--green">Discover all tours</a>
      </div>
    </section>

    <section class="section-stories">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source src="./img/video.mp4" type="video/mp4">
          <source src="./img/video.webm" type="video/webm">Your browser is not supported!
        </video>
      </div>

      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div class="row">
        <div class="story">
          <figure class="story__shape">
            <img src="./img/nat-8.jpg" alt="Person on a tour" class="story__img">
            <figcaption class="story__caption">Mary Smith</figcaption>
          </figure>
          <div class="story__text">
            <h3
              class="heading-tertiary u-margin-bottom-small"
            >I had the best week ever with my family</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
              ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
              repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="story">
          <figure class="story__shape">
            <img src="./img/nat-9.jpg" alt="Person on a tour" class="story__img">
            <figcaption class="story__caption">Jack Wilson</figcaption>
          </figure>
          <div class="story__text">
            <h3
              class="heading-tertiary u-margin-bottom-small"
            >WOW! My life is completely different now</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
              ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
              repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div class="u-center-text u-margin-top-huge">
        <a href="#" class="btn-text">Read all stories &rarr;</a>
      </div>
    </section>

  </main>

  <footer class="footer">
    <div class="footer__logo-box">
      <picture class="footer__logo">
        <source
          srcset="./img/logo-green-small-1x.png 1x, ./img/logo-green-small-2x.png 2x"
          media="(max-width: 37.5em)"
        >
        <img
          srcset="./img/logo-green-1x.png 1x, ./img/logo-green-2x.png 2x"
          alt="Full logo"
          src="./img/logo-green-2x.png"
        >
      </picture>
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="#" class="footer__link">Company</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Contact us</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Carrers</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Privacy policy</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <p class="footer__copyright">
          Built by
          <a href="#" class="footer__link">Jonas Schmedtmann</a> for his online course
          <a href="#" class="footer__link">Advanced CSS and Sass</a>.
          Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
          and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
          Schmedtmann, is of course highly appreciated!
        </p>
      </div>
    </div>
  </footer>

  <div class="popup" id="popup">
    <div class="popup__content">
      <div class="popup__left">
        <img src="./img/nat-8.jpg" alt="Tour photo" class="popup__img">
        <img src="./img/nat-9.jpg" alt="Tour photo" class="popup__img">
      </div>
      <div class="popup__right">
        <a href="#section-tours" class="popup__close">&times;</a>
        <h2 class="heading-secondary u-margin-bottom-small">Start booking now</h2>
        <h3
          class="heading-tertiary u-margin-bottom-small"
        >Important &ndash; Please read these terms before booking</h3>
        <p class="popup__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
          amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
          sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
          gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
          Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
          vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
          vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
          euismod nisi porta.
        </p>
        <a href="#" class="btn btn--green">Book now</a>
      </div>
    </div>
  </div>