<template>
  <div>

    <client-only>
      <script>
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','//connect.facebook.net/en_US/fbevents.js');

        fbq('init', '357795334408363');
        fbq('track', "PageView");
      </script>
      <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=357795334408363&ev=PageView&noscript=1"/></noscript>
      


      <!-- Live -->
      <script type='text/javascript'>
        window['liv'+'eTe'+'x'] = true,
        window['li'+'veT'+'exI'+'D'] = 180049,
        window['l'+'iveT'+'ex'+'_obje'+'ct'] = true;
        (function() {
        var t = document['crea'+'teE'+'leme'+'nt']('script');
        t.type ='text/javascript';
        t.async = true;
        t.src = '//cs15.liv'+'etex'+'.ru/js/c'+'lient.js';
        var c = document['getElement'+'sByT'+'ag'+'Name']('script')[0];
        if ( c ) c['paren'+'t'+'N'+'ode']['inse'+'rt'+'Befo'+'re'](t, c);
        else document['d'+'ocumen'+'tElemen'+'t']['fir'+'st'+'Chi'+'ld']['appen'+'dCh'+'ild'](t);
        })();
      </script>
      
      <!-- Live Rox -->
      <!-- <a class="roxchat_button" href="#" rel="roxchat">
          <img src="https://roodelluz001.rox.chat/button.php" border="0"/>
      </a>
      <script type="text/javascript">
        roxchat = {
          accountName: "roodelluz001",
          domain: "roodelluz001.rox.chat",
          location: "default"
        };

        (function () {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://roodelluz001.rox.chat/js/button.js";
            document.getElementsByTagName("head")[0].appendChild(s);
        })();
      </script> -->


      <!-- Google Tag Manager (noscript) -->
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P674ZG7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
      <!-- End Google Tag Manager (noscript) -->
    </client-only>

    <!-- <canvas id="snow"></canvas> -->
    <div id="page">
      <Header /> 
      <main class="main">
        <Nuxt />
      </main>
      <Footer />
    </div>


  </div>
</template>


<script>




import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  head() {
    return this.$nuxtI18nHead(), {
      script: [
        {src: '/js/plugins/jquery.min.js'},
        {src: '/js/plugins/bootstrap.min.js'},
        {src: '/js/plugins/jquery-ui.js'},
        {src: '/css/fancybox/fancybox.umd.js'},
        {src: '/js/plugins/ion.rangeSlider.min.js'},
        {src: '/js/plugins/theia-sticky-sidebar.min.js'},
        {src: '/js/plugins/select2.min.js'},
        {src: '/js/plugins/jquery.mmenu.all.js'},
        {src: '/js/plugins/smooth-scroll.js'},
        {src: '/js/plugins/jquery.validate.js'},
        {src: '/js/plugins/owl.carousel.min.js'},
        {src: '/js/plugins/js-cloudimage-360-view.min.js'},
        // {src: '/js/snow.js'},
        {
          src: "/js/metrix.js",
          async: true,
          crossorigin: "anonymous",
          body: false,
        },
        {src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=f06d738e-1a2e-4ca2-91cc-d23a3bbb9e09'},
        {src: '/js/map.panel.js'},
      ],
      link: [
        {rel: "stylesheet", href: "/css/fancybox/fancybox.css"},
        {rel: "stylesheet", href: "/css/fancybox/panzoom.css"},
      ]
    }
  },
  async created(){

    // var menu_data
    // if(this.$i18n.locale == "uz")
    //   menu_data  = await this.$axios.$get('/menu')
    // else
    //   menu_data  = await this.$axios.$get(this.$i18n.locale+'/menu')
    // this.$store.commit("other/menu_data", menu_data)
  },
  async mounted(){
    window.vm = this;
    $(document).on("click", ".link-more", function(){
      // Подробнее
      DSPCounter('send', {
        'sid'       : '223159',
        'site_area' : 'unGjJ0ul',
        'user_id'   : '',
        'lead_id'   : '',
        'order_sum' : ''
      });
    });
    
    $(document).on("click", ".link-more-model", function(){
      // Подробнее о моделях
      DSPCounter('send', {
        'sid'       : '223159',
        'site_area' : 'kHVukoUA',
        'user_id'   : '',
        'lead_id'   : '',
        'order_sum' : ''
      });
    });
    
    $(document).on("click", "button[type='submit']", function(){
      // Отправить заявку
      DSPCounter('send', {
        'sid'       : '223159',
        'site_area' : 'pyR98Eso',
        'user_id'   : '',
        'lead_id'   : '',
        'order_sum' : ''
      });
    });
    return
    var offers, offers_texts, langurl = "", page_special;
    if(this.$i18n.locale == "ru"){
      page_special = await this.$axios.$get('https://api.kia.uz/ru/buy/special')
      offers = page_special.news
      offers_texts = [ "Узнать подробнее по ссылке", "Позвонить", "Подробнее"]
      langurl = "/"+this.$i18n.locale
    }else{
      page_special = await this.$axios.$get('https://api.kia.uz/buy/special')
      offers = page_special.news
      offers_texts = [ "Batafsil havola orqali bilib oling", "Qo'ng'iroq qiling", "Batafsil"]
    }
    console.log(this.$i18n.locate, offers)
    var fancyOffers = [];
    var good = false
    offers.forEach((el, i) => {
      if(good)
        return;
      if(!el.is_buy && !el.is_service)
        return
      el.image = el.image.replace("article-medium.", "article-original.")
      console.log(el)
      // let s = $t('btns.type_1')
      // <a href="/feedback">${s}</a>
      var offer = {
        type: "html",
        src: `
          <div class="offers-modal">
            <div class="wrapper flex mobile:fd-column">
              <div class="img-content box-md-4 box-lg-6">
                <div class="img" style="background-image: url(${el.image});"></div>
              </div>
              <div class="desc-content box-md-6 box-lg-4 ph-8 pv-6 flex jc-center ai-center text-center">
                <div>            
                  <h3 class="mt-4">${el.title}</h3>
                  <div class="btn-content mt-4">
                    <div class="btn-link mh-1 mv-1">
                      <a href="${el.url}"><em>${offers_texts[0]}</em></a>
                    </div>
                    <span class="btn-def mh-1 mt-5 desktop:mt-6">
                      <a href="tel:+998712157007" class="hidden-md hidden-lg">${offers_texts[1]}</a>
                      <a href="/feedback" class="hidden-xs hidden-sm">${offers_texts[2]}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      }
      fancyOffers.push(offer)
      good = true;
    });
    fancyOffers.sort(() => Math.random() - 0.5);
    if(!getCookie("offers_modal")){
      new Fancybox(fancyOffers, {infinite: false});
      console.log(getCookie("offers_modal"))
      setCookie('offers_modal', 'true', {secure: false, 'max-age': 3600*2})
    }

  },
  components: {
    Header,
    Footer
  },
  methods: {
  }
}















</script>

<style lang="scss">

  .cookie-consent{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #F8F8F8;
    padding: 30px 0;
    z-index: 111;
    .text-s3{
      font-size: 14px;
      line-height: 167%;
    }
  }
  .accordion_left{
    .card-media-desc{
      padding-left: 0;
      padding-right: 10%;
    }
  }

  .offers-modal{
    padding: 0;
    .img{
      background-size: cover;
      width: 100%;
      height: 100%;
      min-height: 180px;
    }
    @media (min-width: 992px){
      width: 900px;
    }
    @media (min-width: 1440px){
      width: 1200px;
    }
    @media (max-width: 991px){
      max-width: 410px;
    }
  }
</style>