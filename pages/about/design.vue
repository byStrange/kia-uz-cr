<template>
  <div class="main-body re-design offset-header" header-opacity>
    
    <div class="kiaworld-bnr color-white">
      <div class="brand-bnr-video">
        <div class="breadcrumb-container absolute color-gray-1">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
              <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="bg-shadow"></div>
        <div class="video-content bg-video-content cover">
          <!-- <div class="img" style="background-image: url('/img/rebrand/design/bnr.jpg');"></div> -->
          <video src="/img/rebrand/design/brand-bnr.mp4" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        </div>
        <div class="desc-content trans-center">
          <div class="btn-content">
            <a href="https://youtu.be/ueR8PcA9S4c?list=TLGGxkWESppnHYMwMTA3MjAyMQ" data-fancybox="">
              <div class="btn-play relative m-auto">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
              </div>
            </a>
          </div>
          <div class="text-content text-center">
            <h1>{{page_data.header.title}}</h1>
            <p class="text-x1">{{page_data.header.text}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="design-chef bg-color-gray-1">
      <div class="container-r pv-5 desktop:pv-15">
        <div class="wrapper flex-adaptive desktop:jc-between">
          <div class="img-content mv-8 fsh-0">
            <img :src="page_data.blocks[0].image" alt="">
          </div>
          <div class="desc-content mv-8 desktop:ml-8 box-md-5">
            <div>
              <div class="text-x5 fw-7 mb-5">{{page_data.blocks[0].name}}</div>
              <div class="text-s1">{{page_data.blocks[0].text}}</div>
            </div>
            <div class="flex mv-8 desktop:mv-12">
              <div class="fsh-0 pr-4 desktop:pr-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="22" viewBox="0 0 35 22" fill="none"><path d="M19.1509 0H8.49057L0 22H13.6792L19.1509 0ZM35 0H24.3396L15.8491 22H29.5283L35 0Z" fill="#5D7D2B"/></svg>
              </div>
              <div>
                <div class="text-s1-b mb-5" v-html="page_data.blocks[0].content"></div>
                <div class='text-s2i' v-html="page_data.blocks[0].content_two"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="kiaworld-sponsorship">
      <div class="container-r">
        <div class="kiaworld-sponsorship-items">
          <figure v-for="(item, key) in page_data.blocks[1].content" :key="key">
            <div class="flex-adaptive">
              <div class="desc-content text-item">
                <hr> <br>
                <div class="text-x4 m-v-20">{{item.name}}</div>
                <div v-html="item.text"></div>
              </div>
              <div class="img-content"><img :src="item.image"></div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <div class="design-sofia bg-color-1 color-white">
      <div class="container-r p-v-80">
        <div class="row-3 flex-adaptive justify-c-between mb-8">
          <div class="col-md-4 p-h-15">
            <div class="h1 text-x5">{{page_data.blocks[2].name}}</div>
          </div>
          <div class="col-md-offset-1 p-h-15 col-md-6 text-item">
            <p>{{page_data.blocks[2].text}}</p>
          </div>
        </div>
        <div class="video-content relative text-center">
          <div class="bg-video-content-2 relative">
            <div class="trans-center text-center">
              <a :href="page_data.blocks[2].images[0].url" data-fancybox="">
                <div class="btn-play relative m-auto mb-5"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg></div>
              </a>
              <div class="desc-content hidden-xs hidden-sm">
                <div class="text-x4 mb-2">{{page_data.blocks[2].images[0].description[0]}}</div>
                <div class="text-x1">{{page_data.blocks[2].images[0].description[1]}}</div>
              </div>
            </div>
            <div class="img-fulled"><img :src="page_data.blocks[2].images[0].image" alt=""></div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-video bg-black-fill color-white">
      <div class="container-p p-v-80">
        <div class="entry-header text-center m-b-30">
          <h4 class="color-2 text-n1">{{page_data.blocks[3].alias}}</h4>
          <h2>{{page_data.blocks[3].name}}</h2>
        </div>
        <br>
        <div class="tab-content">
          <div class="tab-pane fade in active">
            <div class="card-video-items boxes-4 owl-carousel owl-btn-2">
              <figure v-for="(item, key) in page_data.blocks[3].content" :key="key">
                <a :href="item.video" data-fancybox>
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" :style="'background-image: url('+item.image+');'"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>{{item.name}}</b></p>
                    </div>
                  </div>
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="design-inter">
      <div class="container-r p-v-80">
        <div class="row-3 flex-adaptive justify-c-between">
          <div class="col-md-5 p-h-15">
            <h4 class="color-2 text-n1">{{page_data.blocks[5].alias}}</h4>
            <div class="h1 text-x5">{{page_data.blocks[5].name}}</div>
          </div>
          <div class="col-md-offset-1 p-h-15 col-md-6 m-t-50 text-item" v-html="page_data.blocks[5].text"></div>
        </div>
        <br class="hidden-xs">
        <div class="design-inter-items owl-carousel m-t-30">
          <figure v-for="(item, key) in page_data.blocks[5].images" :key="key">
            <div class="img-content">
              <img :src="item">
            </div>
          </figure>
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
          content: this.page_data.seo.description
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