<template>
  <div class="model-header header-scroll scrolled-down down">
    <div class="container-p">
      <div class="model-header-panel">
        <div class="align-center">
          <span class="name-content">{{page_data.name}}</span>
          <span class="price-content" v-if="price_min">
            <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
            {{price_min | spaceBetweenNum}} {{ $t('other.price_text') }}
            <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
          </span>
          <a class="flex m-l-15 hidden-xs hidden-sm" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
          <a href=".list-add-sub" class="btn-options visible-xs visible-sm" data-toggle="dropdown"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg></a>
        </div>
        <div class="model-header-nav" v-if="!page_data.soon">
          <ul class="list list-main">
            <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/desc/')">{{ $t('model_header[0]') }}</nuxt-link></li>
            <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/options/')">{{ $t('model_header[1]') }}</nuxt-link></li>
            <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/properties/')">{{ $t('model_header[2]') }}</nuxt-link></li>
            <li v-if="page_data.priceList"><a :href="page_data.priceList" target="_blank">{{ $t('model_header[7]') }}</a></li>
            <li v-if="page_data.techPdf"><a :href="page_data.techPdf" target="_blank">{{ $t('model_header[9]') }}</a></li>
            <!-- <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/calc/')">{{ $t('model_header[3]') }}</nuxt-link></li> -->
            <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/callback/')">{{ $t('model_header[4]') }}</nuxt-link></li>
            <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/testdrive/')">{{ $t('model_header[5]') }}</nuxt-link></li>
          </ul>
          <div class="list-add">
            <a href=".list-add-sub" class="btn-options hidden-xs hidden-sm" data-toggle="dropdown">
              <div class="icm-area"><svg width="18" height="4" viewBox="0 0 18 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></svg></div>
            </a>
            <div class="list-add-sub">
              <ul>
                <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/desc/')">{{ $t('model_header[0]') }}</nuxt-link></li>
                <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/options/')">{{ $t('model_header[1]') }}</nuxt-link></li>
                <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/properties/')">{{ $t('model_header[2]') }}</nuxt-link></li>
                <li v-if="page_data.priceList"><a :href="page_data.priceList" target="_blank">{{ $t('model_header[7]') }}</a></li>
                <li v-if="page_data.techPdf"><a :href="page_data.techPdf" target="_blank">{{ $t('model_header[9]') }}</a></li>
                <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/callback/')">{{ $t('model_header[4]') }}</nuxt-link></li>
                <li v-if="route_id == 'k5'"><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/testdrive/')">{{ $t('model_header[5]') }}</nuxt-link></li>
                <li v-else-if="route_id == 'seltos'"><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/testdrive/')">{{ $t('model_header[5]') }}</nuxt-link></li>
                <li v-else-if="route_id == 'cerato'"><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/testdrive/')">{{ $t('model_header[5]') }}</nuxt-link></li>
                <li v-else-if="route_id == 'sportage'"><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/testdrive/')">{{ $t('model_header[5]') }}</nuxt-link></li>
                <li v-else-if="route_id == 'sorento-pe'"><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/testdrive/')">{{ $t('model_header[5]') }}</nuxt-link></li>

                <!-- <li><nuxt-link active-class="active" :to="localePath('/models/'+route_id+'/calc/')">{{ $t('model_header[3]') }}</nuxt-link></li> -->
              </ul>
            </div>
          </div>
          <div class="list-last">
            <nuxt-link :to="localePath('/models/'+route_id+'/configurator')">{{ $t('model_header[6]') }}</nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['page_data', 'route_id', 'price_min'],
  mounted() {
    console.log(this.$route)
  }
}
</script>
