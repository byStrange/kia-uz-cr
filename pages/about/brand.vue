<template>
  <div class="main-body offset-header" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white" :style="'background-image: url(\'/img/rebrand/about-brand/bnr.jpg\');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
              <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header" v-html="page_data.header.text"></div>
        </div>
      </div>
      <template v-for="(block) in page_data.blocks" v-if="block.block == 'block1'">
        <div class="container p-v-30 p-t-md-80">
          <div class="row-3 flex-adaptive justify-c-between">
            <div class="col-md-4 p-h-15">
              <div class="h1 text-x5 m-t-0">{{block.name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-7" v-html="block.text"></div>
          </div>
          <div class="video-content m-t-30 m-t-md-80 relative">
            <div class="bg-video-content-2">
              <video :src="block.videoPreview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
              <div class="desc-content trans-center text-center color-white">
                <a href="https://youtu.be/DCRDW4WA4sQ?list=TLGGXd_JKPzkXdwwMjA3MjAyMQ" data-fancybox="">
                  <div class="btn-play relative m-auto">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                  </div>
                </a>
                <div class="hidden-xs hidden-sm mt-6">
                  <div class="text-x4 mb-2">Movemennt that inspires</div>
                  <div class="text-x1">Новые ценности, цели и философия дизайна</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="short-news">
          <div class="container-p pv-8">
            <div class="entry-header m-v-30 text-center box-md-8 box-lg-5 m-auto">
              <div class="h3-size">Представители компании про новый бренд Kia</div>
            </div>
            <div class="short-news-items boxes-4 owl-carousel owl-btn-2 mv-10 desktop:mv-20">
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <a href="https://youtu.be/6o9bFgmVLmM?list=TLGGiPHBQ3y1xCwwMjA3MjAyMQ" data-fancybox>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                      <div class="img" :style="'background-image: url(\'/img/brand/videolink-1.jpg\');'"></div>
                    </a>
                  </div>
                  <div class="desc-content">
                    <div class="text-s2i-b">Часть I: Полная трансформация</div>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <a href="https://youtu.be/djrdAdyKYwQ?list=TLGG65zXND6IPGkwMjA3MjAyMQ" data-fancybox>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                      <div class="img" :style="'background-image: url(\'/img/brand/videolink-2.jpg\');'"></div>
                    </a>
                  </div>
                  <div class="desc-content">
                    <div class="text-s2i-b">Часть II: Новая цель бренда</div>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <a href="https://youtu.be/KNlirWGAP5w?list=TLGG3fI1tEQsC_kwMjA3MjAyMQ" data-fancybox>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                      <div class="img" :style="'background-image: url(\'/img/brand/videolink-3.jpg\');'"></div>
                    </a>
                  </div>
                  <div class="desc-content">
                    <div class="text-s2i-b">Часть III: Новый облик бренда</div>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <a href="https://youtu.be/9f76w8vQgb4?list=TLGGrf4xoWTcUtswMjA3MjAyMQ" data-fancybox>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                      <div class="img" :style="'background-image: url(\'/img/brand/videolink-4.jpg\');'"></div>
                    </a>
                  </div>
                  <div class="desc-content">
                    <div class="text-s2i-b">Часть IV: Дизайн для будущего</div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div class="kiaworld-cnt p-b-20">
          <div class="container-p">
            <div class="cnt-items boxes-3 boxes-xs-2 figure-m-v-20 m-v-30">
              <figure v-for="(content, key) in block.content" :key="key">
                <div class="fig-wrapper">
                  <h1 class="m-b-5">{{content.name}}</h1>
                  <p>{{content.text}}</p>
                  <nuxt-link :to="localePath('/about/history')" class="hover-aunderline" v-if="key == 0">
                    <b>История Kia</b><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path data-v-8a6d1ec4="" d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                  </nuxt-link>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </template>
      <div class="kiaworld-logo">
        <div class="kiaworld-logo-wrapper">
          <div class="container-p desktop:mv-10">
            <div class="box-md-10 box-lg-6 m-auto">
              <h1>Логотип бренда</h1>
              <br>
              <div class="text-x1">
                Новый логотип Kia символизирует возможности будущего и нашу уверенность в будущем. Симметрия логотипа воплощает эту четкую уверенность, а восходящие линии, вписанные в логотип, обозначают тот рост, которого мы желаем нашему бренду и, самое главное, нашим клиентам. Мы хотим, чтобы каждый, кто соприкасается с новым брендом Kia, чувствовал подъем вдохновения и прилив творческих сил.
              </div>
              <br>
              <img class="m-auto desktop:mb-6 mv-9" :src="'/img/rebrand/about-brand/logo.png'">
            </div>
          </div>
        </div>
        <div class="img-entry-header relative">
          <div class="container text-content color-white mt-8 desktop:mt-20">
            <h4 class="color-2 text-n1">ДВИЖЕНИЕ, КОТОРОЕ ВДОХНОВЛЯЕТ</h4>
            <div class="row-3 flex-adaptive justify-c-between">
              <div class="col-md-4 p-h-15">
                <div class="h1 text-x5 m-t-0">Movement that inspires</div>
              </div>
              <div class="col-md-offset-1 p-h-15 text-x1 col-md-7">
                Движение вдохновляет наш бренд, и из этого вдохновения рождается всё, что мы делаем. Мы твердо верим, что бренд и дизайн должны развиваться симметрично и вести нас к будущему, в котором мы сможем оставить свой след. Мы гордимся тем, что наши решения помогают людям перемещаться из одной точки в другую, объединяться и преодолевать физические и эмоциональные барьеры. Движение всегда было основой нашего бренда, а передвижение людей – основой нашего бизнеса
              </div>
            </div>
          </div>
          <div class="img-bg mobile:mt-6">
            <img :src="'/img/rebrand/about-brand/1.jpg'">
          </div>
        </div>
      
      </div>
      
    </div>

    <div class="kiaworld-designc">
      <template>
        <div class="container-p p-v-md">
          <div class="entry-header text-center m-v-30 box-md-6 m-auto">
            <div class="h1 m-b-30">Дизайн-центры Kia</div>
            <p class="text-x1">Три дизайн-центра Kia, расположенных в Южной Корее, США и Германии, позволяют объединить лучших специалистов отрасли и использовать их опыт для создания автомобилей, учитывающих потребности современных покупателей.</p>
          </div>
          <div class="kiaworld-designc-items boxes-3 figure-m-v-20 desktop:pb-8">
            <figure>
              <div class="fig-wrapper">
                <div class="img-content">
                  <div class="img" :style="'background-image: url(/img/rebrand/about-brand/design-home-1.jpg);'"></div>
                </div>
                <div class="desc-content text-x1 m-t-10">
                  Дизайн-центр в США <br>
                  Ирвайн
                </div>
              </div>
            </figure>
            <figure>
              <div class="fig-wrapper">
                <div class="img-content">
                  <div class="img" :style="'background-image: url(/img/rebrand/about-brand/design-home-2.jpg);'"></div>
                </div>
                <div class="desc-content text-x1 m-t-10">
                  Дизайн-центр в Германии <br>
                  Франкфурт-на-Майне
                </div>
              </div>
            </figure>
            <figure>
              <div class="fig-wrapper">
                <div class="img-content">
                  <div class="img" :style="'background-image: url(/img/rebrand/about-brand/design-home-3.jpg);'"></div>
                </div>
                <div class="desc-content text-x1 m-t-10">
                  Дизайн-центр в Южной Корее <br>
                  Намьянг
                </div>
              </div>
            </figure>
          </div>
        </div>
      </template>
    </div>
    
    <div class="kiaworld-cars" v-if="false">
      <template v-for="(block) in page_data.blocks" v-if="block.block == 'block5'">
        <div class="img-entry-header relative mobile:pb-0">
          <div class="container text-content m-t-md-70">
            <div class="row-3 flex-adaptive justify-c-between">
              <div class="col-md-4 p-h-15">
                
              </div>
              <div class="col-md-offset-1 p-h-15 text-x1 col-md-7">
                <div class="h1 text-x5 m-t-0">Автомобили Kia</div>
                <p>Автомобили Kia выделяются своим фирменным стилем, эмоциональным и ярким дизайном, сохраняя главное преимущество — великолепное соотношение качества и функциональности.</p>
                <div class="fw-6 mv-4 hover-underline">
                  <nuxt-link :to="localePath('/buy/cars/')">Смотреть модели Kia в Узбекистане 
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 9.33203L5.5 5.33203L1.5 1.33203" stroke="#05141F" stroke-width="2"/></svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="img-bg mobile:mt-6">
            <!-- <div class="img" style="background-image:url('/img/rebrand/about-brand/2.jpg');"></div> -->
            <img :src="'/img/rebrand/about-brand/2.jpg'">
          </div>
        </div>
      </template>
    </div>
    <div class="kiaworld-plan bg-color-gray-1">
      <div class="container-r pv-4">
        <div class="kiaworld-plan-body color-1 flex">
          <div class="img-content fsh-0 mv-6 desktop1440:mt-25 desktop1440:mr-5 desktop1440:pt-10 align-end">
            <img src="/img/rebrand/design/plan-1.png" alt="">
          </div>
          <div class="desc-content mv-6">
            <img src="/img/rebrand/design/plan-s.svg" alt="">
            <div class="fw-7 text-x3 mb-6 lc-out">Долгосрочная <br>стратегия Kia</div>
            <p>Plan S (S от англ. shift – переход) предусматривает переход от производства традиционных автомобилей с двигателями внутреннего сгорания к выпуску электромобилей и развитию новых систем мобильности для завоевания лидирующих позиций в автомобильной индустрии будущего.</p>
          </div>              
        </div>
      </div>
    </div>
    <div class="kiaworld-rating hide" v-if="false">
      <template v-for="(block) in page_data.blocks" v-if="block.block == 'block7'">
        <div class="g-padding">
          <div class="g-container">
            <div class="g-margin flex-adaptive justify-c-between p-v-30 p-v-md-90">
              <div class="desc-content m-v-30 box-md-4">
                <div class="h1 text-x5">{{block.name}}</div>
                <br>
                <div class="text-x1">{{block.text}}</div>
                <br><br>
                <div class="fw-6 text-x5">{{block.content.code[0]}} <span class="text-x3">{{block.content.code[1]}}</span></div>
                <div class="text-x1">{{block.content.content}}</div>
              </div>
              <div class="img-content m-v-30 box-md-5">
                <img :src="block.image">
              </div>
            </div>
            <hr>
          </div>
        </div>
      </template>
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