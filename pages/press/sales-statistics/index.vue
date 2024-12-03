<template>
  <div class="main-body offset-header">
			<div class="press">
				<div class="container-p">
					<div class="entry-header  desktop:pt-5 mv-4">
						<h1 class="text-x5">{{ page_data.seo.title }}</h1>
					</div>
					<hr>
					<div class="press-content m-v-20">
						<div class="short-news-items boxes-4 figure-m-v-15">
							<figure v-for="(item, key) in page_data.news" :key="key">
								<nuxt-link :to="`${$route.path}/${item.id}`">
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
  async asyncData({ isDev, route, store, env, params, query, $axios, req, res, redirect, error}){
    //var url = 'https://www.kia.ru/ajax/page/mediacenter/'+params.section;
    try{
			// if(route.path.substring(route.path.length-1) == "/")
        // route.path = route.path.substring(0, route.path.length-1)
      const page_data = await fetchPath($axios, {
        path: `${route.path}?offset=0`
      })
      return {
				page_data
			}
    }catch(e){
      error(e);
    }
  },
}

</script>