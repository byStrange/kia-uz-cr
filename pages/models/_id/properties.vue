<template>
  <div class="main-body model-options offset-model-header">

	<Model-header :page_data="page_data" :route_id="$route.params.id" :price_min="page_data.compls[0].price"/>

    <div class="options-bnr relative card-top">
      <div class="container-p relative">
        <div class="flex-adaptive align-center justify-c-between">
					<div class="breadcrumb-container">
						<ol class="breadcrumb">
							<li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
							<li><nuxt-link :to="localePath('/models')">{{ $t('menu[1]') }}</nuxt-link></li>
							<li><nuxt-link :to="localePath('/models/'+$route.params.id+'/desc')">{{page_data.name}}</nuxt-link></li>
							<li><nuxt-link to="">{{$t("model_header[2]")}}</nuxt-link></li>
						</ol>
					</div>
					<div class="link-content" v-if="page_data.pdf">
						<ul class="list-inline font-size-1 mobile:mt-6">
							<li>
								<a :href="page_data.pdf" class="hover-aunderline" :download="page_data.name" target="_blank">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="mr-1" data-v-22b6d7c2=""><path d="M2.75.75h9.94l4.56 4.56v13.94H2.75V.75z" stroke="currentColor" stroke-width="1.5" data-v-22b6d7c2=""></path><path d="M12.5 1v5h4" stroke="currentColor" stroke-width="1.5" data-v-22b6d7c2=""></path></svg>
									<span class="m-l-5">{{$t("model_header[7]")}}</span>
								</a>
							</li>
							<li class="hide">
								<a href="feedback-2.html" class="hover-aunderline">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="mr-1" data-v-3802aeb3=""><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39zM11 5c1.333 0 4 .8 4 4M10 2c2.667 0 8 1.6 8 8" stroke="currentColor" stroke-width="1.5" data-v-3802aeb3=""></path></svg>
									<span class="m-l-5">{{$t("model_header[8]")}}</span>
								</a>
							</li>
						</ul>
					</div>
        </div>
        <div class="entry-intro">
          <div class="relative">
            <h2>{{$t("model_header[2]")}} {{page_data.name}}</h2>
          </div>
        </div>
      </div>
    </div>
		<div class="options-header scrolled-down">
			<div class="options-header-content">
				<div class="container-p">
					<ul class="list">
						<li class="filter-btn">
							<a href=".options-entry" class="align-center justify-center" tc="filter-hidden">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 6.5a2 2 0 104 0 2 2 0 00-4 0zM0 6h3.035a3.5 3.5 0 016.93 0H20v1.5H9.855a3.502 3.502 0 01-6.71 0H0V6zm11.5 7.5a2 2 0 104 0 2 2 0 00-4 0zM0 13h10.035a3.501 3.501 0 016.93 0H20v1.5h-3.145a3.502 3.502 0 01-6.71 0H0V13z" fill="currentColor"></path></svg> 
								<span class="m-l-15">{{$t("properties[0]")}}</span>
							</a>
						</li>
						<li>
							{{page_data.compls.length}}
							<span v-if="page_data.compls.length == 1">{{$t("properties[1]")}}</span> 
							<span v-else>{{$t("properties[2]")}}</span> 
						</li>
						<li class="hide">
							<div>
								<input type="checkbox"  id="checkbox-diff-spec" name="" class="checkbox-style-1 none">
								<label for="checkbox-diff-spec" class="align-center" role="button">
									<span class="checkbox-style-1"></span>
									<span class="m-l-5">{{$t("properties[3]")}}</span>
								</label>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="options-entry scrolled-down filter-hidden">
			<div class="container-p relative">
				<div class="config-sidebar">	
					<div class="config-filter">
						<div class="config-filter-items">
							<fieldset>
								<h4>{{$t("properties[4]")}}</h4>
								<div class="input-items">
									<label role="button" class="align-center m-v-15" 
										v-for="(engine, key) in page_data.engines"
										:key="key">
										<input type="checkbox" name="engineId" class="none" :value="engine.id">
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">{{engine.name}}</span>
									</label>
								</div>
							</fieldset>
						</div>
					</div>
				</div>
				<div class="options-body">
					<div class="wrapper">
						<div class="config-content">
							<div class="config-variants">
								<div class="config-variants-items owl-carousel" v-if="statusCompl">
									<div class="cell" v-for="(complectation, key) in page_data.compls" :key="key" :filter-param="complectation.id">
										<div class="cell-wrapper" >
											<nuxt-link :to="localePath('/models/'+$route.params.id+'/options/'+complectation.id)"><h4>{{complectation.name}} <i class="fa fa-angle-right fw-6"></i></h4></nuxt-link>
											<div>
												<p>
													<template v-for="(engine) in page_data.engines" v-if="engine.id == complectation.engineId">{{engine.name}}</template>
												</p>
												<div class="price-content m-t-15 relative">
													{{complectation.price | spaceBetweenNum}} {{$t("other.price_text")}}
													<span v-if="page_data.helper" data-toggle="tooltip" data-placement="top" class="price-tooltip" :title="page_data.helper" style="color: red;">*</span>
													<div class="new-price" v-if="complectation.dop_price" style="font-size: 12px; margin-top: 3px;">
														<template v-if="$i18n.localeProperties.code == 'ru'">
															{{complectation.dop_price | spaceBetweenNum}} 
															{{ $t('other.price_text') }} 
															{{ page_data.helper_day }} 
														</template>
														<template v-if="$i18n.localeProperties.code == 'uz'">
															{{ page_data.helper_day }} 
															{{complectation.dop_price | spaceBetweenNum}} 
															{{ $t('other.price_text') }} 
															{{ $t('other.from') }}
														</template>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="config-details">
					<section class="item active" v-for="(parentOption, key) in page_data.properties" :key="key">
						<a href=".item" class="title-click" tc tc-closest>{{parentOption.name}}<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item" v-for="(option, key) in parentOption.options" :key="key">
									<div class="config-param-item-wrapper">
										<p class="m-b-15 align-center">{{option.name}}</p>
										<div class="owl-table owl-carousel" v-if="statusCompl">
											<div class="owl-table-item" v-for="(complectation, key) in page_data.compls" :key="key">
												<template v-for="(property) in complectation.properties" v-if="option.id == property.id">
													{{property.value}}
												</template>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</div>
		</div>

  </div>
