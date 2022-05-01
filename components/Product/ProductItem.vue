<template>
  <ProductGridItem v-if="isGrid" :product="product" />
  <ProductListItem v-else :product="product" />
</template>

<script lang="ts">
import { Vue, Component, Prop, State } from 'nuxt-property-decorator'
import ProductGridItem from './ProductItem/ProductGridItem.vue'
import ProductListItem from './ProductItem/ProductListItem.vue'
@Component({
  components: {
    ProductGridItem,
    ProductListItem
  }
})
export default class ProductItem extends Vue {
  @Prop() readonly product!: any
  @State(state => state.products.isGrid) readonly isGrid!: Boolean



}
</script>
