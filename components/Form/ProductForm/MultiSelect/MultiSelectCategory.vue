<template>
  <Multiselect
    v-if="list && list.length > 0"
    v-model="selected"
    label="categoryName"
    track-by="id"
    placeholder="Select the category"
    open-direction="bottom"
    :option-height="45"
    :show-labels="false"
    :options="list"
    :multiple="true"
    :searchable="true"
    :internal-search="false"
    :clear-on-select="true"
    :close-on-select="false"
    :options-limit="20"
    :max-height="300"
    :show-no-results="true"
    :hide-selected="true"
    :block-keys="['Backspace', 'Delete']"
  >
  </Multiselect>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Multiselect from 'vue-multiselect'
import { getAllCategory } from '~/apollo/queries/category.queries'
import { CategoryDTO } from '~/models/interfaces/graphql/category.dto'

@Component({
  components: {
    Multiselect
  }
})
export default class MultiSelectCategory extends Vue {
  private list: Array<CategoryDTO> = []
  private selected: Array<CategoryDTO> = []

  getData() {
    return this.$apolloProvider!.defaultClient.query({
      query: getAllCategory,
      fetchPolicy: 'no-cache'
    })
      .then(({ data }: any) => {
        this.list = data.categories
      })
      .catch((error: any) => {
        // console.log(error)
      })
  }

  created() {
    this.getData()
    console.log(this.list)
  }
}
</script>