</template>





<script>
import { fetchPath } from '~/api/otherApi';

import ModelHeader from "@/components/models/Model-header";

export default {
  head() {
    return {
      title: 'Характеристики '+this.page_data.name,
      meta: [
        {
          content: 'Характеристики '+this.page_data.name
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
      filterVisible: true,
      statusCompl: true,
      complectations: [],
    }
  },
  components:{
    ModelHeader
  },
  created(){

	},
  mounted() {
		var v = this;
		$(".list-block-body ul").map(function(i, el){
			if($(el).find("li").length == 0)
				$(el).closest(".list-block-body").addClass("hide");
		})
		
		function activeCarousel(){
			window.configCrs = $(".config-variants-items.owl-carousel").owlCarousel({
					nav: true,
					loop: false,
					items: 2,
					dots: false,
					dotsEach: false,
					//slideBy: 2,
					autoplay: false,
					autoplayTimeout: false,
					autoWidth: true,
					touchDrag: false,
					mouseDrag: false,
					center: false,
					//itemElement: ".cell",
					autoheight: true,
					merge: true,
					responsive:{
						678:{
								mergeFit:true
						}
					},
					navText : owlBtn,
					margin: 0
			});
			


			window.configTableCrs = $(".owl-table.owl-carousel").owlCarousel({
					nav: false,
					loop: false,
					items: 2,
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
					merge: true,
					responsive:{
						678:{
								mergeFit:true
						}
					},
					navText : owlBtn,
					margin: 0
			});


			configCrs.find(".owl-next").on('click', function(event) {
				configTableCrs.trigger('next.owl.carousel');
			})
			configCrs.find(".owl-prev").on('click', function(event) {
				configTableCrs.trigger('prev.owl.carousel');
			})
		}
		activeCarousel();

		$('.config-sidebar').theiaStickySidebar({
			//additionalMarginBottom: -300,
			additionalMarginTop: 60,
			defaultPosition: "absolute"
		});
		
		$('.options-body').theiaStickySidebar({
			//updateSidebarHeight: true,
			additionalMarginBottom: -200,
			disableOnResponsiveLayouts: false,
			additionalMarginTop: 60,
			defaultPosition: "absolute"
		});


		function filter(e){
			
			v.statusCompl = false;
			var el = e.currentTarget;
			var newComplectations = false;
			v.complectations = v.page_data.compls;
			var checkeInputs = $(".config-filter-items input:checked");
			var tempSlos = false;
			
			checkeInputs.map((i, el)=>{
				
				var name = el.name
				var value = el.value
				var obj = {}
				if(name == "options")
					obj[name] = [value];
				else if( isNaN(value*1) ){
					obj[name] = value;
				}else{
					obj[name] = value*1;
				}

				//if(!newComplectations || (tempSlos != name)){
				if(tempSlos != name){
					//console.log(tempSlos,name)
					tempSlos = name
					if(newComplectations)
						v.complectations = newComplectations
					newComplectations = _.filter(v.complectations, obj);
					//console.log('filter');
				}else if(tempSlos == name){
					//v.complectations = newComplectations
					newComplectations = _.concat(newComplectations, _.filter(v.complectations, obj))
					console.log('concat');
				}
				newComplectations = _.uniq(newComplectations)
				//console.log(newComplectations);
			})
			//var s = _.filter(v.complectations, {'engineId': [0, 1]})
			//var s = _.filter(this.complectations, {'engineId': 0,'options': ["986"]})

			if(!newComplectations)
				v.complectations = v.page_data.compls;
			else
				v.complectations = newComplectations
			console.log(newComplectations);
			setTimeout(() => {
				v.statusCompl = true;
				setTimeout(() => {
					try{
					activeCarousel();
					}catch(e){
						console.info(e)
					}
				}, 1);
			}, 1);

			
		}

		$(document).on("change", ".config-filter-items input", filter)
		$('[style="transform: none;"]').removeAttr("style")
  },
}
</script>
