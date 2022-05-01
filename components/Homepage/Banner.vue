<template>
  <div class="an-theme-blocks-home-slider-block initialized">
    <div
      class="anthemeblocks-homeslider anthemeblocks-homeslider_left owl-dots_center owl-theme owl-carousel owl-loaded owl-drag slide-next"
      id="anthemeblocks-homeslider_1"
      data-lazy="0"
      data-items="1"
      data-nav="1"
      data-loop="1"
      data-autoplay="1"
      data-autoplaytimeout="5000"
      data-smartspeed="1000"
    >
      <div class="owl-stage-outer">
        <div class="owl-stage">
          <div class="owl-item cloned" style="width: 1905px">
            <div class="item">
              <a href="#">
                <img
                  src="@/assets/images/5fa91b136a281.jpeg"
                  width="auto"
                  height="auto"
                  alt="Tees &amp; Tops"
                />
                <div class="anthemeblocks-homeslider-desc">
                  <div class="container">
                    <div class="anthemeblocks-homeslider-content">
                      <p class="h2">Tees &amp; Tops</p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <button class="btn btn-primary">Discover</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="owl-item" style="width: 1905px">
            <div class="item">
              <a href="#">
                <img
                  src="@/assets/images/5fa91b025178e.jpeg"
                  width="auto"
                  height="auto"
                  alt="Tees &amp; Tops"
                />
                <div class="anthemeblocks-homeslider-desc">
                  <div class="container">
                    <div class="anthemeblocks-homeslider-content">
                      <p class="h2">Tees &amp; Tops</p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <button class="btn btn-primary">Discover</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="owl-item" style="width: 1905px">
            <div class="item">
              <a href="#">
                <img
                  src="@/assets/images/5fa91b2b2a673.jpeg"
                  width="auto"
                  height="auto"
                  alt="Tees &amp; Tops"
                />
                <div class="anthemeblocks-homeslider-desc">
                  <div class="container">
                    <div class="anthemeblocks-homeslider-content">
                      <p class="h2">Tees &amp; Tops</p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <button class="btn btn-primary">Discover</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="owl-nav">
        <div class="owl-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="10px"
            height="17px"
          >
            <path
              fill-rule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M8.092,-0.000 L9.993,1.997 L3.818,8.500 L9.993,15.002 L8.092,17.000 L0.002,8.500 L8.092,-0.000 Z"
            ></path>
          </svg>
        </div>
        <div class="owl-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="17px">
            <path
              fill-rule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M1.908,-0.000 L0.007,1.997 L6.182,8.500 L0.007,15.002 L1.908,17.000 L9.998,8.500 L1.908,-0.000 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="owl-dots container">
        <div class="owl-dot"><span></span></div>
        <div class="owl-dot active"><span></span></div>
        <div class="owl-dot"><span></span></div>
      </div>
    </div>

    <div class="an-theme-blocks-home-slider-loader">
      <div class="anthemeblocks-loader-image"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Banner extends Vue {}
</script>

<style>
.an-theme-blocks-home-slider-block:not(.initialized),
.an-theme-blocks-home-slider-loader {
  height: 899px;
}
@media (max-width: 1600px) {
  .an-theme-blocks-home-slider-block:not(.initialized),
  .an-theme-blocks-home-slider-loader {
    height: 899px;
  }
}
@media (max-width: 1366px) {
  .an-theme-blocks-home-slider-block:not(.initialized),
  .an-theme-blocks-home-slider-loader {
    height: 899px;
  }
}
@media (max-width: 991px) {
  .an-theme-blocks-home-slider-block:not(.initialized),
  .an-theme-blocks-home-slider-loader {
    height: 480px;
  }
}
@media (max-width: 767px) {
  .an-theme-blocks-home-slider-block:not(.initialized),
  .an-theme-blocks-home-slider-loader {
    height: 380px;
  }
}
</style>
