<template>
  <!-- <div class="container mt-100 mt-60">
    <div class="row">
      <div class="col-12">
        <ul
          class="nav nav-pills shadow flex-column flex-sm-row d-md-inline-flex mb-0 p-1 bg-white rounded position-relative overflow-hidden"
          id="pills-tab"
          role="tablist"
        >
          <li
            class="nav-item m-1 cursor-pointer"
            v-for="(tablist, index) in tabList"
            :key="index"
            @click="changeTab(index)"
          >
            <div
              :class="[
                'nav-link py-2 px-5 rounded',
                index === indexActive && 'active'
              ]"
            >
              <div class="text-center">
                <h6 class="mb-0">{{ tablist }}</h6>
              </div>
            </div>
          </li>
          <li
            v-if="indexActive === 2"
            class="nav-item m-1 cursor-pointer"
            @click="changeVisibleFormReview"
          >
            <div class="nav-link py-2 px-5 rounded">
              <div class="text-center">
                <h6 class="mb-0">Write your review</h6>
              </div>
            </div>
          </li>
        </ul>

        <div class="tab-content mt-5" id="pills-tabContent">
          <div
            :class="[
              'card border-0 tab-pane fade',
              indexActive === 0 && 'show active'
            ]"
          >
            <p class="text-muted mb-0">
              {{ product.description }}
            </p>
          </div>

          <div
            :class="[
              'card border-0 tab-pane fade',
              indexActive === 1 && 'show active'
            ]"
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
            :class="[
              'card border-0 tab-pane fade',
              indexActive === 2 && 'show active'
            ]"
          >
            <div class="row">
              <div :class="[isShowFormReview ? 'col-lg-6' : 'col-12']">
                <ul class="media-list list-unstyled mb-0">
                  <li>
                    <div class="d-flex justify-content-between">
                      <div class="media align-items-center">
                        <a class="pr-3" href="#">
                          <img
                            src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/198674503_116891063956515_5868022822375871391_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eOiQdf4x3Z0AX8ZKW6_&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-yeSnkr-djdbYzRYRGI1cWBzrsziFwVnyKcCQdqGW4yA&oe=62880FB0"
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
                            src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.18169-9/25498018_2070101486557234_4362652946010092430_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IE94fTEyGK8AX-uU7QI&tn=frrgEXGZ8O60PVtM&_nc_ht=scontent.fdad1-2.fna&oh=00_AT9pXs88B1_-EbEkfJp1BY_gdmk_Mf2QkXSPIlceNMjGYQ&oe=6288DF1A"
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
              <div
                class="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0"
                v-if="isShowFormReview"
              >
                <form class="ml-lg-4">
                  <div class="row">
                    <div class="col-12">
                      <h5>Add your review:</h5>
                    </div>
                    <div class="col-12 mt-4">
                      <h6 class="small font-weight-bold">Your Rating:</h6>
                      <a href="javascript:void(0)" class="d-inline-block mr-3">
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

                      <a href="javascript:void(0)" class="d-inline-block mr-3">
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

                      <a href="javascript:void(0)" class="d-inline-block mr-3">
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

                      <a href="javascript:void(0)" class="d-inline-block mr-3">
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

                    <div class="col-lg-6">
                      <div class="form-group">
                        <label>Name <span class="text-danger">*</span></label>
                        <div class="position-relative">
                          <i data-feather="user" class="fea icon-sm icons"></i>
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

                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          >Your Email <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <i data-feather="mail" class="fea icon-sm icons"></i>
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

                    <div class="col-md-12">
                      <div class="send">
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="tabs">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                    >Description</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#product-details"
                    role="tab"
                    aria-controls="product-details"
                    >Product Details</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#extra-0"
                    role="tab"
                    aria-controls="extra-0"
                    >Custom tab 1</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#extra-1"
                    role="tab"
                    aria-controls="extra-1"
                    >Custom tab. Video</a
                  >
                </li>
              </ul>

              <div class="tab-content" id="tab-content">
                <div
                  class="tab-pane fade in active"
                  id="description"
                  role="tabpanel"
                >
                  <div class="product-description">
                    <p>
                      You have a custom printing creative project? The vector
                      graphic Mountain fox illustration can be used for printing
                      purpose on any support, without size limitation.
                    </p>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="product-details"
                  data-product='{"id_shop_default":"1","id_manufacturer":"2","id_supplier":"0","reference":"demo_19","is_virtual":"0","delivery_in_stock":"","delivery_out_stock":"","id_category_default":"26","on_sale":"0","online_only":"0","ecotax":0,"minimal_quantity":"1","low_stock_threshold":null,"low_stock_alert":"0","price":"\u20ac41.40","unity":"","unit_price_ratio":"0.000000","additional_shipping_cost":"0.000000","customizable":"0","text_fields":"0","uploadable_files":"0","redirect_type":"301-category","id_type_redirected":"0","available_for_order":"1","available_date":null,"show_condition":"0","condition":"new","show_price":"1","indexed":"1","visibility":"both","cache_default_attribute":"73","advanced_stock_management":"0","date_add":"2019-10-24 12:53:04","date_upd":"2021-07-22 04:17:41","pack_stock_type":"3","meta_description":"","meta_keywords":"","meta_title":"","link_rewrite":"brown-bear-vector-graphics","name":"Jacquard pullover hoodie","description":"<p>You have a custom printing creative project? The vector graphic Mountain fox illustration can be used for printing purpose on any support, without size limitation.<\/p>","description_short":"<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<\/p>","available_now":"","available_later":"","id":13,"id_product":13,"out_of_stock":1,"new":1,"id_product_attribute":73,"quantity_wanted":1,"extraContent":[{"title":"Custom tab 1","content":"<div class=\"an_bootstraptabs\" id=\"\" view-type=\"tabs\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<\/p>\n<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<\/p> <\/div>\n\n","attr":{"id":"","class":""},"moduleName":"anproductextratabs"},{"title":"Custom  tab. Video","content":"<div class=\"an_bootstraptabs\" id=\"\" view-type=\"tabs\">\n    <h3>Custom video 1<\/h3>\n<p><iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/fH3ZyO1TP6Y\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"><\/iframe><\/p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tio ullamco laboris nisi ut aliquip.<\/p>\n<h3>Custom video 2<\/h3>\n<p><iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/a5beTN5YrEw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"><\/iframe><\/p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tio ullamco laboris nisi ut aliquip.<\/p>\n<h3>Custom video 3<\/h3>\n<p><iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/H8LTHvXQuzM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"><\/iframe><\/p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tio ullamco laboris nisi ut aliquip.<\/p> <\/div>\n\n","attr":{"id":"","class":""},"moduleName":"anproductextratabs"}],"allow_oosp":1,"category":"partycocktail","category_name":"Party\/Cocktail","link":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/en\/partycocktail\/13-brown-bear-vector-graphics.html","attribute_price":0,"price_tax_exc":41.4,"price_without_reduction":41.4,"reduction":0,"specific_prices":[],"quantity":99,"quantity_all_versions":396,"id_image":"en-default","features":[],"attachments":[],"virtual":0,"pack":0,"packItems":[],"nopackprice":0,"customization_required":false,"attributes":{"1":{"id_attribute":"1","id_attribute_group":"1","name":"S","group":"Size","reference":"","ean13":"","isbn":"","upc":"","mpn":""},"2":{"id_attribute":"14","id_attribute_group":"2","name":"Blue","group":"Color","reference":"","ean13":"","isbn":"","upc":"","mpn":""}},"rate":0,"tax_name":"","ecotax_rate":0,"unit_price":"","customizations":{"fields":[]},"id_customization":0,"is_customizable":false,"show_quantities":true,"quantity_label":"Items","quantity_discounts":[],"customer_group_discount":0,"images":[{"bySize":{"attributes_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"small_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-small_default\/brown-bear-vector-graphics.jpg","width":99,"height":132},"slider_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-slider_photo\/brown-bear-vector-graphics.jpg","width":107,"height":143},"cart_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-cart_default\/brown-bear-vector-graphics.jpg","width":120,"height":160},"search_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-search_photo\/brown-bear-vector-graphics.jpg","width":135,"height":180},"menu_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-menu_default\/brown-bear-vector-graphics.jpg","width":135,"height":180},"catalog_small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"catalog_medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-catalog_medium\/brown-bear-vector-graphics.jpg","width":255,"height":340},"home_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-home_default\/brown-bear-vector-graphics.jpg","width":348,"height":464},"catalog_large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-catalog_large\/brown-bear-vector-graphics.jpg","width":398,"height":531},"large_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-large_default\/brown-bear-vector-graphics.jpg","width":445,"height":593},"medium_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-medium_default\/brown-bear-vector-graphics.jpg","width":452,"height":602},"product_zoom":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600}},"small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/64-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600},"legend":"","id_image":"64","cover":null,"position":"1","associatedVariants":["73","74"]},{"bySize":{"attributes_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"small_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-small_default\/brown-bear-vector-graphics.jpg","width":99,"height":132},"slider_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-slider_photo\/brown-bear-vector-graphics.jpg","width":107,"height":143},"cart_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-cart_default\/brown-bear-vector-graphics.jpg","width":120,"height":160},"search_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-search_photo\/brown-bear-vector-graphics.jpg","width":135,"height":180},"menu_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-menu_default\/brown-bear-vector-graphics.jpg","width":135,"height":180},"catalog_small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"catalog_medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-catalog_medium\/brown-bear-vector-graphics.jpg","width":255,"height":340},"home_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-home_default\/brown-bear-vector-graphics.jpg","width":348,"height":464},"catalog_large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-catalog_large\/brown-bear-vector-graphics.jpg","width":398,"height":531},"large_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-large_default\/brown-bear-vector-graphics.jpg","width":445,"height":593},"medium_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-medium_default\/brown-bear-vector-graphics.jpg","width":452,"height":602},"product_zoom":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600}},"small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600},"legend":"","id_image":"65","cover":"1","position":"2","associatedVariants":["73","75"]},{"bySize":{"attributes_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"small_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-small_default\/brown-bear-vector-graphics.jpg","width":99,"height":132},"slider_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-slider_photo\/brown-bear-vector-graphics.jpg","width":107,"height":143},"cart_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-cart_default\/brown-bear-vector-graphics.jpg","width":120,"height":160},"search_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-search_photo\/brown-bear-vector-graphics.jpg","width":135,"height":180},"menu_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-menu_default\/brown-bear-vector-graphics.jpg","width":135,"height":180},"catalog_small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"catalog_medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-catalog_medium\/brown-bear-vector-graphics.jpg","width":255,"height":340},"home_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-home_default\/brown-bear-vector-graphics.jpg","width":348,"height":464},"catalog_large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-catalog_large\/brown-bear-vector-graphics.jpg","width":398,"height":531},"large_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-large_default\/brown-bear-vector-graphics.jpg","width":445,"height":593},"medium_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-medium_default\/brown-bear-vector-graphics.jpg","width":452,"height":602},"product_zoom":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600}},"small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/66-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600},"legend":"","id_image":"66","cover":null,"position":"3","associatedVariants":["73","75"]},{"bySize":{"attributes_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"small_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-small_default\/brown-bear-vector-graphics.jpg","width":99,"height":132},"slider_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-slider_photo\/brown-bear-vector-graphics.jpg","width":107,"height":143},"cart_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-cart_default\/brown-bear-vector-graphics.jpg","width":120,"height":160},"search_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-search_photo\/brown-bear-vector-graphics.jpg","width":135,"height":180},"menu_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-menu_default\/brown-bear-vector-graphics.jpg","width":135,"height":180},"catalog_small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"catalog_medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-catalog_medium\/brown-bear-vector-graphics.jpg","width":255,"height":340},"home_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-home_default\/brown-bear-vector-graphics.jpg","width":348,"height":464},"catalog_large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-catalog_large\/brown-bear-vector-graphics.jpg","width":398,"height":531},"large_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-large_default\/brown-bear-vector-graphics.jpg","width":445,"height":593},"medium_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-medium_default\/brown-bear-vector-graphics.jpg","width":452,"height":602},"product_zoom":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600}},"small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/67-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600},"legend":"","id_image":"67","cover":null,"position":"4","associatedVariants":["73","76"]},{"bySize":{"attributes_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"small_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-small_default\/brown-bear-vector-graphics.jpg","width":99,"height":132},"slider_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-slider_photo\/brown-bear-vector-graphics.jpg","width":107,"height":143},"cart_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-cart_default\/brown-bear-vector-graphics.jpg","width":120,"height":160},"search_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-search_photo\/brown-bear-vector-graphics.jpg","width":135,"height":180},"menu_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-menu_default\/brown-bear-vector-graphics.jpg","width":135,"height":180},"catalog_small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"catalog_medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-catalog_medium\/brown-bear-vector-graphics.jpg","width":255,"height":340},"home_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-home_default\/brown-bear-vector-graphics.jpg","width":348,"height":464},"catalog_large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-catalog_large\/brown-bear-vector-graphics.jpg","width":398,"height":531},"large_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-large_default\/brown-bear-vector-graphics.jpg","width":445,"height":593},"medium_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-medium_default\/brown-bear-vector-graphics.jpg","width":452,"height":602},"product_zoom":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600}},"small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/68-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600},"legend":"","id_image":"68","cover":null,"position":"5","associatedVariants":["73","76"]}],"cover":{"bySize":{"attributes_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"small_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-small_default\/brown-bear-vector-graphics.jpg","width":99,"height":132},"slider_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-slider_photo\/brown-bear-vector-graphics.jpg","width":107,"height":143},"cart_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-cart_default\/brown-bear-vector-graphics.jpg","width":120,"height":160},"search_photo":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-search_photo\/brown-bear-vector-graphics.jpg","width":135,"height":180},"menu_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-menu_default\/brown-bear-vector-graphics.jpg","width":135,"height":180},"catalog_small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"catalog_medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-catalog_medium\/brown-bear-vector-graphics.jpg","width":255,"height":340},"home_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-home_default\/brown-bear-vector-graphics.jpg","width":348,"height":464},"catalog_large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-catalog_large\/brown-bear-vector-graphics.jpg","width":398,"height":531},"large_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-large_default\/brown-bear-vector-graphics.jpg","width":445,"height":593},"medium_default":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-medium_default\/brown-bear-vector-graphics.jpg","width":452,"height":602},"product_zoom":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600}},"small":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-attributes_default\/brown-bear-vector-graphics.jpg","width":37,"height":50},"medium":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-catalog_small\/brown-bear-vector-graphics.jpg","width":184,"height":245},"large":{"url":"https:\/\/themes12.anvanto.com\/super\/themes\/pascal\/65-product_zoom\/brown-bear-vector-graphics.jpg","width":1200,"height":1600},"legend":"","id_image":"65","cover":"1","position":"2","associatedVariants":["73","75"]},"has_discount":false,"discount_type":null,"discount_percentage":null,"discount_percentage_absolute":null,"discount_amount":null,"discount_amount_to_display":null,"price_amount":41.4,"unit_price_full":"","show_availability":true,"availability_date":null,"availability_message":"","availability":"available"}'
                  role="tabpanel"
                >
                  <div class="product-manufacturer">
                    <a
                      href="https://themes12.anvanto.com/super/themes/pascal/en/brand/2-graphic-corner"
                    >
                      <img
                        src="https://themes12.anvanto.com/super/themes/pascal/img/m/2.jpg"
                        class="img img-thumbnail manufacturer-logo"
                        alt="Graphic Corner"
                      />
                    </a>
                  </div>
                  <div class="product-reference">
                    <label class="label">Reference </label>
                    <span itemprop="sku">demo_19</span>
                  </div>

                  <div class="product-quantities">
                    <label class="label">In stock</label>
                    <span data-stock="99" data-allow-oosp="1">99 Items</span>
                  </div>

                  <div class="product-out-of-stock"></div>

                  <section class="product-features">
                    <h3 class="h6">Specific References</h3>
                    <dl class="data-sheet"></dl>
                  </section>
                </div>

                <div class="tab-pane fade in" id="extra-0" role="tabpanel">
                  <div class="an_bootstraptabs" id="" view-type="tabs">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div class="tab-pane fade in" id="extra-1" role="tabpanel">
                  <div class="an_bootstraptabs" id="" view-type="tabs">
                    <h3>Custom video 1</h3>
                    <p>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fH3ZyO1TP6Y"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="allowfullscreen"
                      ></iframe>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elitse
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercita tio
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <h3>Custom video 2</h3>
                    <p>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/a5beTN5YrEw"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="allowfullscreen"
                      ></iframe>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elitse
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercita tio
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <h3>Custom video 3</h3>
                    <p>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/H8LTHvXQuzM"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="allowfullscreen"
                      ></iframe>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elitse
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercita tio
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class ProfileDetailTab extends Vue {
  @Prop() product!: any

  private tabList: Array<String> = [
    'Description',
    'Additional Information',
    'Review'
  ]

  private indexActive: number = 0

  private isShowFormReview: Boolean = false

  changeTab(index: number) {
    this.indexActive = index
  }

  changeVisibleFormReview() {
    this.isShowFormReview = !this.isShowFormReview
  }
}
</script>
