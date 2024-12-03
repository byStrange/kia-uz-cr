<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1  bnr-height-auto color-white" 
      :style="page_data.banner ? 
        'background-image: url('+page_data.banner+');':
        'background-image: url('+page_data.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link :to="localePath('/buy/special')">{{ $t('menu[6]') }}</nuxt-link></li>
            <li><nuxt-link :to="localePath('/buy/crediting')">{{ $t('menu[16]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.title}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="content-wrapper">
          <div class="entry-header">
            <h1 class="box-md-5">{{page_data.title}}</h1>
            <p>{{page_data.headText}}</p>
          </div>
          <div class="mt-12 desktop:mt-20 pb-5" v-if="page_data.start > 0 && page_data.end > 0">
            <div class="flex-adaptive align-end">
              <div class="item desktop:mr-12">
                <div class="h3 fw-6" >
                  <span v-if="new Date(page_data.start).getFullYear() != new Date(page_data.end).getFullYear()">
                    {{new Date(page_data.start) | dateFormat('D MMMM YYYY')}} по {{new Date(page_data.end) | dateFormat('D MMMM YYYY')}}
                  </span>
                  <span v-else-if="new Date(page_data.start).getMonth() != new Date(page_data.end).getMonth()">
                    {{new Date(page_data.start) | dateFormat('D MMMM')}} по {{new Date(page_data.end) | dateFormat('D MMMM YYYY')}}
                  </span>
                  <span v-else>
                    {{new Date(page_data.start) | dateFormat('D')}}-{{new Date(page_data.end) | dateFormat('D MMMM YYYY')}}
                  </span>
                </div>
                <div>{{$t("date[0]")}}</div>
              </div>
              <div class="item">
                
                  <vac 
                    :startTime="page_data.start" 
                    :end-time="page_data.end">
                    <div 
                      class="h3 fw-6" 
                      slot="process"
                      slot-scope="{ timeObj }">
                        {{ `${timeObj.d} ${$t("date[2]")}, ${timeObj.h}:${timeObj.m}:${timeObj.s}` }}
                      </div>
                    <div slot="finish" class="h3 fw-6">{{$t("date[1]")}}</div>
                    <div>{{$t("date[2]")}}</div>
                  </vac>
                
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    <div class="special-info">
      <div class="container-p">
        <div class="wrapper p-v-md-50 flex-adaptive p-h-md-110 list-check justify-c-center">
          <div class="box-md-9 m-v-30 p-h-15">
            <h2 class="desktop:text-x4 desktop:mb-6">{{page_data.content[0].title}}</h2>
            <div v-html="page_data.content[0].content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { fetchPath } from '~/api/otherApi';
import Vue from 'vue';
import vueAwesomeCountdown from 'vue-awesome-countdown'
Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default

export default {
  head() {
    return {
      title: this.page_data.seo.meta_title,
      meta: [
        {
          name: "description",
          content: this.page_data.seo.meta_description
        },
        {
          name: "keywords",
          content: this.page_data.seo.meta_keywords
        }
      ],
    }
  },
  data() {
    return {

    }
  },
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    try{
      const page_data = await fetchPath($axios, {
        path: route.path,
      })
      return {
        page_data
      }
    }catch(e){
      error(e);
    }
  },
  created(){
    // this.page_data.start = this.page_data.start * 1000
    // this.page_data.end = this.page_data['end '] * 1000

    //this.page_data.end = this.page_data.end+15e9;
    //delete this.page_data['end ']
  },
  mounted(){
    this.page_data.start = this.page_data.start * 1000
    this.page_data.end = this.page_data.end * 1000
    //this.page_data.end = this.page_data.end+15e9;
    //delete this.page_data['end ']
    console.log("this")
  },

  methods: {

  }
}
</script>