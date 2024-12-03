<template>
  <div class="main-body brand offset-model-header">
    
    <div class="model-header header-scroll scrolled-down down">
      <div class="container-r">
        <div class="model-header-panel flex jc-center">
          <div class="brand-menu text-uppercase text-center">
            <ul class="list flex jc-center">
              <li class="ph-5"><a href="#block-4" scroll-link>{{page_data.manifest.name}}</a></li>
              <li class="ph-5"><a href="#block-1" scroll-link>{{page_data.logo.name}}</a></li>
              <li class="ph-5"><a href="#block-3" scroll-link>{{page_data.philosophy.name}}</a></li>
              <li class="ph-5"><a href="#block-5" scroll-link>{{page_data.inspiration.name}}</a></li>
              <li class="ph-5"><a href="#block-7" scroll-link>{{page_data.merit.name}}</a></li>
              <li class="ph-5"><a href="#block-8" scroll-link>{{page_data.aim.name}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="brand-bnr color-white">
      <div class="brand-bnr-video">
        <!-- <div class="bg-shadow"></div> -->
        <div class="video-content bg-video-content cover">
          <video :src="page_data.header.video" :poster="page_data.header.poster" muted="muted" media="(max-width: 770px)" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        </div>
        <div class="desc-content trans-center">
          <div class="btn-content">
            <a href="https://www.youtube.com/watch?v=mvelzwi20xg&t=10s" data-fancybox="">
              <div class="btn-play relative m-auto">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
              </div>
            </a>
          </div>
          <div class="text-content text-center" v-if="false">
            <h1>{{page_data.header.title}}</h1>
            <p class="text-x1">{{page_data.header.subtitle}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="block-4 bg-color-1 color-white" id="block-4">
      <div class="wrapper">
        <div class="container-r desktop:pv-13">
          <div class="desc-content mv-10">
            <div class="box-md-8 box-lg-6 entry-header">
              <div class="color-gray-4 text-uppercase mb-2">{{page_data.manifest.name}}</div>
              <div class="text-x4">{{page_data.manifest.title}}</div>
            </div>
            <div class="text-s2 ctext-2 mv-4 desktop:mv-8" v-html="page_data.manifest.text"></div>
          </div>
        </div>
        <div class="img-fulled">
          <img :src="page_data.manifest.image" alt="">
          <div class="img" style="background-image: url('/img/brand/2.jpg');"></div>
        </div>
      </div>
    </div>
    <div class="brand-logo bg-color-1 color-white" id="block-1">
      <div class="container pv-5 desktop:pv-13">
        <div class="img-content mv-12 text-center-md mobile:ph-6">
          <img :src="page_data.logo.poster" alt="" class="box-xs-10">
        </div>
        <div class="entry-content">
          <div class="desc-content mv-5 desktop:mt-18">
            <div class="flex-adaptive">
              <div class="title-content fb-md-6 mv-2 desktop:pr-13">
                <div class="text-x4">{{page_data.logo.title}}</div>
              </div>
              <div class="text-x1 text-content fb-md-6 mv-2" v-html="page_data.logo.subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-2 bg-color-1 color-white">
      <div class="container-r pv-1">
        <div class="video-content relative">
          <div class="bg-video-content-2">
            <a :href="page_data.evolution.video" data-fancybox="">
              <div class="btn-play">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
              </div>
            </a>
            <img :src="page_data.evolution.poster" alt="">
          </div>
        </div>
        <div class="desc-content mv-10 desktop:mv-16">
          <div class="text-s2 ctext-2 mv-4 desktop:mv-8" v-html="page_data.evolution.text"></div>
        </div>
      </div>
      <div class="img-fulled">
        <img :src="page_data.philosophy.image" alt="">
      </div>
    </div>

    <div class="block-3 bg-color-1 color-white over-hidden pt-10 desktop:pt-15 mb-10 desktop:mb-15" id="block-3">
      <div class="wrapper">
        <div class="container-r">
          <div class="desc-content">
            <div class="box-md-8 box-lg-6 entry-header">
              <div class="color-gray-4 text-uppercase mb-2">{{page_data.philosophy.name}}</div>
              <div class="text-x4">{{page_data.philosophy.title}}</div>
            </div>
            <div class="text-content">
              <div class="text-s2 ctext-2 mv-4 desktop:mv-8" v-html="page_data.philosophy.text"></div>
            </div>
          </div>
          <div class="img-fulled half-white mt-3 desktop:mt-12">
            <img :src="page_data.inspiration.image" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="block-5" id="block-5">
      <div class="wrapper">
        <div class="container-r pv-10 desktop:pv-13">
          <div class="box-md-8 box-lg-6">
            <div class="entry-header">
              <div class="color-gray-4 text-uppercase mb-2">{{page_data.inspiration.name}}</div>
              <div class="text-x4">{{page_data.inspiration.title}}</div>
            </div>
            <div class="text-s2 mv-4 desktop:mv-8" v-html="page_data.inspiration.text"></div>
          </div>
        </div>
        <div class="swiper">
          <div class="wrapper-block">
            <div class="swiper-items owl-carousel">
              <div class="item" v-for="(item, key) in page_data.movement.images" :key="key">
                <div class="img-content">
                  <div class="img" :style="'background-image: url('+item.image+');'"></div>
                  <div class="video-content">
                    <video :src="item.url" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
                  </div>
                </div>
                <div class="desc-content">
                  <div class="text-x3 mb-2 fw-6">{{item.description[0]}}</div>
                  <div class="text-s2">{{item.description[1]}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-r pv-8 desktop:pv-18">
          <div class="box-md-12 box-lg-8 entry-header">
            <div class="text-x4">{{page_data.movement.title}}</div>
          </div>
          <div class="flex-adaptive row-3">
            <div class="fb-md-6 ph-3 mv-6">
              <div class="text-s2" v-html="page_data.movement.subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block-6 desktop:mb-25">
      <div class="wrapper">
        <div class="img-fulled">
          <img src="/img/brand/6.jpg" alt="">
          <div class="img" :style="'background-image: url('+page_data.history.image+');'"></div>
        </div>
        <div class="desc-content mobile:mv-8">
          <div class="container-r">
            <div class="text-item text-x1" v-html="page_data.history.text"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="block-7 color-white" id="block-7">
      <div class="wrapper relative">
        <div class="img-fulled">
          <img :src="page_data.merit.image" alt="">
        </div>
        <div class="desc-content mobile:pv-8 mobile:bg-color-gray-1">
          <div class="container-r">
            <div class="box-md-8 box-lg-5">
              <div class="entry-header">
                <div class="color-gray-4 text-uppercase mb-2">{{page_data.merit.name}}</div>
                <div class="text-x4">{{page_data.merit.title}}</div>
              </div>
              <div class="text-content mt-8 desktop:mb-15 text-x1 text-item" v-html="page_data.merit.text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block-8" id="block-8">
      <div class="wrapper">
        <div class="container-r pv-10 desktop:pv-13">
          <div class="box-md-9 box-lg-7 desktop:pr-15">
            <div class="entry-header">
              <div class="color-gray-4 text-uppercase mb-2">{{page_data.aim.name}}</div>
              <div class="text-x3 fw-6">{{page_data.aim.title}}</div>
            </div>
            <div class="text-content mv-8 text-x1 text-item box-lg-8" v-html="page_data.aim.text"></div>
          </div>
          <div class="video-content relative mv-8 color-white desktop:mv-20">
            <div class="bg-video-content-2 relative">
              <div class="trans-center text-center">
                <a :href="page_data.nature.video" data-fancybox="">
                  <div class="btn-play relative m-auto mb-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                  </div>
                </a>
                <div class="desc-content hidden-xs hidden-sm">
                  <div class="text-x4 mb-2">{{page_data.nature.title}}</div>
                  <div class="text-x1">{{page_data.nature.subtitle}}</div>
                </div>
              </div>
              <div class="img-fulled">
                <img :src="page_data.nature.poster" alt="">
              </div>
            </div>
          </div>
          <div class="box-md-8 box-lg-5">
            <div class="entry-header">
              <div class="text-x4">{{page_data.new.title}}</div>
            </div>
            <div class="text-content mv-8 text-x1 text-item" v-html="page_data.new.subtitle"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="img-fulled">
        <img :src="page_data.aboutnew.image" alt="">
      </div>
    </div>

    <div class="short-news">
      <div class="container-p pv-8">
        <div class="entry-header m-v-30 text-center box-md-12 box-lg-7 m-auto">
          <div class="h3-size">{{page_data.aboutnew.title}}</div>
        </div>
        <div class="short-news-items boxes-4 owl-carousel owl-btn-2 mv-10 desktop:mv-20">
          <figure v-for="(item, key) in page_data.aboutnew.images" :key="key">
            <div class="fig-wrapper">
              <div class="img-content">
                <a :href="item.url" data-fancybox>
                  <div class="btn-play">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                  </div>
                  <div class="img" :style="'background-image: url(\''+item.image+'\');'"></div>
                </a>
              </div>
              <div class="desc-content">
                <div class="text-s2i-b">{{item.description}}</div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
    <div class="block-9 color-white">
      <div class="wrapper relative">
        <div class="desc-content pv-20">
          <div class="container-r">
            <div class="box-md-8 box-lg-5 m-l-auto">
              <div class="entry-header">
                <div class="text-x3" v-html="page_data.adaptation.text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="img-fulled absolute-xs">
          <img :src="page_data.adaptation.image" alt="">
        </div>
      </div>
    </div>

    <KiaworldOther :kiaworld-other-items="page_data.other_pages" />

  </div>
</template>


<script>
import { fetchPath } from '~/api/otherApi';
import KiaworldOther from "@/components/kiaworld/KiaworldOther";


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
  components:{
    KiaworldOther
  },
  mounted(){
    if(checkSm()){
      $(".brand .swiper-items").addClass("owl-carousel");
      $(".brand .swiper-items").owlCarousel({
        nav: !checkSm(),
        loop: false,
        //items: 3,
        dots: true,
        dotsEach: false,
        slideBy: 2,
        //autoHeight: true,
        autoplay: false,
        //autoplayTimeout: 5400,
        touchDrag: checkSm(),
        //center: true,
        responsive:{
          0:{items:1},
          991:{items:4}
        },
        navText : owlBtn,
        margin: 0
      })
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