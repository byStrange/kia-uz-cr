<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.header.title}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <h1 class="box-md-5">{{page_data.header.title}}</h1>
        </div>
      </div>
    </div>
    <div class="special-info">
      <div class="container-p">
        <div class="warranty-block wrapper p-v-md-50 p-h-md-110 list-check">
          <div class="box-lg-8 m-auto m-v-30 p-h-15">
            <div class="text-item mv-10" >
              <div class="entry-header">
                <div class="text-n1 color-1 mb-2">{{page_data.content[0].alias}}</div>
                <div class="fw-6 text-x5 mb-4 desktop:mb-6">{{page_data.content[0].title}}</div>
              </div>
              <div class="text-s2i" v-html="page_data.content[0].content[0].text"></div>
              <div class="img-first mv-15">
                <div class="mb-6 flex-adaptive align-center" >
                  <div class="img">
                    <img src="/img/rebrand/warranty-5.png" alt="">
                  </div> 
                  <div class="text-x3 mt-4 desktop:ml-10 fw-7" v-html="page_data.content[0].content[1].right"></div>
                </div>
              </div>
              <div class="text-s2i" v-html="page_data.content[0].content[2].text"></div>
            </div>
            <hr>
            <div class="text-item mv-10 hide">
              <div class="entry-header">
                <div class="fw-6 text-x4 mb-4 desktop:mb-6">{{page_data.content[1].title}}</div>
              </div>
              <div class="text-s2i" v-html="page_data.content[1].content[0].text"></div>
              <div class="img-first mv-10">
                <div class="mb-6 flex-adaptive align-center">
                  <div class="img">
                    <img src="/img/rebrand/warranty-7.png" alt="">
                  </div>
                  <div class="text-x3 mt-4 desktop:ml-20 desktop:pl-10 fw-7" v-html="page_data.content[1].content[1].right"></div>
                </div>
              </div>
              <div class="text-s2i" v-html="page_data.content[1].content[2].text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wa-advantages bg-color-gray-1">
      <div class="container-p pv-13">
        <div class="entry-header text-center mb-10">
          <div class="text-x5 fw-7">{{page_data.features.title}}</div>
        </div>
        <div class="wa-advantages-items boxes-3">
          <div class="cell desktop:mv-6" v-for="(cell, key) in page_data.features.content" :key="key">
            <div class="flex desktop:fd-columm">
              <div class="img-content mv-4" v-html="cell.icon"></div>
              <div class="desc-content mv-4 ml-5 box-md-8 box-lg-6">
                <div class="text-s2i" v-html="cell.text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-p">
      <div class="wrapper p-v-md-50 p-h-md-110">
        <div class="box-lg-8 m-auto m-v-30 p-h-15">
          <div class="acc-def mv-3 text-item">
            <div class="acc-item" v-for="(item, key) in page_data.accordion" :key="key">
              <a href=".acc-item" class="title-click" tc tc-closest>{{item.title}}<i class="fa fa-angle-up"></i></a>
              <div class="acc-body">
                <div class="acc-body-wrapper" v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-content relative mv-15">
        <div class="bg-video-content-2 text-center">
          <a :href="page_data.video.url" data-fancybox="">
            <div class="btn-play">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
            </div>
          </a>
          <div class="img-content">
            <img :src="page_data.video.image" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container-p">
      <div class="entry-header">
        <div class="text-x4 fw-7">{{page_data.interesting.title}}</div>
      </div>
      <div class="services-items boxes-4 serried figure-m-v-15 mv-4 pb-8 desktop:mb-12">
        <div class="cell" v-for="(item, key) in page_data.interesting.items" :key="key">
          <nuxt-link :to="localePath(item.url)">
            <div class="item-wrapper align-center desktop:jc-center">
              <div class="icon-content"><img :src="item.image" alt=""></div>
              <div class="desc-content ml-2">
                <span class="mv-4 fw-6 text-s1 align-center">
                  <span class="this-btn">{{item.name}}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="cell hide">
          <nuxt-link :to="localePath('/buy/accessories/')">
            <div class="item-wrapper align-center desktop:jc-center">
              <div class="icon-content">
                <svg  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path  d="M31.801 4.49c1.75-.364 3.53-.451 5.156-.525l-6.745 6.744-.292.293v.414c0 .245.006 1.075.405 2.283.187.653.426 1.37.72 2.03.29.652.665 1.325 1.155 1.815s1.162.865 1.814 1.155c.667.296 1.393.537 2.051.725l.055.016.055.009c.525.087.963.175 1.301.243l.009.001c.162.033.311.063.431.084.093.017.261.047.411.047h.414l.293-.293 6.935-6.935-.002.057c-.076 1.729-.157 3.57-.534 5.38-.427 2.05-1.22 3.97-2.754 5.504-1.992 1.992-4.114 2.799-6.235 2.962h-.007c-2.008.168-4.051-.165-5.977-.69l-.573-.157-.411.429-17.518 18.24c-.293.29-.664.41-1.188.582l-.221.073c-.117.039-.456.027-.784-.3L5.25 40.159l-.07-.07-.083-.055c-.075-.05-.243-.267-.126-.732l.03-.12v-.123c0-.328.138-.626.603-1.092l18.24-17.518.429-.412-.157-.573c-.522-1.914-.854-3.945-.693-5.942.334-2.128 1.322-4.29 3.006-6.319 1.432-1.5 3.327-2.286 5.373-2.712zm6.075-.558l-.006-.002.006.002z" stroke="currentColor" stroke-width="2"></path></svg>
              </div>
              <div class="desc-content ml-2">
                <span class="mv-4 fw-6 text-s1 align-center">
                  <span class="this-btn">Аксессуары</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
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
      title: this.page_data.seo.title ? this.page_data.seo.title : "Гарантия на автомобили Kia",
      meta: [
        {
          content: this.page_data.seo.description ? this.page_data.seo.description : "Гарантия на автомобили Kia",
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

<style lang="scss" scoped>
  .warranty-block{
    .img-first{
      .img{
        flex-shrink: 0;
        img{
          @media (min-width: 991px){
            width: 400px;
          }
        }
      }
    }
  }
  .services-items{
    @media (min-width: 992px){
      .cell{
        border-right: 1px solid white;
        &:nth-last-child(1){
          border-right: none;
        }
      }
    }
  }
</style>