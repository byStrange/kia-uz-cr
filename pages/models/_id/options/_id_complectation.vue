<template>
  <div class="main-body model-options-compl offset-header">
    <div class="entry-header">
      <div class="container-p relative">
        <div class="flex-adaptive align-center justify-c-between">
          <div class="breadcrumb-container">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('/models')">{{ $t('menu[1]') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('/models/'+$route.params.id+'/desc')">{{page_data.name}}</nuxt-link></li>
              <li><nuxt-link :to="localePath('/models/'+$route.params.id+'/options')">{{$t("model_header[1]")}}</nuxt-link></li>
              <li><nuxt-link to="">{{page_data.complName}}</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="link-back pb-6 pt-1">
          <nuxt-link :to="localePath('/models/'+$route.params.id+'/options')" class="hover-aunderline btn-link-1 inline-block font-size-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-v-fde3dc5a="" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2" data-v-fde3dc5a=""></path></svg>
            <span>{{$t("model[9]")}}</span>
          </nuxt-link>
        </div>
        <div class="model-options-compl-info pb-8 pt-2">
          <div class="text-x5 desktop:text-x4 pb-2">{{page_data.name}} {{page_data.complName}}</div>
          <h3 class="price fw-7 font-size desktop:text-x5">{{page_data.price | spaceBetweenNum}} {{$t("other.price_text")}}</h3>
        </div>
      </div>
    </div>
    <div class="conf-main">
      <div class="entry-content">
        <div class="conf-summary">
          <div class="showroom" :class="{'pano-active': panoActive}">
            <div class="container-p relative" style="min-height: 100px;">
              <div class="showroom-header">
                <div class="showroom-typeselect left">
                  <ul class="list">
                    <li :class="{'active': !panoActive}" v-if="Object.keys(currentExterior).length">
                      <a @click="panoActive = false" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                      <span>{{$t("showroom.exterior")}}</span>
                    </li>
                    <li :class="{'active': panoActive}" v-if="Object.keys(currentInterior).length">
                      <a @click="panoActive = true" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                      <span>{{$t("showroom.interior")}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="container-p relative" v-if="!panoActive && page_data.colors.bodyColors.length">
              <div class="showroom-main m-v-10" v-if="currentExterior.colorFolder">
                <div
                    class="cloudimage-360"
                    :data-folder="currentExterior.colorFolder"
                    data-filename="{index}.png"
                    data-spin-reverse
                    data-amount="72">
                    <div class="showroom-item-cover flex align-center">
                      <div class="flex box-xs-10 align-center">
                        <img :src="currentExterior.colorFolder+'/1.png'" width="100%">
                      </div>
                    </div>
                </div>
                <div class="color-gray-4 text-center m-b-30">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="showroom__three-sixty-icon"><path d="M9.724 9.472c0-1.584-.912-2.28-2.82-2.28-.6 0-1.632.18-2.268.468v1.296c.816-.276 1.5-.396 2.268-.384.864.012 1.164.336 1.164.924 0 1.056-.948 1.284-1.752 1.284H5.68v1.392h.636c1.212 0 2.064.228 2.064 1.332-.036.816-.42 1.212-1.476 1.212-.768 0-1.344-.06-2.556-.348v1.308a8.962 8.962 0 002.7.444c1.848 0 2.988-.792 2.988-2.616 0-1.26-.552-1.896-1.416-2.196.672-.372 1.104-.96 1.104-1.836zM14.343 14.788c-1.488 0-1.584-1.2-1.584-2.988a5.527 5.527 0 011.572-.252c.972 0 1.38.384 1.38 1.548 0 1.116-.324 1.692-1.368 1.692zm.324-6.228c.612 0 1.308.108 2.124.312V7.6a7.966 7.966 0 00-2.436-.408c-1.668 0-3.264.744-3.264 4.764 0 2.628.912 4.176 3.264 4.176 2.064 0 3.012-1.272 3.012-3.156 0-1.776-.96-2.808-2.736-2.808-.528 0-1.176.096-1.836.3.132-1.548.924-1.908 1.872-1.908zM21.62 16.132c1.968 0 3.132-1.344 3.132-4.428 0-3.084-1.164-4.512-3.132-4.512-1.968 0-3.12 1.428-3.12 4.512 0 3.096 1.152 4.428 3.12 4.428zm0-1.344c-1.116 0-1.464-1.008-1.464-3.084 0-2.028.348-3.168 1.464-3.168s1.476 1.14 1.476 3.168c0 2.076-.36 3.084-1.476 3.084z" fill="currentColor"></path><path d="M15 23c-7.732 0-14-2.727-14-6.09 0-1.263.885-2.437 2.4-3.41m17.667 8.9C25.76 21.417 29 19.328 29 16.91c0-1.263-.885-2.437-2.4-3.41" stroke="currentColor" stroke-width="1.5"></path><circle cx="27.5" cy="6.5" r="1.75" stroke="currentColor" stroke-width="1.5"></circle><path d="M12 19l4 4-4 4" stroke="currentColor" stroke-width="1.5"></path></svg>
                  <p><small>{{$t("showroom.notify")}}</small></p>
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

            <div class="container-p relative" v-if="page_data.colors.bodyColors.length || page_data.colors.interiorColors.length" style="min-height: 100px;">
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
                        <a href="javascript:;" @click.stop.prevent="colorChangeExterior(color)">
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
              </div>
            </div>
          </div>
          <div class="conf-summary-id" v-if="false">
            <div class="wrapper-content">
              <b>{{$t("configurator[13]")}}</b>
              <a href="#" id="link-copy-code" 
                  @click.prevent.stop="copyUrlCode(summaryCode, $event)" 
                  class="flex align-center" 
                  data-placement="bottom"
                  data-delay='{ "show": 500, "hide": 100 }'
                  data-trigger="focus" 
                  role="button"
                  title="Ссылка скопированно">
                <input id="copyUrlCode" class="bury">
                <div class="conf-summary-code m-h-15"><u>{{summaryCode}}</u></div>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M14.734 11.239l2.706-2.955c.747-.816.747-2.14 0-2.956l-2.03-2.216c-.746-.816-1.958-.816-2.705 0L8.647 7.545c-.747.816-.747 2.139 0 2.955l1.015 1.108m-3.72-2.586L2.56 12.716c-.747.816-.747 2.14 0 2.956l2.03 2.216c.746.816 1.957.816 2.705 0l4.735-5.172c.747-.816.746-2.139-.001-2.955l-1.014-1.108" stroke="currentColor" stroke-width="1.5"></path></svg>
              </a>
            </div>
          </div>
          <div class="container-p">
            <div class="conf-summary-params" >
              <div class="wrapper-content">
                <div class="item col-md-6">
                  <div class="fw-6 font-size-nm m-b-20">{{$t("configurator[4]")}}</div>
                  <div class="info-content">
                    <dl><dt>{{$t("configurator[3]")}}</dt> <dd>{{ page_data.year }}</dd></dl> 
                    <dl><dt>{{$t("configurator[6]")}}</dt> <dd>{{page_data.engine}}</dd></dl> 
                    <dl><dt>{{$t("configurator[7]")}}</dt> <dd>{{page_data.gear}}</dd></dl> 
                    <dl><dt>{{$t("configurator[8]")}}</dt> <dd>{{page_data.privod}}</dd></dl>
                  </div>
                </div>
                <div class="item col-md-6">
                  <div class="fw-6 font-size-nm m-b-20">{{$t("showroom.color")}}</div>
                  <div class="info-content">
                    <dl>
                      <dt>{{$t("showroom.exterior")}}</dt>
                      <dd><div class="flex align-center"><span>{{currentExterior.name}}</span> <figure :style="'background-image: url(\''+currentExterior.icon+'\');'"></figure></div></dd>
                    </dl>
                    <dl>
                      <dt>{{$t("showroom.interior")}}</dt>
                      <dd><div class="flex align-center"><span>{{currentInterior.name}}</span> <figure :style="'background-image: url(\''+currentInterior.icon+'\');'"></figure></div></dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div class="config-details">
              <section class="item active" v-if="page_data.standart">
                <a href=".item" class="title-click" tc tc-closest>{{$t("configurator[9]")}}<i class="fa fa-angle-up"></i></a>
                <div class="section-body">
                  <div class="section-body-wrapper">
                    <div class="list-block-body" v-for="(item, key) in page_data.standart" :key="key">
                      <h4>{{item.name}}</h4>
                      <ul>
                        <li v-for="(text, key) in item.values" :key="key">
                          <span>{{text}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section class="item">
                <a href=".item" class="title-click" tc-closest tc>{{$t("configurator[14]")}} {{page_data.name}} {{page_data.complName}}<i class="fa fa-angle-up"></i></a>
                <div class="section-body">
                  <div class="section-body-wrapper">
                    <div class="list-block-body">
                      <ul>
                        <li v-for="(value, key) in page_data.mainOptions" :key="key">{{value}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section class="item" v-for="(gOption, key) in page_data.options" :key="key">
                <a href=".item" class="title-click" tc-closest tc>{{gOption.name}}<i class="fa fa-angle-up"></i></a>
                <div class="section-body">
                  <div class="section-body-wrapper">
                    <div class="list-block-body">
                      <ul>
                        <li v-for="(value, key) in gOption.values" :key="key">{{value}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section class="item tech-list">
                <a href=".item" class="title-click" tc-closest tc>{{$t("properties[5]")}}<i class="fa fa-angle-up"></i></a>
                <div class="section-body">
                  <div class="section-body-wrapper">
                    <div class="list-block-body">
                      <div v-for="(setting, key) in page_data.settings" :key="key">
                        <h4>{{setting.name}}</h4>
                        <ul>
                          <li v-for="(item, key) in setting.values" :key="key">
                            <div class="color-gray pb-2">{{item.name}}</div>
                            <div>{{item.value}}</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="conf-feedback" id="conf-feedback">
        <div class="entry-content">
          <div class="form-content pt-6 desktop:pt-20 pb-12 desktop:pb-20">
            <div>
              <h3>{{$t("configurator_feedback[0]")}} {{page_data.name}} {{page_data.complName}}</h3>
              <p>{{$t("configurator_feedback[0]")}}</p>
            </div>
            <form action="https://cdn.kia.uz/feedback.php" method="POST" formaj>

              <input type='hidden' name='anti-bot-a' id='anti-bot-a' :value="new Date().getFullYear()"/>
				      <input type='text' name='anti-bot-q' id='anti-bot-q' size='30' value='19'  class="hide" />
              <input type="text" value="carBook" name="type" class="hide">
              <input type="text" name="carName" class="hide" :value="page_data.name+' '+page_data.complName">
              <input type="text" name="engine" class="hide" :value="page_data.engine">
              <input type="text" name="transmission" class="hide" :value="page_data.gear">
              <input type="text" name="unit" class="hide" :value="page_data.privod">
              <input type="text" name="bodyColor" class="hide" :value="currentExterior.name">
              <input type="text" name="interColor" class="hide" :value="currentInterior.name">

              <div class="row">
                <div class="input-content m-v-30 col-md-6 p-h-15">
                  <input type="text" name="name" :placeholder="$t('form.name')"  class="form-control" required>
                </div>
                <div class="input-content m-v-30 col-md-6 p-h-15">
                  <input value="+998" name="phone" type="text" class="form-control" v-facade="'+### (##) ###-##-##'" placeholder="+998 (__) ___−__−__" required minlength="19">
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
                <button type="submit">{{$t("form.book")}}</button>
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
      </div>

    </div>
 
  </div>
</template>










<script>
import { fetchPath } from '~/api/otherApi';

export default {
  head() {
    return {
      title: 'Комплектации и цены',
      meta: [
        {
          content: 'Комплектации и цены'
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
  data(){
    return{
      panoActive: false,
			currentExterior: {},
      currentInterior: {},
    }
  },
  methods: {
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
  },
	created(){
    if(this.page_data.colors.bodyColors.length)
		  this.currentExterior = this.page_data.colors.bodyColors[0]
    if(this.page_data.colors.interiorColors.length)
		  this.currentInterior = this.page_data.colors.interiorColors[0]
	},
  mounted() {
    // Активация showroom 360 при клике
    $(document).on("click", ".showroom-item-cover", ()=>{
      window.CI360.init();
    })
  },
}
</script>
