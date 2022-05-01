<template>
  <!-- <div class="col-lg-9 col-md-8 col-12 mt-5 pt-2 mt-sm-0 pt-sm-0">
    <div class="row align-items-center">
      <div class="col-lg-8 col-md-7">
        <div class="section-title">
          <h5 class="mb-0">Showing 1-15 of 47 results</h5>
        </div>
      </div>
      <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="d-flex justify-content-md-between align-items-center">
          <div class="form custom-form">
            <div class="form-group mb-0">
              <select class="form-control custom-select" id="Sortbylist-job">
                <option>Sort by latest</option>
                <option>Sort by popularity</option>
                <option>Sort by rating</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </div>

          <div class="mx-2" @click="handleChangePerformToGrid">
            <div :class="`h5 text-${!isGrid ? 'muted' : 'blue'}`">
              <i class="uil uil-apps"></i>
            </div>
          </div>

          <div @click="handleChangePerformToList">
            <div :class="`h5 text-${isGrid ? 'muted' : 'blue'}`">
              <i class="uil uil-list-ul"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProductList />
    <ProductPagination />
  </div> -->

  <div id="content-wrapper" class="left-column col-xs-12 col-md-8 col-lg-9">
    <section id="main">
      <section id="products">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="active_filters mb-0">
            <p class="h6 active-filter-title">Active filters</p>

            <ul>
              <li class="filter-block">
                Price: €31.00 - €84.00
                <a
                  class="js-search-link"
                  href="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses"
                  ><i class="material-icons close"></i></a
                >
              </li>
            </ul>
          </div>
          <div id="js-product-list-top" class="row products-selection">
            <div class="col-md-6 collection-view">
              <div
                :class="`collection-view-btn ${isGrid && 'active'}`"
                data-xl="4"
                @click="handleChangePerformToGrid"
              >
                <div class="view-type view-type-2"></div>
              </div>
              <div
                :class="`collection-view-btn ${!isGrid && 'active'}`"
                data-xl="12"
                @click="handleChangePerformToList"
              >
                <div class="view-type view-type-4"></div>
              </div>
            </div>
          </div>
        </div>
        <ProductList />
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Action } from 'nuxt-property-decorator'
import ProductList from './ProductList.vue'
@Component({
  components: {
    ProductList
  }
})
export default class ProductSidebar extends Vue {
  isGrid: Boolean = false

  @Action('products/setPerformanceOfProduct') setPerformanceOfProduct!: Function

  handleChangePerformToList() {
    if (this.isGrid) {
      this.isGrid = false
      this.setPerformanceOfProduct(this.isGrid)
    }
  }

  handleChangePerformToGrid() {
    if (!this.isGrid) {
      this.isGrid = true
      this.setPerformanceOfProduct(this.isGrid)
    }
  }

  @Watch('isGrid')
  followIsGrid() {
    console.log('isGrid in product content: ', this.isGrid)
  }
}
</script>
