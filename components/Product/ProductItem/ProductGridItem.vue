<template>
  <!-- <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    <div class="card shop-list border-0 position-relative">
      <div class="shop-image position-relative overflow-hidden rounded shadow">
        <div @click="directToProductDetail" class="cursor-pointer">
          <img :src="product.images[0]" class="img-fluid" alt="" />
        </div>
        <div @click="directToProductDetail" class="overlay-work cursor-pointer">
          <img :src="product.images[1]" class="img-fluid" alt="" />
        </div>
        <ul class="list-unstyled shop-icons">
          <li>
            <a
              href="javascript:void(0)"
              class="btn btn-icon btn-pills btn-soft-danger"
              ><fa :icon="['fas', 'heart']"
            /></a>
          </li>
          <li class="mt-2">
            <a
              href="javascript:void(0)"
              data-toggle="modal"
              data-target="#productview"
              class="btn btn-icon btn-pills btn-soft-primary"
              ><fa :icon="['fas', 'eye']"
            /></a>
          </li>
          <li class="mt-2">
            <a
              href="shop-cart.html"
              class="btn btn-icon btn-pills btn-soft-warning"
              ><fa :icon="['fas', 'cart-plus']"
            /></a>
          </li>
        </ul>
      </div>
      <div class="card-body content pt-4 p-2">
        <div @click="directToProductDetail" class="text-dark product-name h6">
          {{ product.name }}
        </div>
        <div class="d-flex justify-content-between mt-1">
          <h6 class="text-muted small font-italic mb-0 mt-1">
            {{ product.unit }}{{ product.price }}
          </h6>
          <ul class="list-unstyled text-warning mb-0">
            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
  <article
    class="product-miniature js-product-miniature product-mobile-row js-img-view-type type-hover-slider col-lg-4"
    data-id-product="15"
    data-id-product-attribute="0"
    itemscope=""
    itemtype="http://schema.org/Product"
  >
    <div class="thumbnail-container reviews-loading">
      <div class="thumbnail-container-image" style="min-height: 339.979px">
        <div
          @click="directToProductDetail"
          class="thumbnail product-thumbnail hover_slider"
          style="height: 339.979px"
        >
          <ul>
            <li class="cover-item" v-for="(image, index) in product.images" :key="index">
              <div class="hover-slider-img">
                <img
                  :src="image"
                  data-lazy-gif="@/assets/images/loading.svg"
                  :data-catalog-small="image"
                  :data-catalog-medium="image"
                  :data-catalog-large="image"
                  :alt="product.name"
                  :data-full-size-image-url="image"
                  class="b-lazy hover-slider-image b-loaded b-initialized"
                  data-width="348"
                  data-height="464"
                  :content="image"
                />
              </div>
            </li>

          </ul>
        </div>

        <div class="highlighted-informations no-variants hidden-sm-down">
          <div class="an_wishlist-mini js-an_wishlist-container">
            <span
              class="js-an_wishlist-addremove"
              data-url="//themes12.anvanto.com/super/themes/pascal/en/module/an_wishlist/ajax?token=3128563f09f3c1459c9e2c0631c0d23c&amp;id_product=15&amp;id_product_attribute=0&amp;action=addRemove"
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

          <a class="quick-view" href="#" data-link-action="quickview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16px"
              height="15px"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(255, 255, 255)"
                d="M15.816,14.004 L11.911,10.344 C12.882,9.250 13.467,7.844 13.467,6.313 C13.467,2.832 10.446,0.000 6.733,0.000 C3.021,0.000 0.000,2.832 0.000,6.313 C0.000,9.795 3.021,12.627 6.733,12.627 C8.366,12.627 9.865,12.078 11.032,11.168 L14.936,14.829 C15.058,14.943 15.217,15.000 15.376,15.000 C15.535,15.000 15.694,14.943 15.816,14.829 C16.059,14.601 16.059,14.232 15.816,14.004 ZM1.244,6.313 C1.244,3.475 3.706,1.166 6.733,1.166 C9.760,1.166 12.223,3.475 12.223,6.313 C12.223,9.151 9.760,11.460 6.733,11.460 C3.706,11.460 1.244,9.151 1.244,6.313 Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="product-description">
        <h3 class="h3 product-title" itemprop="name">
          <div @click="directToProductDetail"
          >
            {{ product.name }}
          </div>
        </h3>

        <div
          class="product-price-and-shipping"
          itemprop="offers"
          itemscope=""
          itemtype="http://schema.org/Offer"
          pricevaliduntil=""
        >
          <meta itemprop="priceCurrency" content="EUR" />
          <meta
            itemprop="url"
            content="https://themes12.anvanto.com/super/themes/pascal/en/partycocktail/15-pack-mug-framed-poster.html"
          />
          <link itemprop="availability" href="http://schema.org/InStock" />
          <div class="product-prices-block">
            <p
              class="an_short_description grid-view-desc"
              id="an_short_description_15"
            >
              {{ product.description }}
            </p>

            <span class="sr-only">Price</span>
            <span class="price" itemprop="price" content="29.57">
              <span class="money" data-currency-eur="€29.57"
                >{{ product.unit }}{{ product.price }}</span
              >
            </span>
          </div>

          <div
            class="an_productattributes js-an_productattributes"
            data-text_out_of_stock="Out of stock"
            data-add_to_cart="Add to cart"
          >
            <form
              method="post"
              class="an_productattributesForm"
              action="https://themes12.anvanto.com/super/themes/pascal/en/cart"
            >
              <input
                name="token"
                value="3128563f09f3c1459c9e2c0631c0d23c"
                type="hidden"
              />
              <input name="id_product" value="15" type="hidden" />
              <input name="qty" type="hidden" value="1" min="1" />

              <div class="js-an_productattributes-standart">
                <div class="an_pa_product-variants"></div>
              </div>

              <div class="an_productattributes-qty-add clearfix">
                <div class="an_productattributes-add">
                  <button
                    class="btn an_productattributes-add-to-cart-btn js-an_productattributes-add-to-cart"
                    data-button-action="add-to-cart"
                    type="submit"
                    data-status="1"
                  >
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class ProductGridItem extends Vue {
  @Prop() product!: any

  directToProductDetail() {
    this.$router.push(`/products/${this.product.id}`)
  }
}
</script>
