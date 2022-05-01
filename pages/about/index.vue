<template>
  <section id="wrapper">
    <div class="container">
      <div>
        <div id="content-wrapper">
          <section id="main">
            <header class="page-header">
              <h1>About us</h1>
            </header>

            <section id="content" class="page-content page-cms page-cms-4">
              <div class="row">
                <div class="col-sm-12 cms-img-wide">
                  <img
                    src="@/assets/images/about.jpeg"
                    alt=""
                    width="1230"
                    height="400"
                  />
                </div>
                <div class="col-xs-12 col-sm-8">
                  <h3>Our company stories</h3>
                  <p>
                    This is Photoshop's version&nbsp; of Lorem Ipsum. Proin
                    gravida nibh vel velit auctr aliquet. Aenean sollicitudin,
                    lorem quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsant.&nbsp;
                  </p>
                  <p></p>
                  <p>
                    Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                    non&nbsp; mauris vitae erat consequat auctor eu in elit.
                    Photoshop's version&nbsp; of Lorem Ipsum. Proin gravida nibh
                    vel velit auctor aliquet.&nbsp;
                  </p>
                  <p></p>
                  <p>
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum eu in elit.
                  </p>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <h3>Contacts</h3>
                  <div class="cms-contact-item">
                    <span class="cms-contact-label">Hours:</span
                    ><span class="cms-contact-text"
                      >Mon-Fri: 9:00 am - 6:00 pm</span
                    >
                    <br /><span class="cms-contact-text"
                      >Sat: 9:00 am - 4:00 pm</span
                    >
                    <br /><span class="cms-contact-text"
                      >Sun: 9:00 am - 2:00 pm</span
                    >
                  </div>
                  <div class="cms-contact-item">
                    <span class="cms-contact-label">Phone:</span
                    ><span class="cms-contact-text">8-100-9000-300</span>
                  </div>
                  <div class="cms-contact-item">
                    <span class="cms-contact-label">E-mail:</span
                    ><a href="#" class="cms-contact-text">company@mail.com</a>
                  </div>
                  <div class="cms-contact-item">
                    <span class="cms-contact-label">Address:</span
                    ><span class="cms-contact-text"
                      >27 Oak Street, Tenafly, US, 07670</span
                    >
                  </div>
                </div>
              </div>
            </section>

            <footer class="page-footer">
              <!-- Footer content -->
            </footer>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class About extends Vue {}
</script>
