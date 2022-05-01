<template>
  <section class="section" id="wrapper">
    <div class="container">
      <div class="row">
        <ProductSidebar />
        <ProductContent />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ProductSidebar from '~/components/Product/ProductSidebar.vue'
import ProductContent from '~/components/Product/ProductContent.vue'

@Component({
  components: {
    ProductSidebar,
    ProductContent
  }
})
export default class Products extends Vue {}
</script>
