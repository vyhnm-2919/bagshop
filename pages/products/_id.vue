<template>
  <!-- <section class="section pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5">
          <div class="slider slider-for">
            <div>
              <img
                :src="currentImageSource"
                class="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
          <div class="slider slider-nav d-flex mt-2">
            <div
              v-for="(image, index) in product.images"
              :key="index"
              class="mr-1"
              @click="changeCurrentImageSource(image)"
            >
              <img :src="image" class="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div class="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title ml-md-4">
            <h4 class="title">{{ product.name }}</h4>
            <h5 class="text-muted">
              {{ product.unit }}{{ product.price }}
            </h5>
            <ul class="list-unstyled text-warning h5 mb-0">
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
            </ul>
            <div class="row mt-4 pt-2">
              <div class="col-lg-6 col-12">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0">Size:</h6>
                  <ul class="list-unstyled mb-0 ml-3">
                    <li
                      class="list-inline-item"
                      v-for="(size, index) in product.sizes"
                      :key="index"
                    >
                      <a
                        href="javascript:void(0)"
                        class="btn btn-icon btn-soft-primary"
                        >{{ size.text }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0">Color:</h6>
                  <ul class="list-unstyled mb-0 ml-3">
                    <li
                      :class="`list-inline-item rounded-circle mr-2 p-3 bg-${color.value}`"
                      v-for="(color, index) in product.colors"
                      :key="index"
                    ></li>
                  </ul>
                </div>
              </div>
            </div>

            <h5 class="mt-4 py-2">Overview :</h5>
            <p class="text-muted">
              {{ product.description }}
            </p>

            <div class="row mt-4 pt-2">
              <div class="col-lg-6 col-12 mt-4 mt-lg-0">
                <div class="d-flex shop-list align-items-center">
                  <h6 class="mb-0">Quantity:</h6>
                  <div class="ml-3">
                    <input
                      type="button"
                      value="-"
                      class="minus btn btn-icon btn-soft-primary font-weight-bold"
                    />
                    <input
                      type="text"
                      step="1"
                      min="1"
                      name="quantity"
                      value="1"
                      title="Qty"
                      class="btn btn-icon btn-soft-primary font-weight-bold"
                    />
                    <input
                      type="button"
                      value="+"
                      class="plus btn btn-icon btn-soft-primary font-weight-bold"
                    />
                  </div>
                </div>
              </div>

              <a
                href="shop-cart.html"
                class="btn btn-soft-primary col-lg-6 col-12 mt-4 mt-lg-0"
                >Add to Cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProfileDetailTab :product="product" />
    <RelatedProduct />
  </section> -->
  <section id="wrapper">
    <div class="container">
      <div>
        <div id="content-wrapper">
          <section id="main" itemscope="" itemtype="https://schema.org/Product">
            <meta
              itemprop="url"
              content="https://themes12.anvanto.com/super/themes/pascal/en/partycocktail/13-73-brown-bear-vector-graphics.html#/1-size-s/14-color-blue"
            />
            <div
              itemprop="brand"
              itemtype="https://schema.org/Brand"
              itemscope=""
            >
              <meta itemprop="name" content="Graphic Corner" />
            </div>
            <div class="row sticky-product-row">
              <div class="col-md-5">
                <section
                  class="page-content sticky-product sticky-product-bottom"
                  id="content"
                  style="top: 0"
                >
                  <div class="an_wishlist-mini js-an_wishlist-container">
                    <span
                      class="js-an_wishlist-addremove"
                      data-url="//themes12.anvanto.com/super/themes/pascal/en/module/an_wishlist/ajax?token=3128563f09f3c1459c9e2c0631c0d23c&amp;id_product=13&amp;id_product_attribute=73&amp;action=addRemove"
                    >
                      <svg
                        class="an_wishlist-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="19px"
                        height="16px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(255, 255, 255)"
                          d="M13.953,0.000 C11.929,0.000 10.427,1.189 9.500,2.876 C8.573,1.189 7.071,0.000 5.047,0.000 C2.130,0.000 0.000,2.343 0.000,5.201 C0.000,8.980 3.769,11.353 9.133,15.843 C9.343,16.018 9.657,16.018 9.867,15.843 C15.226,11.357 19.000,8.981 19.000,5.201 C19.000,2.343 16.870,0.000 13.953,0.000 L13.953,0.000 ZM9.500,14.736 C4.560,10.631 1.113,8.350 1.113,5.201 C1.113,2.843 2.804,1.065 5.047,1.065 C7.209,1.065 8.548,2.980 8.964,4.402 C9.113,4.920 9.885,4.923 10.037,4.402 C10.446,2.999 11.770,1.065 13.953,1.065 C16.196,1.065 17.887,2.843 17.887,5.201 C17.887,8.352 14.434,10.635 9.500,14.736 Z"
                        ></path>
                      </svg>
                      <svg
                        class="an_wishlist-icon-active"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="19px"
                        height="16px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(255, 255, 255)"
                          d="M13.953,0.000 C11.929,0.000 10.427,1.189 9.500,2.876 C8.573,1.189 7.071,0.000 5.047,0.000 C2.130,0.000 0.000,2.343 0.000,5.201 C0.000,8.980 3.769,11.353 9.133,15.843 C9.343,16.018 9.657,16.018 9.867,15.843 C15.226,11.357 19.000,8.981 19.000,5.201 C19.000,2.343 16.870,0.000 13.953,0.000 L13.953,0.000 Z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <ul class="product-flags">
                    <li class="product-flag new">New product</li>
                  </ul>

                  <div class="images-container an_productpage-slider-wrap">
                    <div
                      id="an_product-zoom"
                      class="an_productpage-slider an_productpage-slider-main minis-bottom slick-initialized slick-slider slick-dotted"
                      data-draggable="true"
                    >
                      <div class="slick-prev slick-arrow">
                        <svg
                          id="Capa_1"
                          data-name="Capa 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 276.52 512"
                        >
                          <title>arrow</title>
                          <path
                            d="M388.42,242,151.61,5.79a19.85,19.85,0,1,0-28,28.11L346.3,256,123.57,478.11a19.85,19.85,0,0,0,28,28.1L388.42,270.05a19.82,19.82,0,0,0,0-28.1Z"
                            transform="translate(-117.74 0)"
                          ></path>
                        </svg>
                      </div>
                      <div class="slick-list draggable">
                        <div
                          class="slick-track"
                          style="
                            opacity: 1;
                            width: 4895px;
                            transform: translate3d(-445px, 0, 0);
                          "
                        >
                          <div
                            class="an_productpage-slider-item slick-slide slick-cloned"
                            data-slick-index="-1"
                            id=""
                            aria-hidden="true"
                            tabindex="-1"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/68-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/68-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/68-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-current slick-active"
                            data-slick-index="0"
                            aria-hidden="false"
                            tabindex="0"
                            role="tabpanel"
                            id="slick-slide00"
                            aria-describedby="slick-slide-control00"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/64-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/64-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/64-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              /><img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/64-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide"
                            data-slick-index="1"
                            aria-hidden="true"
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide01"
                            aria-describedby="slick-slide-control01"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/65-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/65-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/65-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              /><img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/65-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide"
                            data-slick-index="2"
                            aria-hidden="true"
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide02"
                            aria-describedby="slick-slide-control02"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/66-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/66-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/66-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              /><img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/66-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide"
                            data-slick-index="3"
                            aria-hidden="true"
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide03"
                            aria-describedby="slick-slide-control03"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/67-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/67-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/67-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              /><img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/67-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide"
                            data-slick-index="4"
                            aria-hidden="true"
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide04"
                            aria-describedby="slick-slide-control04"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/68-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/68-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/68-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              /><img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/68-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-cloned"
                            data-slick-index="5"
                            id=""
                            aria-hidden="true"
                            tabindex="-1"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/64-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/64-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/64-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-cloned"
                            data-slick-index="6"
                            id=""
                            aria-hidden="true"
                            tabindex="-1"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/65-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/65-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/65-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-cloned"
                            data-slick-index="7"
                            id=""
                            aria-hidden="true"
                            tabindex="-1"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/66-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/66-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/66-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-cloned"
                            data-slick-index="8"
                            id=""
                            aria-hidden="true"
                            tabindex="-1"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/67-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/67-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/67-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-cloned"
                            data-slick-index="9"
                            id=""
                            aria-hidden="true"
                            tabindex="-1"
                            style="width: 445px"
                          >
                            <div
                              class="an_productpage-slider-image slider-zoom-hover"
                              style="position: relative; overflow: hidden"
                            >
                              <img
                                class="productslider-main-image"
                                data-image-zoom-src="https://themes12.anvanto.com/super/themes/pascal/68-product_zoom/brown-bear-vector-graphics.jpg"
                                data-width="1200"
                                data-height="1600"
                                src="https://themes12.anvanto.com/super/themes/pascal/68-large_default/brown-bear-vector-graphics.jpg"
                                alt=""
                                title=""
                                width="445"
                                itemprop="image"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="https://themes12.anvanto.com/super/themes/pascal/68-product_zoom/brown-bear-vector-graphics.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  opacity: 0;
                                  width: 1200px;
                                  height: 1600px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="slick-next slick-arrow">
                        <svg
                          id="Capa_1"
                          data-name="Capa 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 276.52 512"
                        >
                          <title>arrow</title>
                          <path
                            d="M388.42,242,151.61,5.79a19.85,19.85,0,1,0-28,28.11L346.3,256,123.57,478.11a19.85,19.85,0,0,0,28,28.1L388.42,270.05a19.82,19.82,0,0,0,0-28.1Z"
                            transform="translate(-117.74 0)"
                          ></path>
                        </svg>
                      </div>
                      <ul class="slick-dots" role="tablist">
                        <li class="slick-active" role="presentation">
                          <button
                            type="button"
                            role="tab"
                            id="slick-slide-control00"
                            aria-controls="slick-slide00"
                            aria-label="1 of 5"
                            tabindex="0"
                            aria-selected="true"
                          >
                            1
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            type="button"
                            role="tab"
                            id="slick-slide-control01"
                            aria-controls="slick-slide01"
                            aria-label="2 of 5"
                            tabindex="-1"
                          >
                            2
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            type="button"
                            role="tab"
                            id="slick-slide-control02"
                            aria-controls="slick-slide02"
                            aria-label="3 of 5"
                            tabindex="-1"
                          >
                            3
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            type="button"
                            role="tab"
                            id="slick-slide-control03"
                            aria-controls="slick-slide03"
                            aria-label="4 of 5"
                            tabindex="-1"
                          >
                            4
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            type="button"
                            role="tab"
                            id="slick-slide-control04"
                            aria-controls="slick-slide04"
                            aria-label="5 of 5"
                            tabindex="-1"
                          >
                            5
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div
                      class="an_productpage-slider-holder"
                      style="height: 593px"
                    ></div>

                    <div
                      class="an_productpage-slider an_productpage-slider-nav an_productpage-slider-scroll slick-initialized slick-slider"
                      data-vertical="false"
                      data-draggable="true"
                    >
                      <!-- <i
                        class="material-icons slick-prev slick-arrow slick-disabled"
                        aria-disabled="true"
                        >keyboard_arrow_left</i
                      > -->
                      <div class="slick-list draggable">
                        <div
                          class="slick-track"
                          style="
                            opacity: 1;
                            width: 500px;
                            transform: translate3d(0, 0, 0);
                          "
                        >
                          <div
                            class="an_productpage-slider-item slick-slide slick-current slick-active nav-slide-selected"
                            data-index="0"
                            data-slick-index="0"
                            aria-hidden="false"
                            tabindex="0"
                            style="width: 100px"
                          >
                            <img
                              src="https://themes12.anvanto.com/super/themes/pascal/64-slider_photo/brown-bear-vector-graphics.jpg"
                              alt=""
                              title=""
                              width="107"
                              height="143"
                              itemprop="image"
                            />
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-active"
                            data-index="1"
                            data-slick-index="1"
                            aria-hidden="false"
                            tabindex="0"
                            style="width: 100px"
                          >
                            <img
                              src="https://themes12.anvanto.com/super/themes/pascal/65-slider_photo/brown-bear-vector-graphics.jpg"
                              alt=""
                              title=""
                              width="107"
                              height="143"
                              itemprop="image"
                            />
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-active"
                            data-index="2"
                            data-slick-index="2"
                            aria-hidden="false"
                            tabindex="0"
                            style="width: 100px"
                          >
                            <img
                              src="https://themes12.anvanto.com/super/themes/pascal/66-slider_photo/brown-bear-vector-graphics.jpg"
                              alt=""
                              title=""
                              width="107"
                              height="143"
                              itemprop="image"
                            />
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide slick-active"
                            data-index="3"
                            data-slick-index="3"
                            aria-hidden="false"
                            tabindex="0"
                            style="width: 100px"
                          >
                            <img
                              src="https://themes12.anvanto.com/super/themes/pascal/67-slider_photo/brown-bear-vector-graphics.jpg"
                              alt=""
                              title=""
                              width="107"
                              height="143"
                              itemprop="image"
                            />
                          </div>
                          <div
                            class="an_productpage-slider-item slick-slide"
                            data-index="4"
                            data-slick-index="4"
                            aria-hidden="true"
                            tabindex="-1"
                            style="width: 100px"
                          >
                            <img
                              src="https://themes12.anvanto.com/super/themes/pascal/68-slider_photo/brown-bear-vector-graphics.jpg"
                              alt=""
                              title=""
                              width="107"
                              height="143"
                              itemprop="image"
                            />
                          </div>
                        </div>
                      </div>

                      <!-- <i
                        class="material-icons slick-next slick-arrow"
                        aria-disabled="false"
                        >keyboard_arrow_right</i
                      > -->
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-md-7">
                <div class="product-page-stars js-product-page-stars no-stars">
                  <div class="grade-stars small-stars" data-grade="0">
                    <div class="star-content star-empty clearfix">
                      <div class="star" style="visibility: hidden"></div>
                      <div class="star"></div>
                      <div class="star"></div>
                      <div class="star"></div>
                      <div class="star"></div>
                    </div>
                    <div class="star-content star-full clearfix">
                      <div class="star-on"></div>
                    </div>
                  </div>
                </div>

                <h1 class="h1" itemprop="name">Jacquard pullover hoodie</h1>

                <div class="product-prices">
                  <div
                    class="product-price h5"
                    itemprop="offers"
                    itemscope=""
                    itemtype="https://schema.org/Offer"
                  >
                    <link
                      itemprop="availability"
                      href="https://schema.org/InStock"
                    />
                    <meta itemprop="priceCurrency" content="EUR" />
                    <meta
                      itemprop="url"
                      content="https://themes12.anvanto.com/super/themes/pascal/en/partycocktail/13-73-brown-bear-vector-graphics.html#/1-size-s/14-color-blue"
                    />
                    <div class="current-price">
                      <span class="price" itemprop="price" content="41.4"
                        >€41.40</span
                      >
                    </div>
                  </div>

                  <div class="tax-shipping-delivery-label"></div>
                </div>

                <div
                  class="an_realtimevisitorcounter-block"
                  data-min-value="5"
                  data-max-value="25"
                  data-stroke-value="8"
                  data-min-interval="2"
                  data-max-interval="6"
                >
                  <div class="an_realtimevisitorcounter-block-text">
                    <span class="an_realtimevisitorcounter-label"
                      >Real Time:</span
                    >
                    <span
                      class="an_realtimevisitorcounter-counter visitors-counter"
                      >10</span
                    >
                    <span class="an_realtimevisitorcounter-label_visitors"
                      >Visitor right now</span
                    >
                  </div>
                </div>
                <div class="product-information">
                  <div id="product-description-short-13" itemprop="description">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>

                  <div class="product-additional-info">
                    <div class="product-reference">
                      <label class="label">Reference: </label>
                      <span itemprop="sku">demo_19</span>
                    </div>
                    <div class="product-manufacturer">
                      <label class="label">Brand: </label>
                      <span>
                        <a
                          href="https://themes12.anvanto.com/super/themes/pascal/en/brand/2-graphic-corner"
                          >Graphic Corner</a
                        >
                      </span>
                    </div>

                    <style>
                      .an-hurry-up-progress-fill {
                        background-color: #000 !important;
                      }
                    </style>
                    <div class="an_hurry_up">
                      <div class="an_hurry_up-text">
                        Hurry up! Only
                        <span class="an_hurry_up-count">99</span>
                        item(s) left in Stock!
                      </div>
                      <div class="an_hurry_up-progress">
                        <div
                          class="an-hurry-up-progress-fill"
                          data-max="1200"
                          style="width: 8.25%"
                        ></div>
                      </div>
                    </div>

                    
                  </div>

                  <div class="product-actions">
                    <form
                      action="https://themes12.anvanto.com/super/themes/pascal/en/cart"
                      method="post"
                      id="add-to-cart-or-refresh"
                    >
                      <input
                        type="hidden"
                        name="token"
                        value="3128563f09f3c1459c9e2c0631c0d23c"
                      />
                      <input
                        type="hidden"
                        name="id_product"
                        value="13"
                        id="product_page_product_id"
                      />
                      <input
                        type="hidden"
                        name="id_customization"
                        value="0"
                        id="product_customization_id"
                      />

                      <div class="product-variants">
                        <div class="clearfix product-variants-item">
                          <span class="control-label">Color: Blue</span>
                          <ul id="group_2">
                            <li
                              class="float-xs-left input-container input-container-checked input-container-color"
                            >
                              <input
                                class="input-color"
                                type="radio"
                                data-product-attribute="2"
                                name="group[2]"
                                value="14"
                                checked="checked"
                              />

                              <img
                                src="https://themes12.anvanto.com/super/themes/pascal/64-small_default/brown-bear-vector-graphics.jpg"
                                alt=""
                              />
                              <div class="an_attr-effect"></div>
                            </li>
                            <li
                              class="float-xs-left input-container input-container-color"
                            >
                              <input
                                class="input-color"
                                type="radio"
                                data-product-attribute="2"
                                name="group[2]"
                                value="15"
                              />

                              <img
                                src="https://themes12.anvanto.com/super/themes/pascal/64-small_default/brown-bear-vector-graphics.jpg"
                                alt=""
                              />
                              <div class="an_attr-effect"></div>
                            </li>
                          </ul>
                        </div>
                        <div class="clearfix product-variants-item">
                          <span class="control-label">Size: S</span>
                          <ul id="group_1">
                            <li class="input-container float-xs-left">
                              <input
                                class="input-radio"
                                type="radio"
                                data-product-attribute="1"
                                name="group[1]"
                                value="1"
                                checked="checked"
                              />
                              <span class="radio-label">S</span>
                            </li>
                            <li class="input-container float-xs-left">
                              <input
                                class="input-radio"
                                type="radio"
                                data-product-attribute="1"
                                name="group[1]"
                                value="3"
                              />
                              <span class="radio-label">L</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <section class="product-discounts"></section>

                      <div class="product-add-to-cart">
                        <div
                          class="product-quantity product-variants-item clearfix"
                        >
                          <div class="qty">
                            <div class="input-group bootstrap-touchspin">
                              <span
                                class="input-group-addon bootstrap-touchspin-prefix"
                                style="display: none"
                              ></span
                              ><input
                                type="number"
                                name="qty"
                                id="quantity_wanted"
                                value="1"
                                class="input-group form-control"
                                min="1"
                                aria-label="Quantity"
                                style="display: block"
                              /><span
                                class="input-group-addon bootstrap-touchspin-postfix"
                                style="display: none"
                              ></span
                              ><span class="input-group-btn-vertical"
                                ><button
                                  class="btn btn-touchspin js-touchspin bootstrap-touchspin-up"
                                  type="button"
                                >
                                  <i
                                    class="material-icons touchspin-up"
                                  ></i></button
                                ><button
                                  class="btn btn-touchspin js-touchspin bootstrap-touchspin-down"
                                  type="button"
                                >
                                  <i
                                    class="material-icons touchspin-down"
                                  ></i></button
                              ></span>
                            </div>
                          </div>
                        </div>

                        <div class="quantity_availability">
                          <div class="add">
                            <button
                              class="btn btn-primary add-to-cart"
                              data-button-action="add-to-cart"
                              type="submit"
                            >
                              Add to cart
                            </button>

                            <span id="product-availability"> </span>
                          </div>
                        </div>

                        <p class="product-minimal-quantity"></p>
                      </div>

                      <input
                        class="product-refresh ps-hidden-by-js"
                        name="refresh"
                        type="submit"
                        value="Refresh"
                        style="display: none"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <ProfileDetailTab :product="product" />

            <div class="row product-comments-head">
              <h3 class="h2 decorated-title">Last Reviews</h3>

              <div
                class="col-md-12 col-sm-12"
                id="product-comments-list-header"
              >
                <div class="comments-nb">
                  <!-- <i class="material-icons shopping-cart">chat</i> -->
                  Comments (0)
                </div>
              </div>
            </div>




          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RelatedProduct from '~/components/Product/RelatedProduct.vue'
import ProfileDetailTab from '~/components/ProductDetail/Index.vue'

@Component({
  components: {
    RelatedProduct,
    ProfileDetailTab
  }
})
export default class ProductDetail extends Vue {
  private currentImageSource: String = ''

  private product: any = {
    id: 'uhwef98duch',
    name: 'Alcott Scarf Chain-Link Shoulder Bag - Pumpkin',
    description:
      "Get acquainted with the colour of the season: cerulean blue. With its curved silhouette and two-tone chunky chain handle, our Sonnet shoulder bag is a breath of fresh air, ready to add a refreshing spin to all of your summer looks and beyond. Whether it's a stroll down the beach or a trip to the mall, the turn-lock closure will help keep all your belongings secure and accessible within the compact small-sized interior. Style it with a floral halter top and denim shorts. Complete the look with a pair of woven mules.",
    colors: [
      {
        id: 'id-1',
        name: 'Yellow',
        value: 'yellow'
      },
      {
        id: 'id-2',
        name: 'White',
        value: 'white'
      },
      {
        id: 'id-3',
        name: 'Black',
        value: 'black'
      }
    ],
    sizes: [
      {
        id: 'id-1',
        text: 'S',
        value: 's'
      },
      {
        id: 'id-2',
        text: 'M',
        value: 'm'
      }
    ],
    imagesReview: [
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwa5ec550b/images/hi-res/2022-L3-CK2-80151122-09-1.jpg?sw=580&sh=774',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwa5ec550b/images/hi-res/2022-L3-CK2-80151122-09-1.jpg?sw=580&sh=774'
    ],
    images: [
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw8365e5d2/images/hi-res/2022-L3-CK2-80151122-H8-1.jpg?sw=1152&sh=1536',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw2d58e9b9/images/hi-res/2022-L3-CK2-80151122-H8-3.jpg?sw=1152&sh=1536',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwf14b0d89/images/hi-res/2022-L3-CK2-80151122-H8-4.jpg?sw=1152&sh=1536',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw575ffdc6/images/hi-res/2022-L3-CK2-80151122-H8-8.jpg?sw=1152&sh=1536',
      'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw40d53a25/images/hi-res/2022-L3-CK2-80151122-H8-7.jpg?sw=1152&sh=1536'
    ],
    reviews: [
      {
        id: 'id-1',
        user: {
          id: 'id-1',
          firstname: 'firstname-1',
          lastname: 'lastname-1',
          avatar: 'avatar-src-1'
        },
        content: 'content-1'
      },
      {
        id: 'id-2',
        user: {
          id: 'id-2',
          firstname: 'firstname-2',
          lastname: 'lastname-2',
          avatar: 'avatar-src-2'
        },
        content: 'content-2'
      }
    ],
    ratings: 4.5,
    category: [
      {
        id: 'id-1',
        categoryName: 'categoryName-1'
      },
      {
        id: 'id-2',
        categoryName: 'categoryName-2'
      }
    ],
    user: {
      id: 'id-1',
      firstname: 'firstname-1',
      lastname: 'lastname-1',
      avatar: 'avatar-src-1'
    },
    price: 86,
    unit: '$',
    price_range: {
      text: 'US$80 to US$100',
      price_gte: 80,
      price_lte: 100,
      unit: '$'
    }
  }

  changeCurrentImageSource(src: String) {
    this.currentImageSource = src
  }

  created() {
    console.log(this.$route.params.id)
  }
}
</script>
