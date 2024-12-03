<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link :to="localePath('/models')">{{ $t('menu[1]') }}</nuxt-link></li>
          <li><nuxt-link :to="localePath('/models/'+$route.params.id+'/desc')">{{page_data.name}}</nuxt-link></li>
          <li><nuxt-link to="">{{$t("model_header[5]")}}</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="feedback">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="	text-x5">{{$t("model_header[5]")}}</h1>
        </div>
      </div>
      <div class="feedback-content">
        <div class="container-p">
          <div class="flex-wrapper">
            <div class="col-1 p-v-20">
              <h3>{{page_data.name}}</h3>
              <div class="img-content text-center">
                <img :src="page_data.car">
              </div>
              <div class="prive-content align-center justify-c-between m-v-20">
                <span>{{$t("callback[1]")}}</span>
                <big>
                  <b>
                    <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                    {{page_data.minPrice | spaceBetweenNum}} {{ $t('other.price_text') }}
                    <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                  </b>
                </big>
              </div>
            </div>	
            <div class="col-2 p-v-20">
              <p>
                <b>{{$t("callback[2]")}}</b><br>
                <small class="color-gray">{{$t("callback[3]")}}</small>
              </p>
              <div class="form-content box-md-6">
                <form action="https://cdn.kia.uz/feedback.php" method="POST" formaj>
                  <input type='hidden' name='anti-bot-a' id='anti-bot-a' :value="new Date().getFullYear()"/>
				          <input type='text' name='anti-bot-q' id='anti-bot-q' size='30' value='19'  class="hide" />
                  <input type="text" value="testdrive" name="type" class="hide">
                  <input type="text" :value="page_data.name" name="carName" class="hide">
                  <div class="input-content m-v-30">
                    <input type="text" name="name" :placeholder="$t('form.name')"  class="form-control" required>
                  </div>
                  <div class="input-content m-v-30">
                    <input value="+998" name="phone" type="text" class="form-control" v-facade="'+### (##) ###-##-##'" placeholder="+998 (__) ___−__−__" required minlength="19">
                  </div>
                  <div class="input-content">
                    <textarea name="comment" :placeholder="$t('form.comment')" class="form-control"></textarea>
                  </div>
                  <div class="iagree m-v-30">
                    <label class="flex" role="button">
                      <input type="checkbox" name="iagree" class="hide" required>
                      <span class="checkbox-style-1"></span>
                      <span class="p-l-20">
                        {{$t("form.iagree")}}
                      </span>
                    </label>
                  </div>
                  <span class="btn-def">
                    <button type="submit">{{$t("form.send")}}</button>
                  </span>
                </form>
                <div class="form-success-block">
                  <div class="form-success-block-wrapper pv-10">
                    <h3>{{$t("form.response[0]")}}</h3>
                    <br>
                    <p>{{$t("form.response[1]")}}</p>
                    <span class="btn-def mv-8">
                      <nuxt-link exact :to="localePath('index')" class="hover-aunderline"><b>{{$t("btns.back_main")}}</b></nuxt-link>
                    </span>
                  </div>
                </div>
              </div>
            </div>	
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { fetchPath } from '~/api/otherApi';


export default {
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    try{
      const page_data = await fetchPath($axios, {
        path: '/models/'+route.params.id+'/callback'
      })
      return {
        page_data
      }
    }catch(e){
      error(e);
    }
  },
  head() {
    return {
      title: this.page_data.seo.meta_title,
      meta: [
        {
          name: "description",
          content: this.page_data.seo.meta_descr
        },
        {
          name: "keywords",
          content: this.page_data.seo.meta_keywords
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  .breadcrumb-container{
    padding-top: 20px;
  }
</style>