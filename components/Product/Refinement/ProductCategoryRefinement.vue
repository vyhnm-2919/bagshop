<template>
  <!-- <div class="widget mt-4 pt-2">
    <h5 class="widget-title">Categories</h5>
    <ul class="list-unstyled mt-4 mb-0 blog-categories">
      <li v-for="category in categories" v-bind:key="category.id">
        <a href="jvascript:void(0)">{{ category.categoryName }}</a>
      </li>
    </ul>
  </div> -->
  <section class="facet clearfix">
            <div
              class="title"
              data-target="#facet_21770"
              data-toggle="collapse"
            >
              <p class="h4 facet-title">Category</p>
            </div>

            <ul id="facet_21770">
              <li>
                <label class="facet-label" for="facet_input_21770_0">
                  <span class="custom-checkbox">
                    <input
                      id="facet_input_21770_0"
                      data-search-url="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Composition-Polyester"
                      type="checkbox"
                    />
                    <span class="ps-shown-by-js"
                      ><i class="material-icons rtl-no-flip checkbox-checked">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="13px"
                          height="10px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(18, 35, 68)"
                            d="M12.073,1.465 L4.633,9.072 C4.568,9.139 4.462,9.139 4.396,9.072 L0.172,4.753 C0.107,4.686 0.107,4.577 0.172,4.510 L1.198,3.461 C1.264,3.394 1.370,3.394 1.435,3.461 L4.515,6.610 L10.810,0.173 C10.875,0.107 10.981,0.107 11.046,0.173 L12.073,1.223 C12.138,1.290 12.138,1.398 12.073,1.465 Z"
                          ></path>
                        </svg> </i
                    ></span>
                  </span>

                  <a
                    href="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Composition-Polyester"
                    class="_gray-darker search-link js-search-link"
                    rel="nofollow"
                  >
                    Polyester
                    <span class="magnitude">(1)</span>
                  </a>
                </label>
              </li>
            </ul>
          </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { CategoryDTO } from '~/models/interfaces/graphql/category.dto'
import { getAllCategory } from '~/apollo/queries/category.queries'

@Component
export default class ProductCategoryRefinement extends Vue {
  private categories: Array<CategoryDTO> = []

  getData() {
    return this.$apolloProvider!.defaultClient.query({
      query: getAllCategory,
      fetchPolicy: 'no-cache'
    })
      .then(({ data }: any) => {
        console.log(data)
        this.categories = data.categories
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  created() {
    this.getData()
  }
}
</script>
