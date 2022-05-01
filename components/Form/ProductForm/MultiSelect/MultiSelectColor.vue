<template>
  <Multiselect
    v-if="list && list.length > 0"
    v-model="selected"
    label="name"
    track-by="id"
    placeholder="Select the color"
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
import { getAllColor } from '~/apollo/queries/color.queries'
import { ColorDTO } from '~/models/interfaces/graphql/color.dto'
import Multiselect from 'vue-multiselect'

@Component({
  components: {
    Multiselect
  }
})
export default class MultiSelectColor extends Vue {
  private list: Array<ColorDTO> = []
  private selected: Array<ColorDTO> = []

  getData() {
    return this.$apolloProvider!.defaultClient.query({
      query: getAllColor,
      fetchPolicy: 'no-cache'
    })
      .then(({ data }: any) => {
        this.list = data.colors
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
