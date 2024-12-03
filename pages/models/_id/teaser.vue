<template>
  <div class="model-desc" header-opacity>

    <div class="card-bnr card-top relative">
      <div class="bg-video-content cover">
        <video :src="page_data.header.video" :class="{'visible-md visible-lg': page_data.header.video}" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <div class="img-md absolute" :class="{'hidden-md hidden-lg': page_data.header.video}" :style="'background-image: url('+page_data.header.bannerDesktop+');'"></div>
        <div class="img-xs absolute" :style="'background-image: url('+page_data.header.bannerMobile+');'"></div>
      </div>
      <div class="container-p relative desktop:pt-16">
        <div class="breadcrumb-container">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link :to="localePath('/models')">{{ $t('menu[1]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.name}}</nuxt-link></li>
          </ol>
        </div>
        <div class="wrapper-content mt-10 desktop:mt-13">
          <div class="desc-content hidden-xs hidden-sm"></div>
          <div class="card-bnr-bottom">
            <div class="flex-adaptive ai-end mobile:ai-center justify-c-between">
              <div class="card-bnr-name">
                <div class="text-n1 m-b-15">
                  {{page_data.header.onLogoText}}
                </div>
                <div class="">
                  <h1 class="h-clear">{{page_data.name}}</h1>
                </div>
                <!-- <img :src="page_data.header.logo"> -->
                <div class="font-size-nm m-t-10">{{page_data.header.underLogoText}}</div>
              </div>
              <div class="desc-content">
                <div class="btn-def style-2">
                  <a href="#form-order" scroll-link>{{$t('btns.order')}}</a>
                </div>
              </div>
              <div class="card-bnr-advantages box-md-5 flex row" v-if="page_data.header.icons > 0">
                <div class="item p-h-15" v-for="(teaser, key) in page_data.header.icons" :key="key" :class="{ 'text-center': page_data.header.icons.length <= 1}">
                  <div class="img-content">
                    <img :src="teaser.icon">
                  </div>
                  <p><small>{{teaser.description}}</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="card-media">
      <div class="card-media-intro card-media-v" :class="'theme-'+block.theme" v-for="(block, keyParent) in page_data.blocks" :key="keyParent">
        <template v-if="block.type == 'block1'">
          <div class="container-p-2 relative" :class="'accordion_'+block.direct">
            <template v-if="(block.direct == 'left') || (block.direct == 'right')">
              <div class="flex-adaptive">
                <div class="card-media-desc">
                  <h4 class="color-2 text-n1">{{block.name}}</h4>
                  <div class="h1 text-x5">{{block.title}}</div>
                  <br>
                  <p class="opacity-5">{{block.summary}}</p>
                  <br>
                  <hr>
                  <div class="card-media-list m-t-40">
                    <ul class="list">
                      <li v-for="(preview, key) in block.photos" :key="key" :class="{active: key == 0}">
                        <a :href="'#card-media-list-'+keyParent+'-'+key" data-toggle="tab">{{preview.name}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-media-imgs tab-content owl-img-4-3">
                  <div class="tab-pane fade" :id="'card-media-list-'+keyParent+'-'+key" 
                    v-for="(preview, key) in block.photos"
                    :class="{'active in': key == 0}"
                    :key="key">
                    <div class="img-content">
                      <img :src="preview.url">
                    </div>
                    <div class="desc-content m-auto box-md-9 m-t-25">
                      <p>{{preview.text}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="(block.direct == 'top')">
              <div class="row-3 flex-adaptive justify-c-between">
                <div class="col-md-6 p-h-15">
                  <h4 class="color-2 text-n1">{{block.name}}</h4>
                  <div class="h1 text-x5">{{block.title}}</div>
                </div>
                <div class="col-md-offset-1 p-h-15 col-md-5 mt-4 opacity-5" :class="{'mt-9': block.name.length}">
                  <p>{{block.summary}}</p>
                </div>
              </div>
              <div class="owl-carousel-def owl-carousel mt-10 desktop:owl-nav owl-nav-btns owl-nav-style-3">
                <div class="item" v-for="(item, key) in block.photos" :key="key">
                  <img :src="item.url" alt="">
                </div>
              </div>
            </template>
          </div>
        </template>
        <template v-if="block.type == 'block2'">
          <div class="container-p-2 relative" :class="'accordion_'+block.direct">
            <template v-if="(block.direct == 'left') || (block.direct == 'right')">
              <div class="flex-adaptive">
                <div class="card-media-desc">
                  <h4 class="color-2 text-n1">{{block.name}}</h4>
                  <div class="h1 text-x5">{{block.title}}</div>
                  <br>
                  <p class="opacity-5">{{block.summary}}</p>
                  <br>
                  <hr>
                  <div class="card-media-list m-t-40">
                    <ul class="list">
                      <li v-for="(enteas, key) in block.content" :key="key" :class="{active: key == 0}">
                        <a :href="'#card-media-list-'+keyParent+'-'+key" data-toggle="tab">{{enteas.name}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-media-details tab-content owl-img-4-3">
                  <div class="tab-pane fade" :id="'card-media-list-'+keyParent+'-'+key" 
                    v-for="(enteas, key) in block.content"
                    :class="{'active in': key == 0}"
                    :key="key">
                    <div class="desc-content m-auto box-md-9 m-t-25 hide">
                      <p>{{enteas.name}}</p>
                    </div>
                    <ul class="card-list-engine">
                      <li v-for="(teaser, key) in enteas.options" :key="key">
                        <div class="cnt-content"><big>{{teaser.value}}</big> <span>{{teaser.type}}</span></div>
                        <div class="text-content">
                          <span>{{teaser.title}}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
        <template v-if="block.type == 'block3'">
          <div class="container-p-2 relative">
            <div class="entry-header box-md-4">
              <h4 class="color-1 text-n1">{{block.name}}</h4>
              <h2>{{block.title}}</h2>
            </div>
            <div class="entry-content">
              <div class="short-models-nav m-v-30">
                <ul class="list flex-adaptive li-m-v-15">
                  <li v-for="(preview, key) in block.photos" :key="key" :class="{'active in': key == 0}">
                    <a :href="'#card-tech-'+keyParent+'-'+key" data-toggle="tab">{{preview.name}}</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane fade" :id="'card-tech-'+keyParent+'-'+key" v-for="(preview, key) in block.photos" :key="key" :class="{'active in': key == 0}">
                  <div class="img-content text-center m-v-30">
                    <img :src="preview.url">
                  </div>
                  <div class="desc-content box-lg-6">
                    <p>{{preview.text}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="block.type == 'block4'">
          <div class="container-p-2 relative" :class="'type-'+block.type">
            <div class="row-3 flex-adaptive justify-c-between">
              <div class="col-md-6 p-h-15">
                <h4 class="color-2 text-n1">{{block.name}}</h4>
                <div class="h1 text-x5">{{block.title}}</div>
              </div>
              <div class="col-md-offset-1 p-h-15 col-md-5 mt-4 opacity-5" :class="{'mt-9': block.name.length}">
                <p>{{block.summary}}</p>
              </div>
            </div>
            <br class="hidden-sm hidden-xs">
            <div class="video-content m-t-30 relative">
              <div v-if="block.video">
                <div class="bg-video-content-2">
                  <a :href="block.video" data-fancybox >
                    <div class="btn-play">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                    </div>
                  </a>
                  <video :src="block.preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
                </div>
              </div>
              <div v-else class="img-content">
                <img :src="block.image" alt="">
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="card-showroom car-showroom" v-if="page_data.colors.bodyColors.length || page_data.colors.interiorColors.length">
      <div class="showroom" :class="{'pano-active': panoActive}">
        <div class="container-p relative">
          <div class="showroom-header">
            <div class="entry-header">
              <h4 class="color-1 text-n1">{{$t("showroom.view")}}</h4>
              <h2>{{page_data.name}}</h2>
            </div>
            <div class="showroom-typeselect">
              <ul class="list">
                <li :class="{'active': !panoActive}" v-if="page_data.colors.bodyColors.length">
                  <a @click="panoActive = false" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                  <span>{{$t("showroom.exterior")}}</span>
                </li>
                <li :class="{'active': panoActive}" v-if="page_data.colors.interiorColors.length">
                  <a @click="panoActive = true" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                  <span>{{$t("showroom.interior")}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="container-p relative" v-if="!panoActive && page_data.colors.bodyColors.length">
          <div class="showroom-main m-v-10">
            <div
                class="cloudimage-360"
                :data-folder="currentExterior.colorFolder+'/'"
                data-filename="{index}.png"
                data-spin-reverse
                data-amount="72">
                <div class="showroom-item-cover flex align-center">
                  <div class="flex box-xs-10 align-center">
                    <img :src="currentExterior.colorFolder+'/1.png'" width="100%">
                  </div>
                </div>
            </div>
          </div>
          <script>window.CI360 = { notInitOnLoad: true }</script>
          <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
        </div>
        <div v-else-if="page_data.colors.interiorColors.length">
          <div class="showroom-pano">
            <iframe
              :src="'https://cdn.kia.uz/panoramas/iframe.html?pano_xml='+currentInterior.colorFolder" frameborder="0"></iframe>
          </div>
        </div>
        <div class="container-p relative" v-if="page_data.colors.bodyColors.length || page_data.colors.interiorColors.length">
          <div class="showroom-bottom justify-c-between align-center">
            <div class="flex-adaptive">
              <div class="showroom-colorselect" v-if="page_data.colors.bodyColors.length">
                <div class="title-content">
                  <span class="color-gray">{{$t("showroom.color")}}</span> 
                  <b>{{currentExterior.name}}</b>
                  <b v-if="currentExterior.metalic*1">{{$t("showroom.metalic")}}</b>
                  <span v-if="currentExterior.price"> + {{currentExterior.price | spaceBetweenNum}} {{$t("other.price_text")}}</span>
                </div>
                <ul class="list m-t-10">
                  <li v-for="(color, key) in page_data.colors.bodyColors" 
                    :class="{'active': currentExterior.id == color.id}"
                    :key="key">
                    <a href="javascript:;" @click.stop.prevent="colorChangeExterior(color)" >
                      <div class="color-select" :style="'background-image: url(\''+color.icon+'\')'"></div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="showroom-colorselect" v-if="page_data.colors.interiorColors.length">
                <div class="title-content">
                  <span class="color-gray">{{$t("showroom.color")}}</span> 
                  <b>{{currentInterior.name}}</b>
                  <span v-if="currentInterior.price"> + {{currentInterior.price | spaceBetweenNum}} {{$t("other.price_text")}}</span>
                </div>
                <ul class="list m-t-10">
                  <li v-for="(color, key) in page_data.colors.interiorColors" 
                    :class="{'active': currentInterior.id == color.id}"
                    :key="key">
                    <a href="javascript:;" @click.stop.prevent="colorChangeInterior(color)" >
                      <div class="color-select" :style="'background-image: url(\''+color.icon+'\')'"></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <span class="btn-def" v-if="!page_data.soon">
                <nuxt-link :to="localePath('/models/'+page_data.name.toLowerCase()+'/configurator')" class="p-v-20">{{page_data.config_button}}</nuxt-link>	
              </span>
            </div>
          </div>
        </div>
      
        

      </div>
    </div>

    <div class="card-sets bg-color-gray-1" v-if="page_data.compls">
      <div class="container-p p-v-45">
        <div class="entry-header text-center m-v-30">
          <h4 class="color-4 text-n1">{{$t("model[3]")}}</h4>
          <h2>{{$t("model[4]")}} {{page_data.name}}</h2>
          <p>
            {{page_data.compls.length}} 
            <span v-if="page_data.compls.length < 2">{{$t("model[5]")}}</span>
            <span v-else>{{$t("model[6]")}}</span>
          </p>
        </div>
        <div class="card-sets-items owl-carousel boxes-3 m-v-30 owl-nav-style-2-xs">
          <figure v-for="(set, key) in page_data.compls" :key="key">
            <div class="fig-wrapper">
              <div class="cap-content">
                <h3>{{set.name}}</h3>
                <h4 :class="{'old-price': set.old_price}">
                  <span v-if="set.old_price" class="old-price-text">
                    <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                    {{set.old_price | spaceBetweenNum}} {{ $t('other.price_text') }}
                    <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                  </span>
                  <span class="price-text">
                    <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                    {{set.price | spaceBetweenNum}} {{ $t('other.price_text') }}
                    <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                  </span>
                </h4>
              </div>
              <div class="desc-content">
                <div>
                  <p><b>{{$t("model[7]")}}</b></p>
                  <p v-for="(text, key) in set.engine" :key="key">{{text}}</p>
                  <br>
                  <p><b>{{$t("model[8]")}}</b></p>
                  <p v-for="(option, key) in set.options" :key="'A'+key">
                    {{option}}
                  </p>
                </div>
                <div class="link-content m-t-20">
                  <div class="align-center font-w-6">
                    <nuxt-link class="hover-aunderline" :to="localePath('/models/'+$route.params.id+'/options')"><b>{{$t("model_header[1]")}}</b></nuxt-link>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <section>
      <div class="card-gar bg-color-gray-1">
        <div class="container-p p-v-45">
          <div class="container">
            <div class="entry-content flex-adaptive ai-center jc-center">
              <div class="img-content mv-6 box-md-5 flex-s-0 desktop:mr-10 text-center">
                <img :src="page_data.warranty[0].image">
              </div>
              <div class="entry-header mv-6 box-md-5">
                <h4 class="color-4 text-n1">{{page_data.warranty[0].alias}}</h4>
                <h2>{{page_data.warranty[0].name}}</h2>
                <span v-html="page_data.warranty[0].summary"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="form-order">
      <div class="container">
        <div class="form-content pt-6 desktop:pt-20 pb-12 desktop:pb-20 desktop:mh-20">
          <div>
            <h3 class="text-x4">{{$t("form.header_order")}} {{page_data.name}}</h3>
          </div>
          <form action="https://cdn.kia.uz/feedback.php" method="POST" formaj>
            <input type="text" name="anti-bot-a" :value="new Date().getFullYear()" class="hide">
            <input type="text" name="type" value="testdrive" class="hide">
            <input type="text" :value="page_data.name" name="carName" class="hide">
            <div class="row">
              <div class="input-content m-v-30 col-md-6 p-h-15">
                <input type="text" name="name" :placeholder="$t('form.name')"  class="form-control" required>
              </div>
              <div class="input-content m-v-30 col-md-6 p-h-15">
                <input value="+998" name="phone" type="text" class="form-control" v-facade="'+### (##) ###-##-##'" placeholder="+998 (__) ___−__−__" required minlength="19">
              </div>
              <div class="input-content m-v-30 col-md-6 p-h-15">
                <input type="email" name="email" placeholder="E-mail"  class="form-control" required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="my@email.com">
              </div>
            </div>
            <div class="iagree m-v-30">
              <label class="flex" role="button">
                <input type="checkbox" name="iagree" class="hide" required>
                <span class="checkbox-style-1"></span>
                <span class="p-l-20">{{$t("form.iagree")}}</span>
              </label>
            </div>
            <span class="btn-def">
              <button type="submit">{{$t("btns.order_2")}}</button>
            </span>
          </form>
          <div class="form-success-block">
            <div class="form-success-block-wrapper pv-10">
              <h3>{{$t("form.response[0]")}}</h3>
              <br>
              <p>{{$t("form.response[1]")}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>



  </div>
</template>


<script>
import { fetchPath } from '~/api/otherApi';
import ModelHeader from "@/components/models/Model-header";

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
  methods: {
   
  },
  created(){

    this.currentExterior = this.page_data.colors.bodyColors[0];
    this.page_data.colors.interiorColors = []
    
  },
  components:{
    ModelHeader
  },
  mounted(){

    // Активация showroom 360 при клике
    $(document).on("click", ".showroom-item-cover", ()=>{
      window.CI360.init();
    })
		$(".card-sets-items.owl-carousel").owlCarousel({
      nav: !checkSm(),
      loop: false,
      //items: 3,
      dots: false,
      dotsEach: false,
      //slideBy: 2,
      autoWidth: checkSm(),
      autoplay: false,
      autoplayTimeout: 5400,
      touchDrag: true,
      center: $(".card-sets-items.owl-carousel figure").length < 2 ? true : false,
      autoheight: true,
      responsive:{
        0:{items:1},
        991:{items:3},
        1600:{items:4}
      },
      navText : owlBtn,
      margin: 30
    });

  },
  data(){
    return{
      panoActive: false,
      currentExterior: {},
      currentInterior: {},
      page_data: {},
      /* События Изменение цвета  */
      async colorChangeExterior(color, parentClass){
        parentClass = parentClass || ".showroom-main";
        this.currentExterior = color;
        window.CI360.destroy();
        $(parentClass+" [data-folder]").attr('data-folder', this.currentExterior.colorFolder)
        $(parentClass+" [data-amount]").attr('data-amount', 72)
        if($(parentClass).find("canvas").length > 0)
          window.CI360.init();
        else{
          $(parentClass).find(".showroom-item-cover").find("img").attr("src", this.currentExterior.colorFolder+"/1.png")
        }
      },
      async colorChangeInterior(color){
        this.currentInterior = color;
      },

    }
  },
}
</script>
