<template>
  <div class="main-body offset-header" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white" :style="'background-image: url('+page_data.header.image+');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('/about')">{{ $t('menu[23]') }}</nuxt-link></li>
              <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header" v-html="page_data.header.text">
          </div>
        </div>
      </div>
    </div>

    <div class="kiaworld-sponsorship">
      <div class="g-padding p-v-md-40">
        <div class="g-container">
          <div class="g-margin">
            <div class="kiaworld-sponsorship-items">
              <figure v-for="(content, key) in page_data.content" :key="key">
                <div class="flex-adaptive">
                  <div class="desc-content text-item">
                    <hr>
                    <br>
                    <div class="text-x4 m-v-20">{{content.name}}</div>
                    <div v-html="content.text"></div>
                  </div>
                  <div class="img-content">
                    <img :src="content.image">
                  </div>
                </div>
              </figure>
            </div>
          </div>
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