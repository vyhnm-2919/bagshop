<template>
  <section class="section pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5">
          <div class="slider slider-for">
            <div>
              <img :src="product.images[1]" class="img-fluid rounded" alt="" />
            </div>
          </div>
          <!-- nhớ làm thanh slider kick chọn ở dưới -->
          <div class="slider slider-nav d-flex">
            <div>
              <img
                v-for="(image, index) in product.images"
                :key="index"
                :src="image"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="section-title ml-md-4">
            <h4 class="title">Branded T-Shirts</h4>
            <h5 class="text-muted">
              $21.00 <del class="text-danger ml-2">$25.00</del>
            </h5>
            <ul class="list-unstyled text-warning h5 mb-0">
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
            </ul>

            <h5 class="mt-4 py-2">Overview :</h5>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              exercitationem, unde molestiae sint quae inventore atque minima
              natus fugiat nihil quisquam voluptates ea omnis. Modi laborum
              soluta tempore unde accusantium.
            </p>

            <ul class="list-unstyled text-muted">
              <li class="mb-0">
                <span class="text-primary h5 mr-2"
                  ><i class="uil uil-check-circle align-middle"></i
                ></span>
                Digital Marketing Solutions for Tomorrow
              </li>
              <li class="mb-0">
                <span class="text-primary h5 mr-2"
                  ><i class="uil uil-check-circle align-middle"></i
                ></span>
                Our Talented &amp; Experienced Marketing Agency
              </li>
              <li class="mb-0">
                <span class="text-primary h5 mr-2"
                  ><i class="uil uil-check-circle align-middle"></i
                ></span>
                Create your own skin to match your brand
              </li>
            </ul>

            <div class="row mt-4 pt-2">
              <div class="col-lg-6 col-12">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0">Your Size:</h6>
                  <ul class="list-unstyled mb-0 ml-3">
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-icon btn-soft-primary"
                        >S</a
                      >
                    </li>
                    <li class="list-inline-item ml-1">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-icon btn-soft-primary"
                        >M</a
                      >
                    </li>
                    <li class="list-inline-item ml-1">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-icon btn-soft-primary"
                        >L</a
                      >
                    </li>
                    <li class="list-inline-item ml-1">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-icon btn-soft-primary"
                        >XL</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!--end col-->

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
              <!--end col-->
            </div>
            <!--end row-->

            <div class="mt-4 pt-2">
              <a href="javascript:void(0)" class="btn btn-primary">Shop Now</a>
              <a href="shop-cart.html" class="btn btn-soft-primary ml-2"
                >Add to Cart</a
              >
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <div class="container mt-100 mt-60">
      <div class="row">
        <div class="col-12">
          <ul
            class="nav nav-pills shadow flex-column flex-sm-row d-md-inline-flex mb-0 p-1 bg-white rounded position-relative overflow-hidden"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item m-1">
              <a
                class="nav-link py-2 px-5 active rounded"
                id="description-data"
                data-toggle="pill"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="false"
              >
                <div class="text-center">
                  <h6 class="mb-0">Description</h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->

            <li class="nav-item m-1">
              <a
                class="nav-link py-2 px-5 rounded"
                id="additional-info"
                data-toggle="pill"
                href="#additional"
                role="tab"
                aria-controls="additional"
                aria-selected="false"
              >
                <div class="text-center">
                  <h6 class="mb-0">Additional Information</h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->

            <li class="nav-item m-1">
              <a
                class="nav-link py-2 px-5 rounded"
                id="review-comments"
                data-toggle="pill"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                <div class="text-center">
                  <h6 class="mb-0">Review</h6>
                </div> </a
              ><!--end nav link-->
            </li>
            <!--end nav item-->
          </ul>

          <div class="tab-content mt-5" id="pills-tabContent">
            <div
              class="card border-0 tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-data"
            >
              <p class="text-muted mb-0">
                Due to its widespread use as filler text for layouts,
                non-readability is of great importance: human perception is
                tuned to recognize certain patterns and repetitions in texts. If
                the distribution of letters and 'words' is random, the reader
                will not be distracted from making a neutral judgement on the
                visual impact and readability of the typefaces (typography), or
                the distribution of text on the page (layout or type area). For
                this reason, dummy text usually consists of a more or less
                random series of words or syllables.
              </p>
            </div>

            <div
              class="card border-0 tab-pane fade"
              id="additional"
              role="tabpanel"
              aria-labelledby="additional-info"
            >
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 100px">Color</td>
                    <td class="text-muted">Red, White, Black, Orange</td>
                  </tr>

                  <tr>
                    <td>Material</td>
                    <td class="text-muted">Cotton</td>
                  </tr>

                  <tr>
                    <td>Size</td>
                    <td class="text-muted">S, M, L, XL, XXL</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              class="card border-0 tab-pane fade"
              id="review"
              role="tabpanel"
              aria-labelledby="review-comments"
            >
              <div class="row">
                <div class="col-lg-6">
                  <ul class="media-list list-unstyled mb-0">
                    <li>
                      <div class="d-flex justify-content-between">
                        <div class="media align-items-center">
                          <a class="pr-3" href="#">
                            <img
                              src="images/client/01.jpg"
                              class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div class="commentor-detail">
                            <h6 class="mb-0">
                              <a
                                href="javascript:void(0)"
                                class="text-dark media-heading"
                                >Lorenzo Peterson</a
                              >
                            </h6>
                            <small class="text-muted"
                              >15th August, 2019 at 01:25 pm</small
                            >
                          </div>
                        </div>
                        <ul class="list-unstyled mb-0">
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-3">
                        <p class="text-muted font-italic p-3 bg-light rounded">
                          " Awesome product "
                        </p>
                      </div>
                    </li>

                    <li class="mt-4">
                      <div class="d-flex justify-content-between">
                        <div class="media align-items-center">
                          <a class="pr-3" href="#">
                            <img
                              src="images/client/02.jpg"
                              class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div class="commentor-detail">
                            <h6 class="mb-0">
                              <a
                                href="javascript:void(0)"
                                class="media-heading text-dark"
                                >Tammy Camacho</a
                              >
                            </h6>
                            <small class="text-muted"
                              >15th August, 2019 at 05:44 pm</small
                            >
                          </div>
                        </div>
                        <ul class="list-unstyled mb-0">
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star-outline text-warning"></i>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-3">
                        <p
                          class="text-muted font-italic p-3 bg-light rounded mb-0"
                        >
                          " Good "
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <!--end col-->

                <div class="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <form class="ml-lg-4">
                    <div class="row">
                      <div class="col-12">
                        <h5>Add your review:</h5>
                      </div>
                      <div class="col-12 mt-4">
                        <h6 class="small font-weight-bold">Your Rating:</h6>
                        <a
                          href="javascript:void(0)"
                          class="d-inline-block mr-3"
                        >
                          <ul class="list-unstyled mb-0 small">
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                          </ul>
                        </a>

                        <a
                          href="javascript:void(0)"
                          class="d-inline-block mr-3"
                        >
                          <ul class="list-unstyled mb-0 small">
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                          </ul>
                        </a>

                        <a
                          href="javascript:void(0)"
                          class="d-inline-block mr-3"
                        >
                          <ul class="list-unstyled mb-0 small">
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                          </ul>
                        </a>

                        <a
                          href="javascript:void(0)"
                          class="d-inline-block mr-3"
                        >
                          <ul class="list-unstyled mb-0 small">
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                          </ul>
                        </a>

                        <a href="javascript:void(0)" class="d-inline-block">
                          <ul class="list-unstyled mb-0 small">
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                          </ul>
                        </a>
                      </div>
                      <div class="col-md-12 mt-3">
                        <div class="form-group">
                          <label>Your Review:</label>
                          <div class="position-relative">
                            <i
                              data-feather="message-circle"
                              class="fea icon-sm icons"
                            ></i>
                            <textarea
                              id="message"
                              placeholder="Your Comment"
                              rows="5"
                              name="message"
                              class="form-control pl-5"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Name <span class="text-danger">*</span></label>
                          <div class="position-relative">
                            <i
                              data-feather="user"
                              class="fea icon-sm icons"
                            ></i>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              class="form-control pl-5"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            >Your Email
                            <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                            <i
                              data-feather="mail"
                              class="fea icon-sm icons"
                            ></i>
                            <input
                              id="email"
                              type="email"
                              placeholder="Email"
                              name="email"
                              class="form-control pl-5"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-md-12">
                        <div class="send">
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </form>
                  <!--end form-->
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end container-->
    <RelatedProduct />

    <!--end container-->
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RelatedProduct from '~/components/Product/RelatedProduct.vue'

@Component({
  components: {
    RelatedProduct
  }
})
export default class ProductDetail extends Vue {
  private product: any = {
    id: 'uhwef98duch',
    name: 'Alcott Scarf Chain-Link Shoulder Bag - Pumpkin',
    descripsion:
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

  created() {
    console.log(this.$route.params.id)
  }
}
</script>
