<template>
  <div class="main-body accessories offset-header">
    <div class="options-bnr relative card-top">
      <div class="container-p relative">
        <div class="flex-adaptive align-center justify-c-between">
					<div class="breadcrumb-container">
						<ol class="breadcrumb">
							<li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
							<li><nuxt-link to="">Аксессуары</nuxt-link></li>
              <li><nuxt-link to="">Каталог автомобилей</nuxt-link></li>
						</ol>
					</div>
        </div>
        <div class="entry-intro">
          <div class="relative">
            <h2>Аксессуары</h2>
          </div>
        </div>
      </div>
    </div>
		<div class="accessories-header">
			<div class="accessories-header-content">
				<div class="container-p pv-10">
          <div class="bar-width">
            <!-- <select class="js-select" name="question" v-model="filter_request.model">
              <option value="">Выберите модель</option>
              <option v-for="(item, key) in page_data.models" :key="key" :value="item.id">{{item.name}}</option>
            </select> -->
              
            <multiselect 
              @select="filter"
              deselect-label="Can't remove this value"
              v-model="filter_request.model" 
              placeholder="Выберите модель"
              track-by="name" label="name"
              :allow-empty="false"
              :searchable="false"
              :show-labels="false"
              :options="page_data.models">
              <template slot="singleLabel" slot-scope="{ option }">
                <span>{{option.name}}</span>
              </template>
            </multiselect>
          </div>
				</div>
			</div>
		</div>
		<div class="options-entry scrolled-down">
			<div class="container-p relative">
				<div class="config-sidebar">	
					<div class="config-filter">
            <div>
              <h4>Фильтры</h4>
            </div>
						<div class="config-filter-items">
              <div class="collapse-content">
                <fieldset v-for="(item, key) in page_data.categories" :key="key" class="item accordion-item">
                  <a href=".item" class="title-click" tc-closest tc>{{item.name}}<i class="fa fa-angle-up"></i></a>
                  <div class="section-body" tc-closest-body>
                    <div class="section-body-wrapper">
                      <ul>
                        <li v-for="(itemSub, key) in item.subcategories" :key="key">
                          <label role="button" class="align-center m-v-15">
                            <input type="checkbox" name="categories" class="none" :value="itemSub.id" v-model="filter_request.categories" @change="filter">
                            <span class="checkbox-style-1"></span>
                            <span class="m-l-10">{{itemSub.name}}</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
              </div>
						</div>
					</div>
				</div>
				<div class="config-details">
					<div class="wrapper">
						<div class="config-content">
              <div class="config-content-panel">
                <div class="cnt-content pv-8">
                  {{page_data.items.length}}
                  <span v-if="page_data.items.length == 1">аксессуар</span> 
                  <span v-else>аксессуара</span> 
                </div>
              </div>
              <div class="accessories-items row-3 mt-2">
                <div class="item" v-for="(item, key) in accessories_items" :key="key">
                  <div class="item-wrapper">
                    <nuxt-link :to="$route.path+item.id">
                      <div class="img-content">
                        <figure>
                          <img :src="item.image" :alt="item.name">
                        </figure>
                      </div>
                      <div class="desc-content">
                        <span>{{item.name}}</span>
                        <p class="color-gray">{{item.id}}</p>
                        <span class="price">{{item.price | spaceBetweenNum}} сум</span>
                      </div>
                    </nuxt-link>
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
      accessories_items: [],
      filter_request: {
        categories: [],
        offset: "",
        model: "",
        articul: "",
        sort: "",
      },
    }
  },
  created(){
     this.accessories_items = this.page_data.items;
	},
  methods: {
    async filter(name, val){
      var req = { ...this.filter_request }
      req["categories"] = req["categories"].toString()
      req["model"] = req["model"].id
      var v = $.param(req);
      
      console.log(v);
      var dataJson = await this.$axios.$get("https://api.kia.uz/"+this.$route.path+"/"+"?"+v);
      this.accessories_items = dataJson.items;
      //console.log(dataJson, val);
    },
  },
  mounted() {
		var v = this;
		$('.config-sidebar').theiaStickySidebar({
			//additionalMarginBottom: -300,
			additionalMarginTop: 0,
			defaultPosition: "absolute"
		});

		$('[style="transform: none;"]').removeAttr("style")
  },
}
</script>
