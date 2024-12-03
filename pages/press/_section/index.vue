<template>
  <div class="main-body offset-header">
			<div class="press">
				<div class="container-p">
					<div class="entry-header  desktop:pt-5 mv-4">
						<h1 class="text-x5">{{$t("menu[33]")}}</h1>
					</div>
					<div class="short-models-nav m-v-30">
						<ul class="list flex-adaptive li-m-v-15">
							<li :class="{'active': 'news' == $route.params.section}">
								<nuxt-link :to="localePath('/press/news')">{{$t("menu[34]")}}</nuxt-link>
							</li>
							<li :class="{'active': 'reviews' == $route.params.section}">
								<nuxt-link :to="localePath('/press/reviews')">{{$t("menu[35]")}}</nuxt-link>
							</li>
						</ul>
					</div>
					<hr>
					<div class="press-content m-v-20">
						<div class="short-news-items boxes-4 figure-m-v-15">
							<figure v-if="$route.params.section == 'news'" v-for="(item, key) in page_data.news" :key="key">
								<nuxt-link :to="item.url">
									<div class="fig-wrapper">
										<div class="img-content">
											<div class="img" :style="'background-image: url('+item.image+');'"></div>
										</div>
										<div class="desc-content">
											<h4>{{item.title}}</h4>
											<p class="news-date">{{ new Date(item.date*1000) | dateFormat('D MMMM YYYY')}}</p>
										</div>
									</div>
								</nuxt-link>
							</figure>
							<figure v-if="$route.params.section == 'reviews'" v-for="(overview, key) in page_data.news" :key="key">
								<div class="fig-wrapper">
									<div class="img-content">
										<a :href="overview.video" data-fancybox>
											<div class="btn-play">
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
											</div>
											<div class="img" :style="'background-image: url('+overview.image+');'"></div>
										</a>
									</div>
									<div class="desc-content">
										<h4>{{overview.title}}</h4>
										<p>{{overview.author}}</p>
										<p class="news-date">{{ new Date(overview.date*1000) | dateFormat('D MMMM YYYY')}}</p>
									</div>
								</div>
							</figure>
						</div>
						<div class="btn-opacity reverse m-v-30 hide">
							<a href="" class="pv-2">Показать ещё</a>
						</div>
						<br><br>
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
			if(route.path.substring(route.path.length-1) == "/")
        route.path = route.path.substring(0, route.path.length-1)
      const page_data = await fetchPath($axios, {
        path: route.path+"?offset=0"
      })
      return {
				page_data
			}
    }catch(error){
      error(error);
    }
  },
	created(){

	}
}

</script>