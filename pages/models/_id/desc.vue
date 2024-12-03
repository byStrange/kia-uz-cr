<template>
  <div class="offset-model-header model-desc">

    <Model-header :page_data="page_data" :route_id="$route.params.id" :price_min="page_data.minPrice"/>

    <div class="card-bnr card-top relative">
      <div class="bg-video-content cover">
        <video v-if="page_data.header.video" :src="page_data.header.video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <div v-else class="img-md absolute" :style="'background-image: url('+page_data.header.bannerDesktop+');'"></div>
        <div class="img-xs absolute" :style="'background-image: url('+page_data.header.bannerMobile+');'"></div>
      </div>
      <div class="container-p relative">
        <div class="breadcrumb-container">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link :to="localePath('/models')">{{ $t('menu[1]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.name}}</nuxt-link></li>
          </ol>
        </div>
        <div class="wrapper-content">
          <div class="desc-content hidden-xs hidden-sm">
            <div v-if="!page_data.soon" class="fw-8 color-white  flex jc-end">
              <span class="text m-t-4">
                <div class="flex align-center mt-4">
                  <span>
                    <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                    {{page_data.minPrice | spaceBetweenNum}} {{ $t('other.price_text') }}
                    <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                  </span> 
                  <a class="p-l-5 flex" href="javascript:;" data-src="#textcredit" data-fancybox>
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg>
                  </a>
                  <span class="p-h-5">·</span>
                </div>
              </span>
              <div class="m-l-20 flex fd-column">
                <span class="btn-def style-2">
                  <nuxt-link :to="localePath(page_data.callback.url)">{{page_data.callback.title}}</nuxt-link>
                </span>
                <div class="text-right mt-1" v-if="page_data.priceList">
                  <span class="btn-def style-2">
                    <a :href="page_data.priceList" class="hover-aunderline" :download="page_data.name" target="_blank">
                      <span class="m-l-5">{{$t("model_header[7]")}}</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-bnr-bottom">
            <div class="flex-adaptive ai-end mobile:ai-center justify-c-between">
              <div class="card-bnr-name">
                <div class="text-n1 m-b-15">
                  <span v-if="page_data.soon">{{$t("model[0]")}} </span>{{page_data.header.onLogoText}}
                </div>
                <div class="">
                  <h1 class="h-clear">{{page_data.name}}</h1>
                </div>
                <!-- <img :src="page_data.header.logo"> -->
                <div class="font-size-nm m-t-10">{{page_data.header.underLogoText}}</div>
              </div>
              <div class="desc-content hidden-md hidden-lg" v-if="!page_data.soon">
                <span class="text align-center">
                  <span>
                    <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                    {{page_data.minPrice | spaceBetweenNum}} {{ $t('other.price_text') }}
                    <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                  </span>
                  <a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
                <div class="btn-opacity">
                  <nuxt-link :to="localePath(page_data.callback.url)">{{page_data.callback.title}}</nuxt-link>
                </div>
                <div class="btn-opacity" style="margin-top: -15px;">
                  <a :href="page_data.priceList" class="hover-aunderline" :download="page_data.name" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="mr-1" data-v-22b6d7c2=""><path d="M2.75.75h9.94l4.56 4.56v13.94H2.75V.75z" stroke="currentColor" stroke-width="1.5" data-v-22b6d7c2=""></path><path d="M12.5 1v5h4" stroke="currentColor" stroke-width="1.5" data-v-22b6d7c2=""></path></svg>
                    <span class="m-l-5">{{$t("model_header[7]")}}</span>
                  </a>
                </div>
              </div>
              <div class="card-bnr-advantages box-md-5 flex row">
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
            <template v-if="block.type == 'block3'">
              <div class="entry-header box-md-4">
                <h4 class="color-2 text-n1">{{block.name}}</h4>
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
              <h4 class="color-2 text-n1">{{block.name}}</h4>
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
              <div class="col-md-offset-1 p-h-15 col-md-5 m-t-20 opacity-5">
                <p>{{block.summary}}</p>
              </div>
            </div>
            <br class="hidden-sm hidden-xs">
            <div class="video-content m-t-30 relative">
              <div v-if="block.video">
                <div class="bg-video-content-2">
                  <a :href="block.video" data-fancybox><div class="btn-play"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg></div></a>
                  <video :src="block.preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
                </div>
              </div>
              <div v-else class="img-content">
                <img :src="block.image" alt="">
              </div>
            </div>
          </div>
        </template>
        <template v-if="block.type == 'block5'">
          <div class="card-video" :class="'theme-'+block.theme">
            <div class="container-p p-v-80">
              <div class="entry-header text-center">
                <h4 class="color-2 text-n1">{{block.name}}</h4>
                <h2>{{block.title}}</h2>
                <div class="short-models-nav m-v-30">
                  <ul class="list flex-adaptive justify-c-center li-m-v-15">
                    <li v-for="(cop, key) in block.types" :key="key" :class="{'active': key == 0}">
                      <a :href="'#'+cop.name" data-toggle="tab">{{cop.name}} ({{cop.items.length}})</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-content">
                <div :id="cop.name" v-for="(cop, key) in block.types" :key="key"  class="tab-pane fade" :class="{'active in': key == 0}">
                  <div class="card-video-items boxes-4 owl-carousel owl-btn-2">
                    <figure v-for="(video, key) in cop.items" :key="key">
                      <a :href="video.videoUrl" data-fancybox>
                        <div class="fig-wrapper">
                          <div class="img-content">
                            <div class="img" :style="'background-image: url('+video.image+');'"></div>
                            <div class="btn-play">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                            </div>
                          </div>
                          <div class="desc-content m-t-10">
                            <p><b>{{video.name}}</b></p>
                          </div>
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
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


    <div class="card-sets bg-color-gray-1" v-if="!page_data.soon">
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
                <h4 :class="{'old-price': set.old_price}" class="mb-1">
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
                  <span v-if="page_data.helper" data-toggle="tooltip" data-placement="top" class="price-tooltip" :title="page_data.helper" style="color: red;">*</span>
                </h4>
                <div class="new-price" v-if="set.dop_price" style="color:white;">
                  <template v-if="$i18n.localeProperties.code == 'ru'">
                    {{ $t('other.from') }} 
                    {{set.dop_price | spaceBetweenNum}} 
                    {{ $t('other.price_text') }} 
                    {{ page_data.helper_day }} 
                  </template>
                  <template v-if="$i18n.localeProperties.code == 'uz'">
                    {{ page_data.helper_day }} 
                    {{set.dop_price | spaceBetweenNum}} 
                    {{ $t('other.price_text') }} 
                    {{ $t('other.from') }}
                  </template>
                </div>
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

    <section v-if="page_data.warranty">
      <div class="card-gar">
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

    <div v-if="page_data.footer" class="card-fb" :style="'background-image: url('+page_data.footer.image+');'">
      <div class="container-p text-center" v-if="!page_data.soon">
        <div class="entry-content">
          <div class="entry-header color-white p-v-30">
            <h4 class="text-n1">{{page_data.footer.title}}</h4>
            <h2>{{page_data.footer.text}}</h2>
            <span class="btn-def style-1 m-v-20">
              <nuxt-link :to="localePath('/models/'+$route.params.id+'/callback/')" class="p-v-20 p-h-25">
                {{$t("menu[29]")}}
              </nuxt-link>
            </span>
          </div>
          <div class="img-content">
            <picture>
              <source :srcset="page_data.footer.carMobile" media="(max-width: 768px)">
              <img :src="page_data.footer.car">
            </picture>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page_data.footer">
      <div class="container-p text-center pb-8" v-if="page_data.footer.buttons">
        <div class="boxes-4 serried jc-center figure-mv-3 hover-underline">
          <!-- /.pdf/gim.test("https://cdn.kia.uz/uploads/files/Cerato_brochure.pdf") -->
          <figure style="padding:0 2px;" class="mv-1" v-for="(item, key) in page_data.footer.buttons" :key="key" v-if="item.link">
            <a :href="item.link" :download="/.pdf/gim.test(item.link)?'download':false" target="_blank">
              <div class="wrapper bg-color-gray-3 ph-7 pv-7 flex ai-center jc-center">
                <img :src="item.icon">
                <div class="fw-6 mh-2 text-x13">{{item.title}}</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-v-27cca3e4="" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2" data-v-27cca3e4=""></path></svg>
              </div>
            </a>
          </figure>
        </div>
      </div>
    </div>


    <div class="car-detailinfo bg-color-1 color-gray" v-if="page_data.footer.description.length">
      <div class="container-p">
        <div class="desc-content pv-8">
          <div readmore>
            <div v-html="page_data.footer.description" class="readmore-content" :class="{'close' : !readmore}" ></div>
            <!-- Подробнее -->
            <div class="btn-content color-white mt-2">
              <a href="javascript:;" @click.prevent="readmore = !readmore">
                <span class="flex ai-center" v-if="!readmore">Подробнее <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg></span>
                <span class="flex ai-center" v-else>Скрыть <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M15 14l-5-5-5 5" stroke="currentColor" stroke-width="2"></path></svg></span>
              </a>
            </div>
          </div>
        </div>
        <hr class="m-0">
      </div>
    </div>




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
      if(page_data.testing){
        console.log("testing: "+page_data.testing)
        error(e);
        return;
      }
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
    this.currentInterior = this.page_data.colors.interiorColors[0];
    
    
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
      center: false,
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
      readmore: false,
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
