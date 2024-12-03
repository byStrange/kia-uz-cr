<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link to="">{{ $t('menu[5]') }}</nuxt-link></li>
        </ol>
      </div>
    </div>

    <div class="models">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="text-x5">{{ $t('menu[5]') }}</h1>
        </div>
        <div class="entry-content">
          <section class="m-v-50" v-for="(type, key) in page_data.categories" :key="key">
            <h3 class="text-x4">{{type.name}}</h3>
            <div class="models-items boxes-4 figure-m-v-30">
              <figure v-for="(model, key) in type.models" :key="key" >
                <div>
                  <div class="img-content" >
                    <nuxt-link exact :to="localePath(model.url)">
                      <img :src="model.image">
                    </nuxt-link>
                  </div>
                  <div class="desc-content">
                    <div class="car-card__name">
                      <nuxt-link exact :to="localePath(model.url)">{{model.name}}</nuxt-link>
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
}
</script>