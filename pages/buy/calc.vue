<template>
  <div class="main-body relative conf offset-header" scrollf>
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link to="">{{$t("menu[7]")}}</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="conf-header">
      <div class="container-p">
        <div class="entry-header">
          <h2>{{$t("menu[7]")}}</h2>
        </div>
        <div class="conf-progress-bar">
          <ul class="list">
            <li v-for="(step, key) in steps" :key="key"
                :class="{'active': currentStepNum == step.num}">
              <nuxt-link to="" v-if="step.num == 1">
                <b>{{step.text}}</b>
                <p>{{step.description}}</p>
              </nuxt-link>
              <template v-else>
                <b>{{step.text}}</b>
                <p>{{step.description}}</p>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="conf-content">
      <div class="container-p">
        <div class="conf-steps conf-step-1" :class="{'active': currentStepNum == 1}">
          <div class="conf-crs m-v-45">
            <div class="owl-carousel owl-btn-2">
              <figure v-for="(model, key) in page_data.models" :key="key" :model-line-id="model.name">
                <a href="javascript:;">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <img :src="model.image" :alt="model.name">
                    </div>
                    <div class="desc-content">
                      <h4>{{model.name}}</h4>
                      <p>
                        <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                        {{model.price | spaceBetweenNum}} {{ $t('other.price_text') }}
                        <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                      </p>
                    </div>
                  </div>
                </a>
              </figure>
            </div>
          </div>
          <div class="conf-crs-main">
            <div class="owl-carousel owl-btn-2">
              <figure v-for="(model, key) in page_data.models" :key="key" :model-line-id="model.name">
                <div class="fig-wrapper">
                  <div class="desc-content">
                    <div class="text-x5 desktop:text-x4">{{model.name}}</div>
                  </div>
                  <div class="img-content m-t-30">
                    <nuxt-link :to="localePath(model.url)">
                      <img :src="model.image" :alt="model.name">
                    </nuxt-link>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="conf-down">
      <div class="container-p">
        <div class="flex-wrapper">
          <span class="btn-def btn-step-back" v-if="currentStepNum > 1">
            <a href="javascript:;" currentstep="0" @click="confPrevStep" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              {{$t("configurator[1]")}}
            </a>
          </span>
          <span class="btn-def">
            <a href="javascript:;" currentstep="0" @click="confNextStep">{{$t("configurator[2]")}}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPath } from '~/api/otherApi';
import { configuratorModels } from '~/api/otherApi';


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
      
      var page_data = await configuratorModels(store.state.lang, $axios)
      return {
        page_data
      }
    }catch(e){
      error(e);
    }
  },
  components: {
  },
  data(){
    return {
      currentStepNum: 1,
      selectModelId: "",

      steps: [
        {
          num: 1,
          text: "01",
          description: this.$t('configurator_steps[1]')
        },
        {
          num: 2,
          text: "02",
          description: this.$t('configurator_steps[2]')
        },
        {
          num: 3,
          text: "03",
          description: this.$t('configurator_steps[3]')
        },
        {
          num: 4,
          text: "04",
          description: this.$t('configurator_steps[4]')
        },
        {
          num: 5,
          text: "05",
          description: this.$t('configurator_steps[5]')
        },
        {
          num: 6,
          text: "06",
          description: this.$t('configurator_steps[0]')
        },
      ],
    }
  },
  mounted(){

    var v = this;
		window.owlCrs = $(".conf-crs .owl-carousel").owlCarousel({
			nav: true,
			loop: false,
			dots: false,
			dotsEach: false,
			//slideBy: 2,
			autoplay: false,
			autoplayTimeout: false,
			autoWidth: true,
			touchDrag: false,
			mouseDrag: false,
			center: false,
			autoheight: true,
			merge: false,
			responsive:{
	
			},
			navText : owlBtn,
			margin: 30
    });
		window.owlCrsMain = $(".conf-crs-main .owl-carousel").owlCarousel({
			nav: true,
			loop: false,
			//items: 3,
			dots: true,
			dotsEach: false,
			//autoplay: true,
			//autoplayTimeout: 7000,
			autoheight: true,
			touchDrag: true,
			mouseDrag: true,
			//smartSpeed: 0,
			responsive:{
				0:{items:1},
				991:{items:1}
			},
			navText : owlBtn,
			margin: 0
    });


    var owlCrsItems = owlCrs.find(".owl-item");
    var modelLineAttrName = "model-line-id"
    v.selectModelId = owlCrs.find(".owl-item.active figure").attr(modelLineAttrName);

    owlCrs.on('click', '.owl-item', (e)=>{
      var target = $(e.currentTarget);
      owlCrsItems.removeClass('is-selected')
      target.addClass('is-selected');
      var modelId = target.find("["+modelLineAttrName+"]").attr(modelLineAttrName);
      var index = owlCrsMain.find("["+modelLineAttrName+"='"+modelId+"']").closest(".owl-item").index()
      owlCrsMain.find(".owl-dot").eq(index).click()
      console.log(target, index);
      v.selectModelId = modelId;
    });
    owlCrsMain.on('changed.owl.carousel', function(e) {
      var target = $($(e.currentTarget).find('.owl-item').eq(e.page.index));
      owlCrsItems.removeClass('is-selected');
      var modelId = target.find("["+modelLineAttrName+"]").attr(modelLineAttrName);
      owlCrs.find("["+modelLineAttrName+"='"+modelId+"']").closest(".owl-item").addClass('is-selected');
      v.selectModelId = modelId;
    })
    owlCrsItems.eq(0).click();

  },
  methods: {
    async confNextStep(){
      var url;
      this.page_data.models.forEach(e => {
        if(e.name == this.selectModelId)
          url = e.url_calc
      });
      this.$router.push({path: url});
    },
    async confPrevStep(){
      
    }
  }
}

</script>