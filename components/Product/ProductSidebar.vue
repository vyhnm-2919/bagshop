<template>
  <!-- <div class="col-lg-3 col-md-4 col-12">
    <div class="card border-0 sidebar sticky-bar">
      <div class="card-body p-0">
        <div class="widget">
          <div id="search2" class="widget-search mb-0">
            <form role="search" method="get" id="searchform" class="searchform">
              <div>
                <input
                  type="text"
                  class="border rounded"
                  name="s"
                  id="s"
                  placeholder="Search Keywords..."
                />
                <input type="submit" id="searchsubmit" value="Search" />
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div> -->
  <div id="left-column" class="col-xs-12 col-md-4 col-lg-3">
    <div class="search_filters_mobile-cover"></div>
    <div class="search_filters_mobile-modal">
      <div id="search_filters_wrapper">
        <div class="mobile-menu-header">
          <div class="search_filters_mobile-btn-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16px"
              height="16px"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(0, 0, 0)"
                d="M16.002,0.726 L15.274,-0.002 L8.000,7.273 L0.725,-0.002 L-0.002,0.726 L7.273,8.000 L-0.002,15.274 L0.725,16.002 L8.000,8.727 L15.274,16.002 L16.002,15.274 L8.727,8.000 L16.002,0.726 Z"
              ></path>
            </svg>
          </div>
        </div>

        <div id="search_filters">
          <p class="h3">Filter By</p>

          <ProductCategoryRefinement />
          <ProductColorRefinement />
          <ProductPriceRefinement />
          <ProductSizeRefinement />

          <section class="facet clearfix">
            <div
              class="title"
              data-target="#facet_28558"
              data-toggle="collapse"
            >
              <p class="h4 facet-title">Price</p>
            </div>

            <ul
              id="facet_28558"
              class="faceted-slider"
              data-slider-min="31"
              data-slider-max="84"
              data-slider-id="28558"
              data-slider-values="null"
              data-slider-unit="€"
              data-slider-label="Price"
              data-slider-specifications='{"symbol":[".",",",";","%","-","+","E","\u00d7","\u2030","\u221e","NaN"],"currencyCode":"EUR","currencySymbol":"\u20ac","numberSymbols":[".",",",";","%","-","+","E","\u00d7","\u2030","\u221e","NaN"],"positivePattern":"\u00a4#,##0.00","negativePattern":"-\u00a4#,##0.00","maxFractionDigits":2,"minFractionDigits":2,"groupingUsed":true,"primaryGroupSize":3,"secondaryGroupSize":3}'
              data-slider-encoded-url="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses"
            >
              <li>
                <p id="facet_label_28558">€31.00 - €84.00</p>

                <div
                  id="slider-range_28558"
                  class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                  aria-disabled="false"
                >
                  <div
                    class="ui-slider-range ui-widget-header ui-corner-all"
                    style="left: 0%; width: 100%"
                  ></div>
                  <a
                    class="ui-slider-handle ui-state-default ui-corner-all"
                    href="#"
                    style="left: 0%"
                  ></a
                  ><a
                    class="ui-slider-handle ui-state-default ui-corner-all"
                    href="#"
                    style="left: 100%"
                  ></a>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ProductCategoryRefinement from '~/components/Product/Refinement/ProductCategoryRefinement.vue'
import ProductColorRefinement from '~/components/Product/Refinement/ProductColorRefinement.vue'
import ProductPriceRefinement from '~/components/Product/Refinement/ProductPriceRefinement.vue'
import ProductSizeRefinement from '~/components/Product/Refinement/ProductSizeRefinement.vue'
@Component({
  components: {
    ProductColorRefinement,
    ProductCategoryRefinement,
    ProductPriceRefinement,
    ProductSizeRefinement
  }
})
export default class ProductSidebar extends Vue {}
</script>
