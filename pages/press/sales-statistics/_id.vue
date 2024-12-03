<template>
  <div class="main-body offset-header">
			<div class="news-article">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('/press/'+$route.params.section)">{{ $t('menu[34]') }}</nuxt-link></li>
            </ol>
          </div>
        </div>
				<div class="container-p">
					<div class="entry-header text-center mv-6 desktop:pb-4 box-lg-8 m-auto">
            <div class="date-content text-center mb-3">
              <p>{{ new Date(page_data.date*1000) | dateFormat('D MMMM YYYY')}}</p>
            </div>
						<h2>{{page_data.title}}</h2>
					</div>
					<div class="entry-content box-lg-8 m-auto mv-6 text-item desktop:pb-4">
						<div class="box-lg-7 m-auto">
              <div v-if="page_data.images.length">
                <div class="design-inter-items owl-carousel m-t-30">
                  <figure v-for="(img, key) in page_data.images" :key="key">
                    <div class="img-content">
                      <img :src="img">
                    </div>
                  </figure>
                </div>
              </div>
              <img v-else :src="page_data.image" :alt="page_data.title">
              <div v-html="page_data.content"></div>
						</div>
					</div>
				</div>
			</div>

  </div>
</template>








<script>
export default {
  head() {
    return {
      title: this.page_data.seo.meta_title,
      meta: [
        {
          content: this.page_data.seo.meta_description,
        }
      ],
    }
  },
  async asyncData({ isDev, route, store, env, params, query, $axios, req, res, redirect, error}){

    try{
      //var url = "press/news/"+params.article_id;
      const page_data = await store.dispatch("other/fetchPath", {
        path: `${route.path}`
      });
      return {
        page_data
      }
    }catch(e){
      error(e)
    }
  },
}

</script>