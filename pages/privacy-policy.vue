<template>
  <div class="main-body offset-header" header-opacity>
    <div class="special">
      <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <!-- <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('/about')">{{ $t('menu[23]') }}</nuxt-link></li> -->
              <li><nuxt-link to="">{{page_data.seo.title}}</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header" v-html="page_data.header.text"></div>
        </div>
      </div>
      <div class="block-content bg-color-gray-1">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16 text-item">
          <div v-html="page_data.content"></div>
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

<style lang="scss">
  .download-links{
    a[href*=".pdf"], a[href*=".doc"], a[href*=".xls"]{
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 10px;
      &:before{
        content: "";
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTIuNzUuNzVoOS45NGw0LjU2IDQuNTZ2MTMuOTRIMi43NVYuNzV6IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMTIuNSAxdjVoNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+);
        display: inline-block;
        width: 20px;
        background-size: contain;
        height: 20px;
        margin-right: 10px;
      }
      &:after{
        content: "";
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTUgOGw1IDUgNS01IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+PC9zdmc+);
        display: inline-block;
        width: 20px;
        background-size: contain;
        height: 20px;
        margin-left: 5px;
      }
    }
  }
</style>