<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{ $t('menu[16]') }}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <div class="box-md-5 text-x5 fw-7">{{page_data.header.title}}</div>
          <div class="text-s1">{{page_data.header.text}}</div>
        </div>
      </div>
    </div>
    <div class="block-first">
      <div class="container-p">
        <div class="wrapper p-v-md-50 p-h-md-110">
          <div class="box-lg-8 m-auto m-v-30 p-h-15">
            <div class="entry-header" v-for="(item, key) in page_data.content" :key="key">
              <div class="text-x5 mb-5 fw-7">{{item.name}}</div>
              <div class="text-x1" v-html="item.text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wa-advantages bg-color-gray-1">
      <div class="container-p pv-5 desktop:pv-13">
        <div class="entry-header text-center mb-10">          
          <div class="text-x5 fw-7">{{page_data.blocks.title}}</div>
        </div>
        <div class="wa-advantages-items boxes-4">
          <div class="cell desktop:mv-6" v-for="(item, key) in page_data.blocks.items" :key="key">
            <div class="flex desktop:fd-columm">
              <div class="img-content mt-4 desktop:mr-2 fsh-0">
                <img :src="item.icon" width="50px">
              </div>
              <div class="desc-content mv-4 mobile:ml-5 box-md-8 box-lg-8">
                <div class="text-x1 mb-3"><b>{{item.title}}</b></div>
                <div class="text-s2i color-gray-5" v-html="item.text"></div>
              </div>
            </div>
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
