<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link to="">{{ $t('menu[38]') }}</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="feedback">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="text-x5">{{ $t('menu[38]') }}</h1>
        </div>
      </div>
      <div class="feedback-content">
        <div class="container">
          <div class="box-md-8 box-lg-7 m-auto">
            <div class="pv-12">
              <div class="box-md-12 mh-auto" v-if="Object.keys(current_filial).length">
                <form action="https://cdn.kia.uz/record-service.php" method="POST" formaj>
                  <input type='hidden' name='anti-bot-a' id='anti-bot-a' :value="new Date().getFullYear()"/>
				          <input type='text' name='anti-bot-q' id='anti-bot-q' size='30' value='19'  class="hide" />
                  <!-- <input type="text" value="serviceBooking" name="type" class="hide"> -->
                  <div class="input-content m-v-30">
                    <input type="text" name="name" :placeholder="$t('form.full_name')"  class="form-control" required>
                  </div>
                  <div class="input-content m-v-30">
                    <input value="+998" name="phone" type="text" class="form-control" v-facade="'+### (##) ###-##-##'" placeholder="+998 (__) ___−__−__" required minlength="19">
                  </div>
                  <div class="input-content">
                    <div class="models-filter mv-6">
                      <div class="mb-2">{{$t('form.city')}}</div>
                      <Select2 :name="page_data.cities[0].field" :options="cities_options" :value="page_data.cities[0].city" required>
                      </Select2>
                    </div>
                  </div>
                  <div class="input-content">
                    <div class="models-filter mv-6">
                      <div class="mb-2">{{$t('form.filial')}}</div>
                      <Select2 :name="current_filial.name" :options="fil_options" v-model="current_filial_id" required></Select2>
                    </div>
                  </div>
                  <div class="input-content">
                    <div class="models-filter mv-6">
                      <div class="mb-2">{{page_data.models.title}}</div>
                      <Select2 id="pop" :name="page_data.models.name" :options="page_data.models.items" required>
                        <option value="" disabled>{{page_data.models.title}}</option>
                      </Select2>
                    </div>
                  </div>
                  <div class="input-content">
                    <div class="models-filter mv-6">
                      <div class="mb-2">{{current_filial.types.title}}</div>
                      <Select2 :name="current_filial.types.name" :options="current_filial.types.items" required>
                        <option value="" disabled>{{current_filial.types.title}}</option>
                      </Select2>
                    </div>
                  </div>
                  <div class="input-content mv-6">
                    <div class="mb-2">{{page_data.car.title}}</div>
                    <input type="text" :name="page_data.car.name"  class="form-control" v-facade="'ye##'" maxlength="4">
                  </div>
                  <div class="input-content mv-6">
                    <div class="mb-2">{{page_data.vin.title}}</div>
                    <input :name="page_data.vin.name" type="text" class="form-control" required minlength="17" maxlength="17">
                  </div>
                  <br>
                  <div class="text-s1-b">{{current_filial.times.title}}</div>
                  <div class="flex mobile:fd-column">
                    <div class="mv-3 desktop:mr-6">
                      <div id="datepicker" class="datepicker-form">
                        <div class="hide">
                          <input type="text" name="date" class="datepicker-input">
                        </div>
                      </div>
                    </div>
                    <div class="mv-3">
                      <div class="datepicker-date-selected text-x3-b mb-2 desktop:ml-2"></div>
                      <div class="block-pick-time">
                        <label v-for="(item, key) in current_times" :key="key">
                          <input name="time" type="radio" :value="item" class="hide" :checked="key == 0 ? true : undefined">
                          <span class="pick-time">{{item}}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <br><br>
                  <span class="btn-def">
                    <button type="submit">{{$t("form.send")}}</button>
                  </span>
                  <br><br>
                </form>
                <div class="form-success-block">
                  <div class="form-success-block-wrapper pv-10">
                    <h3>{{$t("form.response[0]")}}</h3>
                    <br>
                    <p>{{$t("form.response[1]")}}</p>
                    <span class="btn-def mv-8">
                      <nuxt-link exact :to="localePath('index')" class="hover-aunderline"><b>{{$t("btns.back_main")}}</b></nuxt-link>
                    </span>
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

