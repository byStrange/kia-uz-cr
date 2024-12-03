<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <div class="box-md-5 text-x5 fw-7">{{page_data.header.title}}</div>
          <div class="text-s1">{{page_data.header.subtitle}}</div>
        </div>
      </div>
    </div>
    <div class="block-first">
      <div class="container-p">
        <div class="wrapper p-v-md-50 p-h-md-110">
          <div class="box-lg-8 m-auto m-v-30 p-h-15">
            <div class="entry-header">
              <div class="text-x5 mb-5 fw-7">{{page_data.content.name}}</div>
              <div class="text-x1" v-html="page_data.content.summary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wa-advantages bg-color-gray-1">
      <div class="container-p pv-5 desktop:pv-13">
        <div class="entry-header text-center mb-10">
          <div class="text-n1 color-1 mb-2">{{page_data.features.alias}}</div>
          <div class="text-x5 fw-7">{{page_data.features.title}}</div>
        </div>
        <div class="wa-advantages-items boxes-4">
          <div class="cell desktop:mv-6" v-for="(cell, key) in page_data.features.content" :key="key">
            <div class="flex desktop:fd-columm">
              <div class="img-content mt-4" v-html="cell.icon"></div>
              <div class="desc-content mv-4 mobile:ml-5 ml-3 box-md-8 box-lg-8">
                <div class="text-x1 mb-3"><b>{{cell.text[0]}}</b></div>
                <div class="text-s2i color-gray-5">{{cell.text[1]}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="container-p pv-5 desktop:pv-13">
        <div class="entry-header text-center mb-10">
          <div class="text-n1 color-1 mb-2">{{page_data.loan.alias}}</div>
          <div class="text-x5 fw-7">{{page_data.loan.title}}</div>
        </div>
        <div class="items boxes-4">
          <div class="cell mv-5" v-for="(cell, key) in page_data.loan.content" :key="key">
            <div class="wrapper">
              <div class="img-content text-center" v-html="cell.icon"></div>
              <hr>
              <div class="desc-content flex flex-start">
                <div class="num color-1 fw-7">0{{key+1}}</div>
                <div class="text-content pl-6 text-s2i">{{cell.text}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <hr>
         <div class="btn-content text-center mt-5"> 
          <span class="btn-def">
            <nuxt-link :to="localePath('/buy/calc')">{{$t("btns.credit_calc")}}</nuxt-link>
          </span>
        </div> -->
      </div>
    </div>

    <div class="credits-partners">
      <div class="container-p pv-5 desktop:pb-13">
        <div class="entry-header mb-5">
          <div class="text-x5 fw-7">{{$t("buy.order_credit[0]")}}</div>
        </div>
        <div class="credits-partners-items figure-m-v-15">
          <div class="cell align-center jc-center" v-for="(cell, key) in page_data.banks.images" :key="key">
			      <a :href="cell.text" target="_blank" class="img-content">
              <img :src="cell.image">
			      </a>
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
          content: this.page_data.seo.description,
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
