<template>
  <div class="main-body offset-header" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white" :style="'background-image: url('+page_data.header.image+');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('/about')">{{ $t('menu[23]') }}</nuxt-link></li>
              <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header" v-html="page_data.header.text"></div>
        </div>
      </div>
    </div>

    <div class="concept bg-black-fill">
      <div class="g-padding p-t-md-100 p-b-md-20">
        <div class="g-container">
          <div class="concept-items">
            <figure v-for="(block, key) in page_data.blocks" :key="key">
              <div class="desc-content">
                <h5>{{block.onText}}</h5>
                <h2 class="text-x5">{{block.name}}</h2>
                <div v-html="block.text"></div>
                <div class="align-center font-w-6 m-t-20">
                  <a href="" class="hover-aunderline"><b>{{$t('btns.type_1')}}</b></a>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </div>
              </div>
              <div class="img-content">
                <img :src="block.image">
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
          content: this.page_data.seo.description
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