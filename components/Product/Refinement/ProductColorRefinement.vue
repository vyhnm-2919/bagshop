<template>
  <!-- <div class="widget mt-4 pt-2">
    <h5 class="widget-title">Color</h5>
    <ul class="list-unstyled mt-4 mb-0">
      <li
        class="list-inline-item"
        v-for="(colorItem, index) in colorList"
        :key="index"
      >
        <a
          href="javascript:void(0)"
          :class="[
            'btn btn-sm btn-icon btn-pills',
            colorItem.value ? `bg-${colorItem.value}` : ''
          ]"
          ><span class="d-none">.</span></a
        >
      </li>
    </ul>
  </div> -->
  <section class="facet clearfix">
            <div
              class="title"
              data-target="#facet_40740"
              data-toggle="collapse"
            >
              <p class="h4 facet-title">Color</p>
            </div>

            <ul id="facet_40740">
              <li>
                <label class="facet-label" for="facet_input_40740_0">
                  <span class="custom-checkbox">
                    <input
                      id="facet_input_40740_0"
                      data-search-url="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Color-Blue"
                      type="checkbox"
                    />
                    <span
                      class="color"
                      style="background-color: #5d9cec"
                    ></span>
                  </span>

                  <a
                    href="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Color-Blue"
                    class="_gray-darker search-link js-search-link"
                    rel="nofollow"
                  >
                    Blue
                    <span class="magnitude">(4)</span>
                  </a>
                </label>
              </li>

              <li>
                <label class="facet-label" for="facet_input_40740_1">
                  <span class="custom-checkbox">
                    <input
                      id="facet_input_40740_1"
                      data-search-url="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Color-Green"
                      type="checkbox"
                    />
                    <span
                      class="color"
                      style="background-color: #a0d468"
                    ></span>
                  </span>

                  <a
                    href="https://themes12.anvanto.com/super/themes/pascal/en/18-blouses?q=Color-Green"
                    class="_gray-darker search-link js-search-link"
                    rel="nofollow"
                  >
                    Green
                    <span class="magnitude">(4)</span>
                  </a>
                </label>
              </li>
            </ul>
          </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { ColorDTO } from '~/models/interfaces/graphql/color.dto'
import { getAllColor } from '@/apollo/queries/color.queries'

@Component
export default class ProductColorRefinement extends Vue {
  private colorList: Array<ColorDTO> = []

  getData() {
    return this.$apolloProvider!.defaultClient.query({
      query: getAllColor,
      fetchPolicy: 'no-cache'
    })
      .then(({ data }: any) => {
        this.colorList = data.colors
      })
      .catch((error: any) => {
        // console.log(error)
      })
  }

  created() {
    this.getData()
  }
}
</script>