import Select2 from '@/components/Select2'
import mainjs from '@/static/js/main';

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
  data(){
    return {
      fil_options: [],
      current_filial: {},
      current_filial_id: null,
      current_times: null,
      current_date: "",
      cities_options: [],
      // page_data: {
      //   filials: [
      //     {
      //       name: "Kia Sergeli",
      //       types: ["ТО", "Механический ремонт", "Комплексная диагностика", "Другое"],
      //       times: ["10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30"],
      //     },
      //     {
      //       name: "Kia Yakkasaray",
      //       types: ["ТО", "Механический ремонт", "Комплексная диагностика", "Развал-схождение", "Другое"],
      //       times: ["11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30"],
      //     }
      //   ],
      // }
    }
  },
  components:{
    Select2
  },
  watch: {
    current_date(date){
      this.filter_date();
    },
    current_filial_id(id){
      var vm = this;
      
      vm.page_data.branches.forEach((element, index) => {
          if(element.branchId == id){
            vm.current_filial = element;
        }
      })
      setTimeout(() => {
        mainjs();
        vm.initDate()
        vm.filter_date();
      }, 1);


    }
  },
  created(){
    var vm = this;
    vm.current_filial_id = vm.page_data.branches[0].branchId;
    this.page_data.branches.forEach((element, id) => {
      if(!element.isFeatured)
        return;
      this.fil_options.push({
        id: element.branchId,
        text: element.title,
      })
    });
    this.page_data.cities.forEach((element, id) => {
      this.cities_options.push({
        id: element.city,
        text: element.name
      })
    })
    
  },
  mounted(){
    var vm = this;

    

  },
  methods:{
    initDate(){
      var vm = this;

      // Date
      var currentDate = new Date();
      var OldDate = currentDate.setTime(currentDate.getTime() - 0);
      window.datepicker_form = $( "#datepicker" ).datepicker({
        monthNames : this.$t("datepicker.month_names"),
        monthNamesSpecial : this.$t("datepicker.month_names"),
        dayNamesMin : this.$t("datepicker.day_names_min"),
        dateFormat: "yy-mm-dd",
        minDate: new Date(OldDate),
        beforeShowDay : function(date){
          date = date.toISOString().split("T")[0]
          var status = true;
          vm.current_filial.weekend.forEach(function(d){
            //console.log(date, d)
            if(date == d)
              status = false;
          })
          //console.log(date);
          return [status];
        },
        onSelect: function (a, d) {
          //console.log(a, d, this);
          vm.current_date = a;
          $(this).find(".datepicker-input").val(a);
          $(".datepicker-date-selected").text(a);
          var currentDateSelected = 
            d.currentDay+" "+
            d.settings.monthNamesSpecial[d.currentMonth]+" "+
            d.currentYear;
          $(".datepicker-date-selected").text(currentDateSelected);
        }
      });
      $(".ui-state-active").trigger("click")
    },
    filter_date(){
      var date = this.current_date;
      var arr_times = [];
      var limit = this.current_filial.times.limit*1;
      this.current_filial.times.items.forEach(time => {
        var valid = true;
        this.current_filial.times.records.forEach(record => {
          if(date == record.date && time == record.time){
            if(record.count >= limit)
              valid = false;
          }
        });
        if(valid)
          arr_times.push(time);
      });
      this.current_times = arr_times;
    }
  },
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    console.log(i18n.locale);
    
    try{
      var path
      if(i18n.locale == "uz")
        path = "/record/service"
      else
        path = i18n.locale+"/record/service"
      const page_data = await fetchPath($axios, {
        path: path
      });
      return {
        page_data
      }
    }catch(e){
      error(e);
    }
  },
}
</script>