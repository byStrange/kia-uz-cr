<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1 bnr-height-auto color-white" :style="'background-image: url('+current_item.detail_image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
            <li><nuxt-link :to="localePath('/service/special')">{{ $t('menu[6]') }}</nuxt-link></li>
            <li><nuxt-link to="">{{current_item.name}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <h1 class="box-md-5">{{current_item.name}}</h1>
          <p class="box-md-4">{{current_item.preview_text}}</p>
        </div>
      </div>
    </div>
    <div class="special-info">
      <div class="container-p">
        <div class="wrapper p-v-md-50 flex-adaptive p-h-md-80 list-check justify-c-center">
          <div class="box-md-10 m-v-30 p-h-15 text-item">
            <div v-html="current_item.detail_text"></div>
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
      title: "Спецпредложения на сервис Kia",
      meta: [
        {
          name: "description",
          content: "Спецпредложения на сервис Kia"
        },
        {
          name: "keywords",
          content: "Спецпредложения на сервис Kia"
        }
      ],
    }
  },
  data(){
    return{
      current_item: {},
      current_code: "",
      items: [
        {
          "code": "20220131",
          "video": "",
          "detail_image": "https://cdn.kia.uz/uploads/articles/1337/article-original.jpg",
          "detail_text": `
            <p><b>Kia гарантирует:</b> <br>запись на сервис день в день <br>60 минут – максимальное время выполнения сервисных операций в рамках Программы*</p><br>
            <p>Перечень сервисных операций в рамках Программы:</p>
            <ul>
              <li>Замена салонного фильтра</li>
              <li>Замена масла в двигателе и масляного фильтра</li>
              <li>Замена воздушного фильтра двигателя</li>
              <li>Замена масла в АКПП</li>
              <li>Замена перегоревших ламп</li>
              <li>Замена свечей зажигания</li>
              <li>Замена щёток стеклоочистителя</li>
              <li>Замена моторчика стеклоомывателя</li>
              <li>Замена тормозных колодок и тормозных дисков</li>
              <li>Замена стоек стабилизатора</li>
              <li>Замена шаровых опор</li>
            </ul>
            <p><b>Узнайте подробности у официального дилера Kia по номеру телефона <a href="tel:+998712157007">+998 71 215-70-07</a></b></p>
            <p class="color-gray-5">Дилер может дополнить Перечень другими видами сервисных операций/пакетов сервисных операций, фактическое время проведения которых не превышает 60 минут – подробную информацию уточняйте у дилера.</p>
            <p class="color-gray-5">*60 мин - время выполнения одной или нескольких сервисных операций, попадающих под условия Программы «Экспресс Сервис Kia». Возможно проведение нескольких сервисных операций из Перечня, если суммарное фактическое время проведения данных сервисных операций укладывается в 60 минут. Дилер может изменить список по своему усмотрению без отдельного уведомления. Подробную информацию Вы можете узнать у официального дилера Kia. Предложение не является публичной офертой.</p>
          `,
          "name": "Экспресс-сервис Kia — ваш быстрый помощник",
          "preview_text": "Сервис за 60 минут."
        },
        {
          "code": "20220302",
          "video": "/video/Kia_Soul_nalichie_2.mp4",
          "detail_image": "/img/service/special/20220302.jpg",
          "detail_text": `
            <video style="float: left;" src="/video/service/special/20220302.mp4" width="480" height="480" type="video/mp4" muted="muted" autoplay="autoplay" loop="loop"></video>
            <h4>Kia Soul в лизинг всего за один час</h4>
            <p>Приобретайте автомобили Kia Soul в лизинг всего за один час!</p>
            <p>Да-да, именно столько потребуется времени, чтобы стать обладателем машины мечты!</p>
            <p>Условия просты: первоначальный взнос от 20% сроком от 12 до 48 месяцев. Рассчитать ежемесячный платёж вы можете прямо сейчас на нашем сайте в разделе "Kia лизинг"!</p>
            <p>
              <b>Подробности:</b><br>
              71 215 70 07
            </p>
            <br>
            <p>
              <b>Ждём вас по адресам:</b><br>
              - Сергелийский район, массив А.Навоий, ТКАД (ориентир: напротив автосалона Drivers Village)<br>
              - Кичик Халка Йули, 70А
            </p>
          `,
          "name": "Kia Soul в лизинг всего за один час",
          "preview_text": ""
        },
      ]
    }
  },
  created(){
    this.current_code = this.$route.params.id;
    this.items.forEach(item => {
      if(item.code == this.current_code)
      this.current_item = item;
    });
  }
}
</script>

