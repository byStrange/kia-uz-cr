<template>
  <div class="header-parent" :class="{'header-op': opacityStyle}" v-if="menu_data">
    <div class="header-hidden"></div>
    <header id="header" class="header header-scroll scrolled-down" :class="{'white-style': !opacityStyle}">
      <!-- HEADER TOP -->
      <div class="header-top">
        <div class="container-p relative">
          <div class="row">
            <div class="header-top-content">
              <div class="menu p-h-15">
                <ul class="menu-list">
                  <li v-for="(item, key) in menu_data.menus" :key="key" v-if="key <= 3">
                    <nuxt-link active-class="active" v-if="!item.subsections" :to="localePath(item.url)">{{item.name}}</nuxt-link>
                    <a v-else href="javascript:;" :subdown-click="item.id">{{item.name}}</a>
                  </li>
                </ul>
              </div>
              <div class="header-logo col-md-2 p-h-15">
                <nuxt-link exact :to="localePath('index')">
                  <svg width="70" height="16" viewBox="0 0 70 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M40.6147 14.1909C40.6147 14.3201 40.651 14.3906 40.7356 14.3906C40.7961 14.3906 40.8444 14.3671 40.9049 14.3319L62.7111 0.552129C63.0979 0.305433 63.4485 0.176211 63.9682 0.176211H68.7671C69.5044 0.176211 70 0.657856 70 1.37445V10.2673C70 11.3363 69.7582 11.9589 68.7671 12.5345L62.9529 15.9295C62.8803 15.9765 62.8078 16 62.7594 16C62.6869 16 62.6265 15.953 62.6265 15.7533V5.36858C62.6265 5.2511 62.5902 5.16887 62.5056 5.16887C62.4452 5.16887 62.3968 5.19236 62.3364 5.22761L46.3927 15.2952C45.9454 15.5771 45.5828 15.6593 45.1718 15.6593H34.5951C33.8577 15.6593 33.3621 15.1777 33.3621 14.4611V1.65639C33.3621 1.56241 33.3138 1.48018 33.2412 1.48018C33.1808 1.48018 33.1324 1.50367 33.072 1.53891L22.5557 7.68282C22.4469 7.74156 22.4227 7.80029 22.4227 7.84728C22.4227 7.89427 22.4348 7.92952 22.5194 8L30.0259 15.2952C30.1226 15.3891 30.1951 15.4714 30.1951 15.5419C30.1951 15.6241 30.0863 15.6711 29.9534 15.6711H23.1601C22.6282 15.6711 22.2172 15.5888 21.9271 15.3069L17.3701 10.8781C17.3217 10.8311 17.2854 10.8076 17.2371 10.8076C17.2008 10.8076 17.1404 10.8311 17.092 10.8546L9.47677 15.3069C9.01744 15.5771 8.70316 15.6593 8.24383 15.6593H1.23295C0.495597 15.6593 0 15.1777 0 14.4611V5.73275C0 4.65198 0.241755 4.04112 1.23295 3.46549L7.0834 0.0469899C7.14384 0.0117476 7.19219 0 7.24055 0C7.32516 0 7.37351 0.0939796 7.37351 0.281938V11.9589C7.37351 12.0764 7.40977 12.1351 7.49439 12.1351C7.54274 12.1351 7.60318 12.0999 7.66362 12.0646L27.427 0.516887C27.8985 0.246696 28.1886 0.164464 28.7325 0.164464H39.3697C40.1071 0.164464 40.6027 0.646109 40.6027 1.3627L40.6147 14.1909Z"/></svg>
                </nuxt-link>
              </div>
              <div class="menu p-h-15">
                <ul class="menu-list justify-c-end">
                  <li v-for="(item, key) in menu_data.menus" :key="key" v-if="key > 3">
                    <nuxt-link active-class="active" v-if="!item.subsections" :to="localePath(item.url)">{{item.name}}</nuxt-link>
                    <a v-else href="javascript:;" :subdown-click="item.id">{{item.name}}</a>
                  </li>
                  <li class="header-phone-btn">
                    <a :href="'tel:'+menu_data.phone" class="hidden-md hidden-lg">
                      <div class="icon-content">
                        <svg class="icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z" stroke="currentColor" stroke-width="1.5"></path></svg>
                        <svg class="dropwater" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z" stroke="currentColor" stroke-width="1.5"></path></svg>
                      </div>
                    </a>
                    <nuxt-link exact :to="`/feedback`" class="hidden-xs hidden-sm">
                      <div class="icon-content">
                        <svg class="icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z" stroke="currentColor" stroke-width="1.5"></path></svg>
                        <svg class="dropwater" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z" stroke="currentColor" stroke-width="1.5"></path></svg>
                      </div>
                    </nuxt-link>
                  </li>
                  <li class="header-lang">
                    <div class="header-lang-wrapper">
                      <a href="javascript:;" @click="changeLanguage('ru')">RU</a>
                      <a href="javascript:;" @click="changeLanguage('uz')">UZ</a>
                      <!-- <nuxt-link :to="$i18n.setLocale('uz')">UZ</nuxt-link> -->
                      <!-- <a href="javascript:;" @click="changeLanguage('')">RU</a>
                      <a href="javascript:;" @click="changeLanguage('uz')">UZ</a> -->
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hide forms -->
      <div class="hide">
        <div id="textcredit" class="textcredit">
          <div class="entry-header">
            <h3>{{menu_data.modals.credit.title}}</h3>
          </div>
          <hr>
          <br>
          <div class="text-item">
            <p>{{menu_data.modals.credit.text}}</p>
          </div>
        </div>
      </div>

      <template v-for="(item, key) in menu_data.menus" v-if="item.subsections">
        <div class="subdown" :subdown="item.id" :key="key">
          <div class="subdown-wrapper">
            <div class="bg-shadow" subdown-click></div>
            <div class="subdown-item">
              <div class="container-p">
                <div class="subdown-item-wrapper">
                  <div class="subdown-menu-items">
                    
                      <div class="item" v-for="(sub, key) in item.subsections" :key="key" v-if="sub.values.length">
                        <div class="color-gray-4 title-content">{{sub.name}}</div>
                        <ul>
                          <li v-for="(subitem, key) in sub.values" :key="key">
                            <a v-if="subitem.url.match('http')" :href="subitem.url" target="_blank" >{{subitem.name}}</a>
                            <nuxt-link v-else :to="localePath(subitem.url)">{{subitem.name}}</nuxt-link>
                          </li>
                        </ul>
                      </div>
                      <div>
                    </div>
                  </div>
                  <div class="subdown-info">
                    <div class="subdown-info-item m-b-30">
                      <div class="color-gray-4 m-b-10">{{$t('other.phone_text_1')}}</div>
                      <div class="text-x3 fw-6"><a :href="'tel:'+menu_data.phoneTwo"><big>{{menu_data.phoneTwo | spacePhone}}</big></a></div>
                    </div>
                    <div class="subdown-info-item m-b-30">
                      <div class="color-gray-4 m-b-10">{{menu_data.phone_title}}</div>
                      <div class="text-x2 fw-6"><a :href="'tel:'+menu_data.phone"><big>{{menu_data.phone | spacePhone}}</big></a></div>
                    </div>
                    <div class="soc">
                      <div class="color-gray-4 m-b-10">{{menu_data.socials_title}}</div>
                      <ul class="m-t-5">
                        <li v-for="(item, key) in menu_data.socials" :key="key">
                          <a :href="item.url" target="_blank" :title="item.name" v-html="item.icon"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="subdown-footer">
                <div class="subdown-footer-items">
                  <figure v-for="(item, key) in menu_data.menu_subbottom" :key="key">
                    <div class="img-content" :style="'background-image: url('+item.image+');'"></div>
                    <div class="desc-content">
                      <h2>
                        <nuxt-link :to="localePath(item.url)">{{item.name}}</nuxt-link>
                      </h2>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

    </header>
		<!-- MIN MENU -->
    <div class="hide">
      <div id="min-menu">
        <ul>
          <li v-for="(item, key) in menu_data.menus" :key="key">
            <nuxt-link :to="localePath(item.url)">{{item.name}}</nuxt-link>
            <ul v-if="item.subsections" class="sub-menu-item">
              <div class="wrapper" v-for="(sub, key) in item.subsections" :key="key" v-if="sub.values.length">
                <div class="menu-item-cap">{{sub.name}}</div>
                <li v-for="(subitem, key) in sub.values" :key="key">
                  <a v-if="subitem.url.match('http')" :href="subitem.url" target="_blank" >{{subitem.name}}</a>
                  <nuxt-link v-else :to="localePath(subitem.url)">{{subitem.name}}</nuxt-link>
                </li>
              </div>
            </ul>
          </li>
          <div class="flex jc-center mv-6 fw-7">
            <a href="javascript:;" @click="changeLanguage('ru')" class="mh-2">RU</a>
            <a href="javascript:;" @click="changeLanguage('uz')" class="mh-2">UZ</a>
          </div>
          <hr>
          <div class="min-menu-footer flex jc-between ph-4">
            <div class="soc mv-1">
              <p>{{menu_data.socials_title}}</p>
              <ul class="mt-1">
                <li v-for="(item, key) in menu_data.socials" :key="key">
                  <a :href="item.url" target="_blank" :title="item.name" v-html="item.icon"></a>
                </li>
              </ul>
            </div>
            <div class="phone-content mv-1">
              <p>{{$t('other.phone_text_1')}}</p>
              <div class="mt-1 text-x3 fw-6 color-1"><a :href="'tel:'+menu_data.phoneTwo">{{menu_data.phoneTwo | spacePhone}}</a></div>
            </div>
          </div>
        </ul>

      </div>
		</div>
		<!-- MIN MENU HEADER -->
		<div class="min-menu-header hidden-md hidden-lg header-scroll scrolled-down">
			<div class="min-menu-top">
				<div class="wrapper-bg"></div>
				<div class="min-menu-bar col-xs-2">
					<a href="#min-menu">
						<div class="bar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</div>
					</a>
				</div>
				<div class="col-xs-8 min-menu-logo-parent">
					<div class="min-menu-logo">
						<div>
              <nuxt-link exact :to="localePath('index')">
                <svg width="70" height="16" viewBox="0 0 70 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M40.6147 14.1909C40.6147 14.3201 40.651 14.3906 40.7356 14.3906C40.7961 14.3906 40.8444 14.3671 40.9049 14.3319L62.7111 0.552129C63.0979 0.305433 63.4485 0.176211 63.9682 0.176211H68.7671C69.5044 0.176211 70 0.657856 70 1.37445V10.2673C70 11.3363 69.7582 11.9589 68.7671 12.5345L62.9529 15.9295C62.8803 15.9765 62.8078 16 62.7594 16C62.6869 16 62.6265 15.953 62.6265 15.7533V5.36858C62.6265 5.2511 62.5902 5.16887 62.5056 5.16887C62.4452 5.16887 62.3968 5.19236 62.3364 5.22761L46.3927 15.2952C45.9454 15.5771 45.5828 15.6593 45.1718 15.6593H34.5951C33.8577 15.6593 33.3621 15.1777 33.3621 14.4611V1.65639C33.3621 1.56241 33.3138 1.48018 33.2412 1.48018C33.1808 1.48018 33.1324 1.50367 33.072 1.53891L22.5557 7.68282C22.4469 7.74156 22.4227 7.80029 22.4227 7.84728C22.4227 7.89427 22.4348 7.92952 22.5194 8L30.0259 15.2952C30.1226 15.3891 30.1951 15.4714 30.1951 15.5419C30.1951 15.6241 30.0863 15.6711 29.9534 15.6711H23.1601C22.6282 15.6711 22.2172 15.5888 21.9271 15.3069L17.3701 10.8781C17.3217 10.8311 17.2854 10.8076 17.2371 10.8076C17.2008 10.8076 17.1404 10.8311 17.092 10.8546L9.47677 15.3069C9.01744 15.5771 8.70316 15.6593 8.24383 15.6593H1.23295C0.495597 15.6593 0 15.1777 0 14.4611V5.73275C0 4.65198 0.241755 4.04112 1.23295 3.46549L7.0834 0.0469899C7.14384 0.0117476 7.19219 0 7.24055 0C7.32516 0 7.37351 0.0939796 7.37351 0.281938V11.9589C7.37351 12.0764 7.40977 12.1351 7.49439 12.1351C7.54274 12.1351 7.60318 12.0999 7.66362 12.0646L27.427 0.516887C27.8985 0.246696 28.1886 0.164464 28.7325 0.164464H39.3697C40.1071 0.164464 40.6027 0.646109 40.6027 1.3627L40.6147 14.1909Z"/></svg>
              </nuxt-link>
						</div>	
					</div>
				</div>
				<div class="col-xs-2 jc-end align-center p-h-5" style="height: 60px;">
					<div>
            <div class="header-phone-btn">
              <a :href="'tel:'+menu_data.phone">
                <div class="icon-content">
                  <svg class="icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z" stroke="currentColor" stroke-width="1.5"></path></svg>
                  <svg class="dropwater" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z" stroke="currentColor" stroke-width="1.5"></path></svg>
                </div>
              </a>
            </div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>


