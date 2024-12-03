<template>
  <div class="main-body offset-header specials">
    <div class="bnr-area">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{ $t('menu[6]') }}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p">
        <div class="entry-content">
          <h1 class="desktop:text-x3">{{$t('buy.special[0]')}}</h1>
        </div>
      </div>
    </div>
    <div class="container-p">
      <div class="short-news-items boxes-4 figure-m-v-15 p-b-30 m-v-30">
        <figure v-for="(offer, key) in page_data.news" :key="key" v-if="!offer.is_buy && !offer.is_service">
          <nuxt-link :to="localePath(offer.url)">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url(\''+offer.image+'\');'"></div>
              </div>
              <div class="desc-content">
                <h4>{{offer.title}}</h4>
                <span v-html="offer.text"></span>
                <br>
              </div>
            </div>
          </nuxt-link>
        </figure>
        <figure v-for="(offer, key) in page_data.news" :key="key" v-if="offer.is_buy">
          <nuxt-link :to="localePath(offer.url)">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url(\''+offer.image+'\');'"></div>
              </div>
              <div class="desc-content">
                <h4>{{offer.title}}</h4>
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
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    try{
      const page_data = await fetchPath($axios, {
        path: route.path
      })
      return {
        page_data
      }
    }catch(e){
      error(e);
    }
  },
}
</script>