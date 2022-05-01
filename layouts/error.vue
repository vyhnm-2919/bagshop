<template>
  <div>
    <div class="back-to-home rounded d-none d-sm-block">
      <nuxt-link to="/" class="btn btn-icon btn-soft-primary"
        ><i data-feather="home" class="icons"></i
      ></nuxt-link>
    </div>

    <!-- ERROR PAGE -->
    <section class="bg-home d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-12 text-center">
            <!-- <img src="@/assets/images/404.svg" class="img-fluid" alt="" /> -->
            <div class="text-uppercase mt-4 display-3">Oh ! no</div>
            <div class="text-capitalize text-dark mb-4 error-page">
              Page Not Found
            </div>
            <p class="text-muted para-desc mx-auto">
              Start working with
              <span class="text-primary font-weight-bold">Landrick</span> that
              can provide everything you need to generate awareness, drive
              traffic, connect.
            </p>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-md-12 text-center">
            <a href="index.html" class="btn btn-outline-primary mt-4"
              >Go Back</a
            >
            <nuxt-link to="/" class="btn btn-primary mt-4 ml-2"
              >Go To Home</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  layout: 'empty'
})
export default class Error extends Vue {}
</script>
