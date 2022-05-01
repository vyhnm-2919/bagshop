<template>
  <Multiselect
    v-if="list && list.length > 0"
    v-model="selected"
    label="text"
    track-by="id"
    placeholder="Select the size"
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
import { SizeDTO } from '~/models/interfaces/graphql/size.dto'
import { getAllSize } from '~/apollo/queries/size.queries'

@Component({
  components: {
    Multiselect
  }
})
export default class MultiSelectSize extends Vue {
  private list: Array<SizeDTO> = []
  private selected: Array<SizeDTO> = []

  getData() {
    return this.$apolloProvider!.defaultClient.query({
      query: getAllSize,
      fetchPolicy: 'no-cache'
    })
      .then(({ data }: any) => {
        this.list = data.sizes
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
