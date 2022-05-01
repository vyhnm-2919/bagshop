<template>
  <div class="breadcrumb-wrapper">
    <div class="container">
      <nav class="breadcrumb">
        <ol itemscope="" itemtype="http://schema.org/BreadcrumbList">
          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="http://schema.org/ListItem"
          >
            <a
              itemprop="item"
              href="https://themes12.anvanto.com/super/themes/pascal/en/"
            >
              <span itemprop="name">Home</span>
            </a>
            <meta itemprop="position" content="1" />
          </li>

          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="http://schema.org/ListItem"
          >
            <a
              itemprop="item"
              href="https://themes12.anvanto.com/super/themes/pascal/en/10-tops"
            >
              <span itemprop="name">Tops</span>
            </a>
            <meta itemprop="position" content="2" />
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Breadcrumb extends Vue {}
</script>
