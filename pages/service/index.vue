<template>
  <div class="main-body offset-header services">
    <div class="container-p">
      <div class="breadcrumb-container">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
        </ol>
      </div>
      <div class="entry-header m-v-30">
        <h1 class="text-x5">{{page_data.header.title[0]}}</h1>
        <p>{{page_data.header.title[1]}}</p>
      </div>
      <div class="services-items boxes-4 figure-m-v-15 mv-4 mb-8 desktop:mb-12">
        <div class="cell" v-for="(item, key) in page_data.features.content" :key="key">
          <nuxt-link :to="localePath(item.text[2])">
            <div class="item-wrapper">
              <div class="icon-content mb-4" v-html="item.icon"></div>
              <div class="desc-content">
                <span class="hover-aunderline mv-4 fw-6 text-s1-b">
                  <span class="this-btn mb-3">{{item.text[0]}}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="services-item__title-icon"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
                <div class="color-gray-5 mt-4">{{item.text[1]}}</div>
              </div>
            </div>
          </nuxt-link>
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