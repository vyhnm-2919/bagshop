<template>
  <form>
    <div class="flex flex-wrap items-center -mx-3 mb-6">
      <label
        class="py-3 px-4 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
        for="product-image"
        >Upload file</label
      >
      <input
        class="hidden py-3 px-4 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="product-image"
        type="file"
      />
      <div
        class="text-sm text-gray-500 dark:text-gray-300"
        id="user_avatar_help"
      >
        A profile picture is useful to confirm your are logged into your account
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <div class="flex justify-between">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-product-name"
          >
            Product name
          </label>
          <!-- <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> -->
        </div>
        <input
          class="appearance-none block w-full text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:text-gray-700"
          id="grid-product-name"
          type="text"
        />
      </div>
      <div class="w-full md:w-1/3 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-description"
        >
          Description
        </label>
        <input
          class="appearance-none block w-full text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:text-gray-700"
          id="grid-description"
          type="text"
        />
      </div>
      <div class="w-full md:w-1/3 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-price"
        >
          Price
        </label>
        <input
          class="appearance-none block w-full text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:text-gray-700"
          id="grid-price"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-color"
        >
          Category
        </label>
        <div class="relative">
          <MultiSelectCategory />
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-color"
        >
          Color
        </label>
        <div class="relative">
          <MultiSelectColor />
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-color"
        >
          Size
        </label>
        <div class="relative">
          <MultiSelectSize />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MultiSelectCategory from './MultiSelect/MultiSelectCategory.vue'
import MultiSelectColor from './MultiSelect/MultiSelectColor.vue'
import MultiSelectSize from './MultiSelect/MultiSelectSize.vue'
@Component({
  components: {
    MultiSelectColor,
    MultiSelectCategory,
    MultiSelectSize
  }
})
export default class UpdateProduct extends Vue {}
</script>
