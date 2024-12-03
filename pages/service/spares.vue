<template>
  <div class="main-body offset-header spares">
    <div class="bnr-style-1 bnr-height-auto">
      <div class="container-p">
        <div class="box-md-5">
          <div class="breadcrumb-container color-gray">
            <ol class="breadcrumb">
              <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
              <li><nuxt-link to="">{{page_data.header.title}}</nuxt-link></li>
            </ol>
          </div>
          <div class="relative">
            <div class="entry-header">
              <h1>{{page_data.header.title}}</h1>
              <div class="intext">{{page_data.header.summary}}</div>
            </div>
            <div class="mt-7 flex-adaptive">
              <div class="flex items-center mt-3 tablet:mt-0 tablet:mr-8 desktop:mr-6" v-for="(item, key) in page_data.header.subtitle" :key="key">
                <span v-html="item.icon"></span>
                <span>{{item.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="spares-nav">
      <div class="container-p">
        <div class="wrapper mv-6 desktop:pt-5">
          <div class="short-models-nav m-v-20 row-3">
            <ul class="list flex-adaptive li-m-v-15">
              <li :class="{'active': key == 0}" v-for="(item, key) in page_data.content" :key="key">
                <a :href="'#spares-tab-'+key" data-toggle="tab">
                  {{item.title}}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane fade in active" id="spares-tab-0">
        <div class="spares-categories pb-2">
          <div class="container-p">
            <div class="spares-filters">
              <div class="spares-filter" v-for="(catalog, key) in page_data.spares_catalog" :key="key">
                <span class="color-gray">{{catalog.title}}</span>
                <ul>
                  <li v-for="(name, key) in catalog.names" :key="key" :class="{'active': name == selectSpare.name}"
                    @click="changeSpare(name)">
                    <span class="icon-content"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="block"><path d="M10.5 14l4-4-4-4M14 10H7" stroke="currentColor" stroke-width="1.5"></path></svg></span> 
                    <span class="text-content">{{name}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="spares-products">
          <div class="container-p">
            <div class="wrapper">
              <div class="spares-products-info box-md-4">
                <div class="img-content">
                  <img :src="selectSpare.img" alt="">
                </div>
                <div class="title-content mv-5 text-x3 text-spacing">{{selectSpare.title}}</div>
                <ul class="list-check list-color-1">
                  <li v-for="(text, key) in selectSpare.list" :key="key">{{text}}</li>
                </ul>
              </div>
              <div class="spares-products-bg box-md-6">
                <img :src="selectSpare.bg" alt="">
              </div>
            </div>
            <div class="video-content mv-6 relative pb-8 desktop:pb-16">
              <div class="container">
                <div class="bg-video-content-2">
                  <a :href="page_data.content[0].video" data-fancybox>
                    <div class="btn-play">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                    </div>
                  </a>
                  <div class="align-center">
                    <img class="box-md-10" :src="page_data.content[0].image">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="spares-tab-1">
        <div class="spares-desc">
          <div class="container-p">
            <div class="entry-header box-md-4 mv-5">
              <div class="desktop:text-x4 mb-5 fw-6 text-x3">{{page_data.spares_pl2[0].name}}</div>
              <p>{{page_data.spares_pl2[0].title}}</p>
            </div>
          </div>
          <div class="img-content text-center mv-6 desktop:mv-10">
            <img src="https://www.kia.ru/images/landing/service/spares/tsr.png" alt="">
          </div>
          <div class="desc-content text-item lists-check list-color-1 mv-8 desktop:pb-6">
            <div class="container-p">
              <div class="box-md-4" v-html="page_data.spares_pl2[0].list"></div>
            </div>
          </div>
          <div class="video-content mv-6 relative pb-8 desktop:pb-16">
            <div class="container">
              <div class="bg-video-content-2">
                <a :href="page_data.content[1].video" data-fancybox>
                  <div class="btn-play">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                  </div>
                </a>
                <div class="align-center">
                  <img class="box-md-10" :src="page_data.content[1].image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>



<style lang="scss" scoped>
  .bnr-style-1{
    color: black;
    position: relative;
    overflow: hidden;
    background-position: 115% center;
    background-size: 65%;
    background-image: url('https://www.kia.ru/images/landing/service/spares/bg-header.jpg');
    background-repeat: no-repeat;;
    &:before{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(97.95deg,rgba(5,5,5,.08) .27%,hsla(0,0%,100%,0));
      content: "";
    }
    @media (max-width: 991px){
      background-image: none;
    }
  }
  .breadcrumb-container{
    padding-top: 20px;
  }
</style>

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
  methods:{
    changeSpare(name){
      this.page_data.spares.forEach(spare => {
        if(spare.name == name)
          this.selectSpare = spare;
        
      });
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
  created(){
    this.selectSpare = this.page_data.spares[0];
  },
  data(){
    return{
      selectSpare: {}
    }
  }
}
</script>