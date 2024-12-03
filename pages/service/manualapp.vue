<template>
  <div class="main-body offset-header" header-opacity>
    <div class="dealer">
      <div class="kiaworld-bnr color-white bg-shadow-none desktop:desc-bottom" :style="'background-image: url(https://cdn.kia.ru/media-data/landing/service/manualapp/banner-desktop.jpg);'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="">Главная</nuxt-link></li>
              <li><nuxt-link to="">Владельцам</nuxt-link></li>
              <li><nuxt-link to="">Owner's Manual</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header box-md-4">
            <img src="https://cdn.kia.ru/media-data/landing/service/manualapp/title-desktop.png" alt="">
            <div class="box-md-8 mt-5">
              Приложение «Руководство владельца Kia» поможет узнать, как безопасно и эффективно эксплуатировать автомобиль, познакомит с полезной информацией о вождении.
            </div>
          </div>
        </div>
      </div>
      <section class="bg-color-gray-1 clearfix">
        <div class="container desktop:pt-18 pt-8">
          <div class="flex-adaptive row desktop:jc-between desktop:ai-center">
            <div class="col-md-6 mb-6 ph-3">
              <h2>Руководство в приложении</h2>
              <br>
              <div>Приложение «Руководство владельца Kia» использует технологию искусственного интеллекта и мультимедийный контент (изображения и видео), чтобы облегчить поиск информации, которая поможет вам разобраться в функциях вашего автомобиля. Данное приложение также содержит полное цифровое руководство владельца с возможностью поиска.</div>
            </div>
            <div class="col-md-6 ph-3">
              <div class="img-content desktop:text-right">
                <img src="https://cdn.kia.ru/media-data/landing/service/manualapp/info-desktop.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="block-content dealer-steps">
        <div class="container pv-8 desktop:pv-12 desktop1440:pv-16">
          <div class="color-4 text-n1 mb-4">РУКОВОДСТВО ПО ЭКСПЛУАТАЦИИ</div>
          <div class="text-x4 mb-6 desktop1440:mb-6">Функционал приложения</div>
          <div class="list-content">
            <div class="item">
              <div class="item-header flex fb-md-3 text-s1-b">
                <div class="num color-4">01</div>
                <div><b>Распознавание элементов управления</b></div>
              </div>
              <div class="item-text">
                <div>
                  <p>
                    <span>
                      Если вы направите камеру вашего смартфона на кнопку, переключатель или другой элемент управления в салоне автомобиля, интеллектуальный сканер распознает соответствующий символ и откроет видеоролик, в котором демонстрируется использование данной функции.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header flex fb-md-3 text-s1-b">
                <div class="num color-4">02</div>
                <div><b>Библиотека видеоинструкций</b></div>
              </div>
              <div class="item-text">
                <div>
                  <p>
                    <span>
                      Cписок справочных видеороликов о функциях автомобиля и о том, как ими пользоваться.
                      <br>
                      Для поиска и просмотра не обязательно находиться в автомобиле.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header flex fb-md-3 text-s1-b">
                <div class="num color-4">03</div>
                <div><b>Справочник индикаторов</b></div>
              </div>
              <div class="item-text">
                <div>
                  <p>
                    <span>
                      Справочник индикаторов содержит информацию о значении информационных и предупреждающих индикаторов, которые могут появляться на приборной панели вашего автомобиля.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header flex fb-md-3 text-s1-b">
                <div class="num color-4">04</div>
                <div><b>Цифровое руководство владельца</b></div>
              </div>
              <div class="item-text">
                <div>
                  <p>
                    <span>
                      Цифровое руководство владельца в приложении идентично по содержанию печатному руководству из комплекта поставки вашего автомобиля. Вы можете использовать ключевые слова для поиска полезной информации о вашем автомобиле.
                      <br>
                      Например, подробных сведений о работе с той или иной функцией и необходимых для этого условиях.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-color-gray-1">
        <div class="container-r pv-8">
          <div class="entry-header mv-6">
            <h2 class="box-md-6 mobile:fs-7">Узнайте, как безопасно и эффективно эксплуатировать ваш автомобиль</h2>
          </div>
          <div class="img-content text-center mv-8">
            <img src="https://cdn.kia.ru/media-data/landing/service/manualapp/app-desktop.jpg" alt="" width="100%">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<style lang="scss">
  @media (max-width: 991px){
    @for $i from 0 through 10{
      .mobile\:fs-#{$i}{
        font-size: $i*2+8px;
      }
    }
  }
</style>

<script>
// import { fetchPath } from '~/api/otherApi';

// export default {
//   head() {
//     return {
//       title: this.page_data.seo.title,
//       meta: [
//         {
//           content: this.page_data.seo.description
//         }
//       ],
//     }
//   },
//   async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
//     try{
//       const page_data = await fetchPath($axios, {
//         path: route.path
//       });
//       return {
//         page_data
//       }
//     }catch(e){
//       error(e);
//     }
//   },
// }

</script>

