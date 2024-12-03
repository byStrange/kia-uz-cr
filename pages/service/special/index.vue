<template>
  <div class="main-body offset-header model-special">
    <div class="container-p">
      <div class="breadcrumb-container">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link to="">{{$t("buy.special[1]")}}</nuxt-link></li>
        </ol>
      </div>
      <div class="entry-header m-v-30">
        <div class="flex-adaptive justify-c-between">
          <h1 class="text-x5">{{$t("buy.special[1]")}}</h1>
        </div>
      </div>
      <!-- <div class="m-t-30 m-b-15">
        {{page_data.news.length}} спецпредложения
      </div> -->
      <div class="short-news-items boxes-4 figure-m-v-15 p-b-30 m-v-30">
        <figure v-for="(offer, key) in page_data.news" :key="key" v-if="offer.is_service">
          <nuxt-link :to="localePath('/buy/special/'+offer.id)">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url(\''+offer.image+'\');'"></div>
              </div>
              <div class="desc-content">
                <h4>{{offer.name}}</h4>
                <span v-html="offer.text"></span>
                <br>
              </div>
            </div>
          </nuxt-link>
        </figure>
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
  mounted(){
    
  },
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    try{
      // console.log(store.state.lang)
      // console.log(prefix_url)
      const page_data = await fetchPath($axios, {
        path: "/buy/special"
      })
      console.log(page_data)
      return {
        page_data,
      }
    }catch(e){
      error(e);
    }
  },
}
</script>