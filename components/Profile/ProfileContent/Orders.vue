<template>
  <div
    class="tab-pane fade bg-white shadow rounded p-4"
    id="orders"
    role="tabpanel"
    aria-labelledby="order-history"
  >
    <div class="table-responsive bg-white shadow rounded">
      <table class="table mb-0 table-center table-nowrap">
        <thead>
          <tr>
            <th scope="col">Order no.</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">7107</th>
            <td>1st November 2020</td>
            <td class="text-success">Delivered</td>
            <td>$ 320 <span class="text-muted">for 2items</span></td>
            <td>
              <a href="javascript:void(0)" class="text-primary"
                >View <i class="uil uil-arrow-right"></i
              ></a>
            </td>
          </tr>

          <tr>
            <th scope="row">8007</th>
            <td>4th November 2020</td>
            <td class="text-muted">Processing</td>
            <td>$ 800 <span class="text-muted">for 1item</span></td>
            <td>
              <a href="javascript:void(0)" class="text-primary"
                >View <i class="uil uil-arrow-right"></i
              ></a>
            </td>
          </tr>

          <tr>
            <th scope="row">8008</th>
            <td>4th November 2020</td>
            <td class="text-danger">Canceled</td>
            <td>$ 800 <span class="text-muted">for 1item</span></td>
            <td>
              <a href="javascript:void(0)" class="text-primary"
                >View <i class="uil uil-arrow-right"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Orders extends Vue {}
</script>
