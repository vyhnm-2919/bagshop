<template>
  <div>
  <Banner />
    <HeroStart />
    <FeaturedStart />
    <Preview />
    <SectionStart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Banner from '~/components/Homepage/Banner.vue'
import FeaturedStart from '~/components/Homepage/FeaturesStart.vue'
import HeroStart from '~/components/Homepage/HeroStart.vue'
import Preview from '~/components/Homepage/Preview.vue'
import SectionStart from '~/components/Homepage/SectionStart.vue'
@Component({
  components: {
    HeroStart,
    FeaturedStart,
    SectionStart,
    Banner, Preview
  }
})
export default class Home extends Vue {}
</script>

<style>
.btn-custom-green {
  color: #fff;
  background: #6bb071;
  border-color: #476f4d;
  font-weight: bold;
  letter-spacing: 0.05em;
  border-radius: 0;
}

.btn-custom-green:hover,
.btn-custom-green:active,
.btn-custom-green:focus,
.btn-custom-green.active {
  background: #6bb071;
  color: #fff;
  border-color: #476f4d;
}
</style>
