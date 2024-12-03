<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link :to="localePath('/models')">{{ $t('menu[1]') }}</nuxt-link></li>
        </ol>
      </div>
    </div>

    <div class="models">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="text-x5">{{$t("models[0]")}}</h1>
        </div>
        <!-- main ver -->
        <div class="entry-content">
          <section class="m-v-50" v-for="(type, key) in page_data.types" :key="key">
            <h3 class="text-x4">{{type.name}}</h3>
            <div class="models-items boxes-4 figure-m-v-30">
              <figure v-for="(model, key) in type.models" :key="key" v-if="!model.testing">
                <div>
                  <div class="img-content" >
                    <nuxt-link exact :to="localePath(model.url)">
                      <img :src="model.image">
                    </nuxt-link>
                  </div>
                  <div class="desc-content">
                    <div class="car-card__name">
                      <div v-if="model.soon">{{$t("models[1]")}}</div>
                      <nuxt-link exact :to="localePath(model.url)">{{model.name}}</nuxt-link>
                      <span class="car-card-new" v-if="model.soon">{{$t("models[2]")}}</span>
                    </div>
                    <div class="car-card-price m-v-5" v-if="model.minPrice">
                      <div class="old-price">
                        <span v-if="model.minPriceOld" class="old-price-text" style="color:black;">
                          <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                          {{model.minPriceOld | spaceBetweenNum}} {{ $t('other.price_text') }}
                          <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                        </span>
                      </div>
                      <p style="white-space: nowrap;">
                        <span class="p-r-10 relative">
                          <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                          {{model.minPrice | spaceBetweenNum}} {{ $t('other.price_text') }}
                          <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                          <span v-if="model.helper" data-toggle="tooltip" data-placement="top" class="price-tooltip" :title="model.helper" style="color: red;">*</span>
                        </span>
                        <a class="flex" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></p>
                        <div class="new-price mv-1 mb-2" v-if="model.minPriceDop">
                          <template v-if="$i18n.localeProperties.code == 'ru'">
                            {{ $t('other.from') }} 
                            {{ model.minPriceDop | spaceBetweenNum }} 
                            {{ $t('other.price_text') }} 
                            {{ page_data.helper_day }} 
                          </template>
                          <template v-if="$i18n.localeProperties.code == 'uz'">
                            {{ page_data.helper_day }} 
                            {{ model.minPriceDop | spaceBetweenNum }}
                            {{ $t('other.price_text') }} 
                            {{ $t('other.from') }}
                          </template>
                        </div>
                    </div>
                    <div class="car-card-links" v-if="model.minPrice">
                      <nuxt-link exact :to="localePath(model.configurator_url)" class="btn-link-1">{{$t("models[3]")}}<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg></nuxt-link>
                      <nuxt-link exact :to="localePath(model.options_url)" class="btn-link-1">{{$t("models[4]")}}<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg></nuxt-link>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </section>
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
      ]
    }
  },
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    try{
      
      const page_data = await fetchPath($axios, {
        path: route.path
      });
      
      return {
        page_data,
      }
    }catch(e){
      error(e);
    }
  },
}
</script>