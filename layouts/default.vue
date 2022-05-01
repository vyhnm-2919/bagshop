<template>
  <div id="layout-container">
    <default-header />
    <Breadcrumb />
    <Nuxt />
    <v-modal v-slot="payload" name="test">
      <button
        @click.prevent="closeModal({ name: 'test' })"
        class="btn bg-transparent position-absolute top-0 right-0 bg-white text-dark font-weight-bold"
      >
        x
      </button>
      <div class="bg-light p-5">
        <h5>
          {{ payload && payload.id ? 'Edit todo' : 'Add todo' }}
        </h5>
        <TodoForm :todo="payload.payload" class="p-4" @submit="onSubmit" />
      </div>
    </v-modal>
    <v-modal name="delete" v-slot="id">
      <button
        @click.prevent="closeModal({ name: 'delete' })"
        class="btn bg-transparent position-absolute top-0 right-0 bg-white text-dark font-weight-bold"
      >
        x
      </button>
      <div class="bg-light p-5">
        <h5>Do you want to delete this todo? This action can't be undo.</h5>
        <button class="btn btn-danger" @click.prevent="deleteTodoItem(id)">
          Delete
        </button>
      </div>
    </v-modal>

    <default-footer />
    <a href="#" class="btn btn-icon btn-primary back-to-top"><i data-feather="arrow-up" class="icons"></i></a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DefaultHeader from '@/components/Header/DefaultHeader.vue'
import DefaultFooter from '@/components/Footer/DefaultFooter.vue'
import Breadcrumb from '~/components/Homepage/Breadcrumb.vue'

@Component({
  components: { DefaultHeader, DefaultFooter, Breadcrumb }
})
export default class Default extends Vue {}
</script>
