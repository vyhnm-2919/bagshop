<template>
  <div class="col-12 mt-4 pt-2">
    <ul class="pagination justify-content-center mb-0">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" aria-label="Previous"
          ><i class="mdi mdi-arrow-left"></i> Prev</a
        >
      </li>
      <li class="page-item active">
        <a class="page-link" href="javascript:void(0)">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" aria-label="Next"
          >Next <i class="mdi mdi-arrow-right"></i
        ></a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class ProductPagination extends Vue {}
</script>
