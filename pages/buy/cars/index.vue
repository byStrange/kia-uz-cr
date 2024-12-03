<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
        </ol>
      </div>
    </div>

    <div class="models">
      <div class="container-p">
        <div class="entry-header desktop:mb-12">
          <h1 class="text-x5">{{page_data.header.title}}</h1>
          <p><big>{{page_data.header.subtitle}}</big></p>
        </div>
        <div class="entry-content">
          <div class="models-items boxes-4 figure-m-v-30 desktop:mb-12">
            <figure v-for="(model, key) in page_data.models" :key="key">
              <div class="img-content">
                <nuxt-link :to="localePath(model.url)">
                  <img :src="model.image">
                </nuxt-link>
              </div>
              <div class="desc-content">
                <div class="car-card__name">
                  <nuxt-link exact :to="localePath(model.url)">{{model.name}}</nuxt-link>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { fetchPath } from '~/api/otherApi';

export default {
  head() {
    return {
      title: this.page_data.seo.title,
      meta: [
        {
          name: "description",
          content: this.page_data.seo.description
        },
        {
          name: "keywords",
          content: this.page_data.seo.keywords
        }
      ],
    }
  },
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    try{
      const page_data = await fetchPath($axios, {
        path: route.path
      });
      return {
        page_data
      }
    }catch(e){
      error(e);
    }
  },
}
</script>