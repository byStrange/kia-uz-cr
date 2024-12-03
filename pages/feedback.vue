<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link to="">{{ $t('menu[10]') }}</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="feedback">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="text-x5">{{$t("feedback[0]")}}</h1>
        </div>
      </div>
      <div class="feedback-content">
        <div class="container-p">
          <div class="flex-wrapper">
            <div class="col-2 p-v-20">
              <div class="form-content box-md-5 m-auto">
                <form action="https://cdn.kia.uz/feedback.php" method="POST" formaj>
                  <input type='hidden' name='anti-bot-a' id='anti-bot-a' :value="new Date().getFullYear()"/>
				          <input type='text' name='anti-bot-q' id='anti-bot-q' size='30' value='19'  class="hide" />
                  <input type="text" name="type" value="feedback" class="hide">
                  <p>{{page_data.model.text}}</p>
                  <div class="input-content m-v-30">
                    <input type="text" name="name" :placeholder="page_data.input.name"  class="form-control" required>
                  </div>
                  <!-- <div class="input-content m-v-30">
                    <input type="text" name="fam" :placeholder="page_data.input.alias"  class="form-control" required>
                  </div> -->
                  <div class="input-content m-v-30">
                    <input value="+998" name="phone" type="text" class="form-control" v-facade="'+### (##) ###-##-##'" placeholder="+998 (__) ___−__−__" required minlength="19">
                  </div>
                  <!-- <div class="input-content m-v-30">
                    <input type="email" name="email" placeholder="E-mail"  class="form-control" required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="my@email.com">
                  </div> -->
                  <!-- <div class="input-content m-v-30">
                    <textarea :placeholder="page_data.input.dop" name="comment" class="form-control" required></textarea>
                  </div> -->
                  <div class="input-content m-v-30">
                    <div class="m-b-10">{{$t('form.other[1]')}}</div>
                    <div class="models-filter">
                      <select class="js-select" name="question">
                        <option value="">{{page_data.select.selected}}</option>
                        <option v-for="(item, key) in page_data.select.selects" :key="key">{{item}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="iagree m-v-30">
                    <label class="flex" role="button">
                      <input type="checkbox" name="iagree" class="hide" required>
                      <span class="checkbox-style-1"></span>
                      <span class="p-l-20" v-html="page_data.model.accept"></span>
                    </label>
                  </div>
                  <span class="btn-def m-v-30">
                    <button type="submit">{{page_data.model.button}}</button>
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
      })
      return {
        page_data
      }
    }catch(e){
      error(e);
    }
  },
  mounted(){
    
  },
}
</script>