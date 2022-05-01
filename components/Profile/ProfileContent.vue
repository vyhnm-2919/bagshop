<template>
  <div class="col-md-8 col-12 mt-4 pt-2">
    <div class="tab-content" id="pills-tabContent">
      <Orders />
      <AccountDetail />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AccountDetail from './ProfileContent/AccountDetail.vue'
import Orders from './ProfileContent/Orders.vue'

@Component({
  components: {
    Orders,
    AccountDetail
  }
})
export default class ProfileContent extends Vue {}
</script>
