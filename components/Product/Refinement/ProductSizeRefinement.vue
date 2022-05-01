<template>
  <!-- <div class="widget mt-4 pt-2">
    <h5 class="widget-title">Sizes</h5>
    <ul class="list-unstyled mt-4 mb-0 blog-categories">
      <li v-for="(size, index) in sizes" :key="index">
        <input
          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white rounded-full"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label
          class="form-check-label flex-1 ml-3 whitespace-nowrap"
          for="flexCheckDefault"
        >
          {{ size.text }} ({{ size.products.length }})
        </label>
      </li>
    </ul>
  </div> -->
  <section class="facet clearfix">
    <div class="title" data-target="#facet_87962" data-toggle="collapse">
      <p class="h4 facet-title">Size</p>
    </div>

    <ul id="facet_87962">
      <li>
        <label class="facet-label" for="facet_input_87962_0">
          <span class="custom-checkbox">
            <input
              id="facet_input_87962_0"
              data-search-url="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Size-S"
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
            href="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Size-S"
            class="_gray-darker search-link js-search-link"
            rel="nofollow"
          >
            S
            <span class="magnitude">(3)</span>
          </a>
        </label>
      </li>

      <li>
        <label class="facet-label" for="facet_input_87962_1">
          <span class="custom-checkbox">
            <input
              id="facet_input_87962_1"
              data-search-url="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Size-M"
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
            href="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Size-M"
            class="_gray-darker search-link js-search-link"
            rel="nofollow"
          >
            M
            <span class="magnitude">(1)</span>
          </a>
        </label>
      </li>

      <li>
        <label class="facet-label" for="facet_input_87962_2">
          <span class="custom-checkbox">
            <input
              id="facet_input_87962_2"
              data-search-url="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Size-L"
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
            href="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Size-L"
            class="_gray-darker search-link js-search-link"
            rel="nofollow"
          >
            L
            <span class="magnitude">(4)</span>
          </a>
        </label>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { SizeDTO } from '~/models/interfaces/graphql/size.dto'
import { getAllSize } from '@/apollo/queries/size.queries'

@Component
export default class ProductSizeRefinement extends Vue {
  private sizes: Array<SizeDTO> = []

  loadSize() {
    return this.$apolloProvider!.defaultClient.query({
      query: getAllSize,
      fetchPolicy: 'no-cache'
    })
      .then(({ data }: any) => {
        this.sizes = data.sizes
      })
      .catch((error: any) => {
        // console.log(error)
      })
  }

  created() {
    this.loadSize()
  }
}
</script>