<script>

import { getMenu } from '~/api/otherApi';
import mainjs from '@/static/js/main';

export default {
  data(){
    return {
      opacityStyle: false,
    }
  },
  async created(){
    var vm = this
  },
  watch:{
    $route (to, from){
      setTimeout(() => {
        this.opacityStyle = $('[header-opacity]').length
        mainjs(); 
        minMenu.close()
        window.scrollTo(0, 0);
      }, 120);
    }
  },
  computed: {
    menu_data(){
      if(this.$store.state.menu_data)
        return this.$store.state.menu_data
    }
  },
  methods:{
    async changeLanguage(lang){
      //$nuxt.$router.push("/"+param)
      // this.$i18n.setLocale(lang)
      if (lang === this.$store.state.lang) {
        return false;
      }

      this.$store.dispatch("setLoading", true);

      // await this.$axios.setHeader("localization", lang);
      await this.$i18n.setLocale(lang);
      await this.$i18n.setLocaleCookie(lang);
      await this.$store.dispatch("initLanguage", lang);
      
      
      const menu_data =  await getMenu(this.$axios, lang);
      
      if(menu_data)
        this.$store.dispatch("setMenu", menu_data);


      this.$store.dispatch("setLoading", false);
      // this.$nuxt.refresh();
      // var vm = this
      // if(isNaN(this.$route.params.id*1)){
      //   this.$i18n.setLocale(lang)
      //   console.log("Standart")
      // }else{
      //   var parentPath = this.$route.path.replace(/\d+\/?$/gim, "")
      //   console.log(parentPath)
      //   $nuxt.$router.push(parentPath)
      //   setTimeout(() => {
      //     vm.$i18n.setLocale(lang)  
      //   }, 1);
        
      //   // this.localePath(parentPath)
      // }
      
      // location.replace("/"+param);
    },
  },
  mounted(){
    window.vm_header = this



    // console.log();
    // owl Carousel btn
    window.owlBtn = [
      '<span class="owl-btn previous">'+
        '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="">'+
          '<path d="M6 3L2 7l4 4M2.333 7h12.334" stroke="currentColor" stroke-width="1.5"></path>'+
        '</svg>'+
      '</span>', 
      '<span class="owl-btn next">'+
        '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="">'+
          '<path d="M9 11l4-4-4-4M12.667 7H.333" stroke="currentColor" stroke-width="1.5"></path>'+
        '</svg>'+
      '</span>'
    ]

    this.opacityStyle = $('[header-opacity]').length

   $(document).on("click", ".header a:not([subdown-click])", function(){
      if($("[subdown-click].subdown-active").length)
        $("[subdown-click].subdown-active").trigger("click");
    })
		$(document).on("click", "[subdown-click]", function(){
			var that = $(this)
			var num = that.attr("subdown-click");
      ($("[subdown]")).removeClass("subdown-active");
			if(that.hasClass("bg-shadow")){
				$("a[subdown-click='"+num+"']").trigger("click");
				return;
			}
			if(!that.hasClass("subdown-active")){
				$("a[subdown-click]").removeClass("subdown-active");
				that.add($("[subdown="+num+"]")).addClass("subdown-active");
				$("body").addClass("subdown-active");
			}else{
				that.add($("[subdown="+num+"]")).removeClass("subdown-active");
				$("body").removeClass("subdown-active");
			}
		})
		$(document).on("click", ".subdown-wrapper", function(e){
			if($(e.target).hasClass("subdown-wrapper"))
				$("[subdown-click].subdown-active").trigger("click");
    })



    //init main js
    mainjs();
    
    setInterval(() => {
      $("#min-menu").mmenu({
          extensions: [
            "wrapper-bg",
            "theme-white",
            "listview-50",
            "fx-panels-slide-up",
            "fx-listitems-drop",
            "border-offset",
            "position-front",
            "position-right"
          ],
          navbar: {
            title: vm_header.$t('header[0]')
          },
          navbars: [{
              height: 0,
              content: [
              ]
            },
            {
              content: ["prev", "title"]
            }
          ]
        }, {});
        window.minMenu = $("#min-menu").data("mmenu");
      }, 1);
  }
}
</script>