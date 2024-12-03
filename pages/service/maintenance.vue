<template>
  <div class="main-body offset-header services">
    <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link :to="localePath('/service')">{{ $t('menu[36]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header box-md-5 box-lg-4">
          <h1>{{page_data.header.title}}</h1>
          <p>{{page_data.header.text}}</p>
        </div>
      </div>
    </div>
    <section>
      <div class="wa-advantages bg-color-gray-1">
        <div class="container-p pv-13 desktop:ph-13">
          <div class="entry-header text-center mb-6 desktop:mb-12 ">
            <div class="text-x4 fw-7">{{page_data.blocks.title}}</div>
          </div>
          <div class="wa-advantages-items boxes-4">
            <div class="cell desktop:mv-6" v-for="(item, key) in page_data.blocks.items" :key="key">
              <div class="flex desktop:fd-columm">
                <div class="img-content mv-2 fsh-0">
                  <img :src="item.icon" alt="" width="50px">
                </div>
                <div class="desc-content mv-4 ml-5 box-md-8 box-lg-6">
                  <div class="text-s1-b">{{item.title}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-p pv-8">
        <div class="entry-header">
          <h2>{{page_data.specials.title}}</h2>
        </div>
        <div class="short-news-items boxes-4 figure-m-v-15 mv-10 jc-center">
          <figure v-for="(item, key) in page_data.specials.items" :key="key">
            <nuxt-link :to="item.url" class="">
              <div class="fig-wrapper">
                <div class="img-content">
                  <div class="img" :style="'background-image: url('+item.image+');'"></div>
                </div>
                <div class="desc-content">
                  <h4>{{item.title}}</h4>
                  <p>{{item.description}}</p> 
                  <br>
                </div>
              </div>
            </nuxt-link>
          </figure>
        </div>
      </div>
    </section>
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