<template>
  <div class="main-body offset-header accessory">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link :to="localePath('/about/')">Бренд Kia</nuxt-link></li>
          <li><nuxt-link :to="localePath('/about/technologies')">Технологии</nuxt-link></li>
          <li><nuxt-link to="">Диск легкосплавный, 16 дюймов</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="block-content">
      <div class="container-p">
        <div class="link-content fw-6 mv-6">
          <nuxt-link :to="localePath('/about/technologies')" class="align-center mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path data-v-fde3dc5a="" d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
            В каталог
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="block-content">
      <div class="container-p pt-2 pb-5">
        <div class="entry-header">
          <h2>{{page_data.name}}</h2>
        </div>
      </div>
    </div>
    <div class="accessory-content">
      <div class="container-p">
        <div class="flex entry-content row-3">
          <div class="accessory-summary pb-8 ph-3">
            <div class="accessory-summary__wrapper pt-3">
              <div class="cap-content flex jc-between align-center mv-5">
                <div class="price text-s1-b">{{page_data.price | spaceBetweenNum}} {{$t("other.price_text")}}</div>
                <div class="cnt-box">
                  <span class="cnt-box-btn" @click="function(){if(counter >= 0) return counter--}"></span>
                  <div class="form-control-cnt">
                    <input type="text" autocomplete="on" v-model="counter">
                  </div>
                  <span class="cnt-box-btn plus" @click="counter++"></span>
                </div>
              </div>
              <span class="btn-def box-xs-10 mb-5">
                <a href="">Заказать</a>
              </span>
              <div class="details-def mv-3">
                <dl v-for="(item, key) in page_data.options" :key="key">
                  <dt>{{item.name}}</dt>
                  <dd>{{item.value}}</dd>
                </dl>
              </div>
              <br><hr><br>
              <div class="text-item" v-if="page_data.technical.length">
                <div class="color-gray-4">Технические особенности:</div>
                <br>
                <ul>
                  <li v-for="(item, key) in page_data.technical" :key="key">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accessory-info ph-3 pb-8">
            <div class="accessory-info-wrapper ph-16">
              <div class="accessory-info-img m-auto mt-8">
                <div class="img-content mv-3">
                  <img :src="page_data.image" :alt="page_data.name">
                </div>          
                <div class="color-gray-5 mt-1 text-s3">Изображение может не соответствовать выбранной комплектации. Цвет аксессуара может отличаться от представленного на данном сайте.</div>
              </div>
              <div class="desc-content mv-8">
                <div class="mv-10">
                  <h3>Описание</h3>
                  <div v-html="page_data.description"></div>
                </div>
                <div class="mv-10">
                  <h3>Подходит для модели</h3>
                  <div class="mt-3">
                    <template v-for="(item, key) in page_data.models">{{item}}<template v-if="page_data.models.length-1 > key">, </template></template>
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
      title: "",
      meta: [
        {
          content: ""
        }
      ],
    }
  },
  data(){
    return {
      counter: 0,
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
