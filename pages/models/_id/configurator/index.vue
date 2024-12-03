<template>
  <div class="relative conf offset-header" scrollf v-if="page_data && model">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link :to="localePath('index')">{{ $t('menu[0]') }}</nuxt-link></li>
          <li><nuxt-link :to="localePath('configurator')">{{ $t('menu[8]') }}</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="conf-header">
      <div class="container-p">
        <div class="entry-header">
          <h2>{{ $t('menu[8]') }}</h2>
        </div>
        <div class="conf-progress-bar">
          <ul class="list">
            <li v-for="(step, key) in steps" :key="key"
               @click.stop="progressStepsBar(step.num)" :class="{'active': currentStepNum == step.num}">
              <nuxt-link :to="localePath('/configurator')" v-if="step.num == 1">
                <b>{{step.text}}</b>
                <p>{{step.description}}</p>
              </nuxt-link>
              <template v-else>
                <b>{{step.text}}</b>
                <p>{{step.description}}</p>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="conf-main" :current-step="currentStepNum">
      <div class="container-p clearfix">
        <div class="left-bar-def sidebar-wrapper col-md-3 scrolled-down" v-show="!(currentStepNum == steps.length)">
          <div class="wrapper-scroll">
            <div class="wrapper conf-result-content">
              <div class="cap-content">
                <h3>{{model.title}}</h3>
                <h3>
                  <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                  {{currentPrice | spaceBetweenNum}} {{ $t('other.price_text') }}
                  <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                  <span v-if="model.helper" data-toggle="tooltip" data-placement="top" class="price-tooltip" :title="model.helper" style="color: red;">*</span>
                </h3>
                <div class="new-price mv-1 mb-2" v-if="newPrice">
                  <template v-if="$i18n.localeProperties.code == 'ru'">
                    {{ $t('other.from') }} 
                    {{ newPrice | spaceBetweenNum }} 
                    {{ $t('other.price_text') }} 
                    {{ model.helper_day }} 
                  </template>
                  <template v-if="$i18n.localeProperties.code == 'uz'">
                    {{ model.helper_day }} 
                    {{ newPrice | spaceBetweenNum }}
                    {{ $t('other.price_text') }} 
                    {{ $t('other.from') }}
                  </template>
                </div>
              </div>
              <figure class="text-center m-v-20">
                <img :src="model.sideImage" alt="">
              </figure>
              <div class="conf-result-section hide">
                <dl>
                  <dt>{{currentComplectation.year}} {{$t("configurator[3]")}}</dt>
                </dl>
              </div>
              <br>
              <div class="conf-result-section">
                <h4>{{$t("configurator[4]")}}</h4>
                <dl>
                  <dt>{{currentEngine.name}}, {{currentEngine.descr}}</dt>
                  <dt>{{currentGearbox.name}}, {{currentGearbox.value}}</dt>
                  <dt>{{currentDrive.name}}, {{currentDrive.value}}</dt>
                </dl>
              </div>
              <div class="conf-result-summary">
                <dl>
                  <dt>{{$t("configurator[5]")}}</dt> 
                  <dd style="flex-basis: 70%;">
                    <strong class="text-s1" style="white-space: nowrap;">
                      <template v-if="$i18n.localeProperties.code == 'ru'">{{ $t('other.from') }}</template>
                      {{currentPrice | spaceBetweenNum}} {{ $t('other.price_text') }}
                      <template v-if="$i18n.localeProperties.code == 'uz'">{{ $t('other.from') }}</template>
                      <span v-if="model.helper" data-toggle="tooltip" data-placement="top" class="price-tooltip" :title="model.helper" style="color: red;">*</span>
                    </strong>
                    <div class="new-price text-s1 mv-1 mb-2" v-if="newPrice">
                      <template v-if="$i18n.localeProperties.code == 'ru'">
                        {{ $t('other.from') }} 
                        {{ newPrice | spaceBetweenNum }} 
                        {{ $t('other.price_text') }} 
                        {{ model.helper_day }} 
                      </template>
                      <template v-if="$i18n.localeProperties.code == 'uz'">
                        {{ model.helper_day }} 
                        {{ newPrice | spaceBetweenNum }}
                        {{ $t('other.price_text') }} 
                        {{ $t('other.from') }}
                      </template>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="conf-main-content col-md-9">

          <template v-if="currentStepNum === 2">
            <div class="conf-steps conf-step-engine">
              <div class="entry-content">
                <div class="car-params">
                  <div class="car-params-item">
                    <h4>{{$t("configurator[6]")}}</h4>
                    <ul class="flex-list">
                      <li v-for="(engine, key) in model.engines" :key="key" :class="{'active': engine.id == currentEngine.id}"
                          :ref="'paramEngine'"
                          :car-param="engine.name"
                          @click.prevent.stop="selectParamEngine(engine)">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15">
                              <div class="fw-6">{{engine.name}}</div>
                              {{engine.descr}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="car-params-item">
                    <h4>{{$t("configurator[7]")}}</h4>
                    <ul class="flex-list">
                      <li v-for="(gear, key) in model.gears" :key="key" 
                        :class="{
                          'active': gear.name == currentGearbox.name,
                          'disabled': !validParams(gear.name, currentEngine.allowedGears)
                        }" 
                        :ref="'paramGearbox'"
                        :car-param="gear.name"
                        @click.prevent.stop="selectParamGearbox(gear)">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15">
                              <div class="fw-6">{{gear.name}}</div>
                              {{gear.value}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="car-params-item">
                    <h4>{{$t("configurator[8]")}}</h4>
                    <ul class="flex-list">
                      <li v-for="(drive, key) in model.privodi" :key="key" 
                          :class="{
                            'active': drive.name == currentDrive.name,
                            'disabled': !validParams(drive.name, currentEngine.allowedPrivodi)
                          }"
                          @click.prevent.stop="selectParamDrive(drive)">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15">
                              <div class="fw-6">{{drive.name}}</div>
                              {{drive.value}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="currentStepNum === 3">
            <div class="conf-steps conf-step-complectation">
              <div class="entry-content">
                <div class="entry-title m-v-30">
                  <h3>{{model.title}} {{currentComplectation.name}}</h3>
                </div>
                <div class="showroom-main m-v-10" v-if="currentExterior && currentExterior.colorFolder">
                  <div
                      class="cloudimage-360"
                      :data-folder="currentExterior.colorFolder"
                      data-filename="{index}.png"
                      data-spin-reverse
                      data-amount="72">
                      <div class="showroom-item-cover flex align-center">
                        <div class="flex box-xs-10 align-center">
                          <img :src="currentExterior.colorFolder+'/1.png'" width="100%">
                        </div>
                      </div>
                  </div>
                </div>
                <script>window.CI360 = { notInitOnLoad: true }</script>
                <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
                <div class="color-gray-4 text-center m-b-30" v-if="currentExterior && currentExterior.colorFolder">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="showroom__three-sixty-icon"><path d="M9.724 9.472c0-1.584-.912-2.28-2.82-2.28-.6 0-1.632.18-2.268.468v1.296c.816-.276 1.5-.396 2.268-.384.864.012 1.164.336 1.164.924 0 1.056-.948 1.284-1.752 1.284H5.68v1.392h.636c1.212 0 2.064.228 2.064 1.332-.036.816-.42 1.212-1.476 1.212-.768 0-1.344-.06-2.556-.348v1.308a8.962 8.962 0 002.7.444c1.848 0 2.988-.792 2.988-2.616 0-1.26-.552-1.896-1.416-2.196.672-.372 1.104-.96 1.104-1.836zM14.343 14.788c-1.488 0-1.584-1.2-1.584-2.988a5.527 5.527 0 011.572-.252c.972 0 1.38.384 1.38 1.548 0 1.116-.324 1.692-1.368 1.692zm.324-6.228c.612 0 1.308.108 2.124.312V7.6a7.966 7.966 0 00-2.436-.408c-1.668 0-3.264.744-3.264 4.764 0 2.628.912 4.176 3.264 4.176 2.064 0 3.012-1.272 3.012-3.156 0-1.776-.96-2.808-2.736-2.808-.528 0-1.176.096-1.836.3.132-1.548.924-1.908 1.872-1.908zM21.62 16.132c1.968 0 3.132-1.344 3.132-4.428 0-3.084-1.164-4.512-3.132-4.512-1.968 0-3.12 1.428-3.12 4.512 0 3.096 1.152 4.428 3.12 4.428zm0-1.344c-1.116 0-1.464-1.008-1.464-3.084 0-2.028.348-3.168 1.464-3.168s1.476 1.14 1.476 3.168c0 2.076-.36 3.084-1.476 3.084z" fill="currentColor"></path><path d="M15 23c-7.732 0-14-2.727-14-6.09 0-1.263.885-2.437 2.4-3.41m17.667 8.9C25.76 21.417 29 19.328 29 16.91c0-1.263-.885-2.437-2.4-3.41" stroke="currentColor" stroke-width="1.5"></path><circle cx="27.5" cy="6.5" r="1.75" stroke="currentColor" stroke-width="1.5"></circle><path d="M12 19l4 4-4 4" stroke="currentColor" stroke-width="1.5"></path></svg>
                  <p><small>{{$t("showroom.notify")}}</small></p>
                </div>
                <div v-if="selectComplectations" class="hide">
                  <div class="config-details config-details-modal conf-steps-modal" 
                    v-for="(complectation, index) in selectComplectations" 
                    :key="index" 
                    :id="'config-details-'+complectation.name.replace(/ /, '-').toLowerCase()" 
                    :config-complectation-id="complectation.name.replace(/ /, '-').toLowerCase()">
                    <section class="item active" v-if="model.standart">
                      <a href=".item" class="title-click" tc tc-closest>{{$t("configurator[9]")}}<i class="fa fa-angle-up"></i></a>
                      <div class="section-body">
                        <div class="section-body-wrapper">
                          <div class="list-block-body" v-for="(item, key) in model.standart" :key="key">
                            <h4>{{item.name}}</h4>
                            <ul>
                              <li v-for="(text, key) in item.values" :key="key">
                                <span>{{text}}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section  class="item active" v-for="(gOption, key) in complectation.options" :key="key">
                      <a href=".item" class="title-click" tc-closest tc>{{gOption.name}}<i class="fa fa-angle-up"></i></a>
                      <div class="section-body">
                        <div class="section-body-wrapper">
                          <div class="list-block-body">
                            <ul>
                              <li v-for="(value, key) in gOption.values" :key="key">{{value}}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div class="fw-7 conf-cnt-complectations">
                  <span class="font-size-nm">
                    {{selectComplectations.length}} 
                    <span v-if="selectComplectations.length == 1">{{$t("configurator[10]")}}</span> 
                    <span v-else>{{$t("configurator[11]")}}</span> 
                  </span>
                </div>
                <div class="accordion-def m-t-30" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="accordion-def-item" 
                        v-for="(complectation, key) in selectComplectations"
                        :class="{'active': complectation.name == currentComplectation.name}"
                        :key="key">
                    <div class="title-content">
                      <div class="car-params-btn">
                        <div class="flex" click="selectComplectation" @click="selectComplectationAppend(complectation)" role="button">
                          <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                          <div class="m-l-15">
                            <b>{{complectation.name}}</b><br>
                            <b>{{complectation.price | spaceBetweenNum}} {{$t("other.price_text")}}</b>
                          </div>
                        </div>
                        <a role="button" class="collapsed" data-toggle="collapse" data-parent="#accordion" :href="'#step-3-complectation-'+key">
                          <div class="align-center">
                            <b>{{$t("configurator[12]")}}</b>
                            <svg class="m-l-15" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div :id="'step-3-complectation-'+key" class="drop-content collapse" 
                      :class="{'in': complectation.name == currentComplectation.name}" :aria-expanded="{'true': complectation.name == currentComplectation.name}">
                      <div class="drop-content-body">
                        <ul>
                          <li v-for="(optionText, key) in complectation.mainOptions" :key="key">{{optionText}}</li>
                        </ul>
                        <a href="javascript:;" 
                          :data-src="'#config-details-'+complectation.name.replace(/ /, '-').toLowerCase()" 
                          class="link-btn-1 fw-6 align-center" data-fancybox>
                          {{$t("btns.show_all")}}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="currentStepNum === 4">
            <div class="conf-steps conf-step-overview">
              <div class="entry-content relative" :class="{'pano-active': panoActive}">
                <div class="showroom">
                  <div class="showroom-header">
                    <div class="entry-header m-v-10">
                      <h3>{{model.title}} {{currentComplectation.name}}</h3>
                    </div>
                    <div class="showroom-typeselect">
                      <ul class="list">
                        <li :class="{'active': !panoActive}">
                          <a @click="panoActive = false" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                          <span>{{$t("showroom.exterior")}}</span>
                        </li>
                        <li :class="{'active': panoActive}" v-if="currentInterior.name">
                          <a @click="panoActive = true" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                          <span>{{$t("showroom.interior")}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="showroom-main m-v-10" v-if="!panoActive && currentExterior && currentExterior.colorFolder">
                    <div
                        class="cloudimage-360"
                        :data-folder="currentExterior.colorFolder"
                        data-filename="{index}.png"
                        data-spin-reverse
                        data-amount="72">
                        <div class="showroom-item-cover flex align-center">
                          <div class="flex box-xs-10 align-center">
                            <img :src="currentExterior.colorFolder+'/1.png'" width="100%">
                          </div>
                        </div>
                    </div>
                    <div class="color-gray-4 text-center m-b-30">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="showroom__three-sixty-icon"><path d="M9.724 9.472c0-1.584-.912-2.28-2.82-2.28-.6 0-1.632.18-2.268.468v1.296c.816-.276 1.5-.396 2.268-.384.864.012 1.164.336 1.164.924 0 1.056-.948 1.284-1.752 1.284H5.68v1.392h.636c1.212 0 2.064.228 2.064 1.332-.036.816-.42 1.212-1.476 1.212-.768 0-1.344-.06-2.556-.348v1.308a8.962 8.962 0 002.7.444c1.848 0 2.988-.792 2.988-2.616 0-1.26-.552-1.896-1.416-2.196.672-.372 1.104-.96 1.104-1.836zM14.343 14.788c-1.488 0-1.584-1.2-1.584-2.988a5.527 5.527 0 011.572-.252c.972 0 1.38.384 1.38 1.548 0 1.116-.324 1.692-1.368 1.692zm.324-6.228c.612 0 1.308.108 2.124.312V7.6a7.966 7.966 0 00-2.436-.408c-1.668 0-3.264.744-3.264 4.764 0 2.628.912 4.176 3.264 4.176 2.064 0 3.012-1.272 3.012-3.156 0-1.776-.96-2.808-2.736-2.808-.528 0-1.176.096-1.836.3.132-1.548.924-1.908 1.872-1.908zM21.62 16.132c1.968 0 3.132-1.344 3.132-4.428 0-3.084-1.164-4.512-3.132-4.512-1.968 0-3.12 1.428-3.12 4.512 0 3.096 1.152 4.428 3.12 4.428zm0-1.344c-1.116 0-1.464-1.008-1.464-3.084 0-2.028.348-3.168 1.464-3.168s1.476 1.14 1.476 3.168c0 2.076-.36 3.084-1.476 3.084z" fill="currentColor"></path><path d="M15 23c-7.732 0-14-2.727-14-6.09 0-1.263.885-2.437 2.4-3.41m17.667 8.9C25.76 21.417 29 19.328 29 16.91c0-1.263-.885-2.437-2.4-3.41" stroke="currentColor" stroke-width="1.5"></path><circle cx="27.5" cy="6.5" r="1.75" stroke="currentColor" stroke-width="1.5"></circle><path d="M12 19l4 4-4 4" stroke="currentColor" stroke-width="1.5"></path></svg>
                      <p><small>{{$t("showroom.notify")}}</small></p>
                    </div>
                  </div>
                  <div v-else-if="currentInterior && currentInterior.colorFolder">
                    <div class="showroom-pano">
                      <iframe 
                        :src="'https://cdn.kia.uz/panoramas/iframe.html?pano_xml='+currentInterior.colorFolder" frameborder="0"></iframe>
                    </div>
                  </div>
                  <script>window.CI360 = { notInitOnLoad: true }</script>
                  <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>

                  <div class="relative" v-if="currentExterior">
                    <div class="showroom-bottom justify-c-between align-center">
                      <div class="flex-adaptive">
                        <div class="showroom-colorselect">
                          <div class="title-content">
                            <span class="color-gray">{{$t("showroom.color")}}</span> 
                            <b>{{currentExterior.name}}</b>
                            <span v-if="currentExterior.price"> + {{currentExterior.price | spaceBetweenNum}} {{$t("other.price_text")}}</span>
                          </div>
                          <ul class="list m-t-10"> 
                            <li v-for="(color, key) in currentComplectation.bodyColors" 
                              :class="{'active': currentExterior.id == color.id}"
                              :key="key">
                              <a href="javascript:;" @click.stop.prevent="colorChangeExterior(color, '.conf-step-4')">
                                <div class="color-select" :style="'background-image: url(\''+color.icon+'\')'"></div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="showroom-colorselect" v-if="currentComplectation.interiorColors">
                          <div class="title-content">
                            <span class="color-gray">{{$t("showroom.color")}}</span> 
                            <b>{{currentInterior.name}}</b>
                            <span v-if="currentInterior.price"> + {{currentInterior.price | spaceBetweenNum}} {{$t("other.price_text")}}</span>
                          </div>
                          <ul class="list m-t-10">
                            <li v-for="(color, key) in currentComplectation.interiorColors"
                              :class="{'active': currentInterior.id == color.id}"
                              :key="key">
                              <a href="javascript:;" @click.stop.prevent="colorChangeInterior(color)" >
                                <div class="color-select" :style="'background-image: url(\''+color.icon+'\')'"></div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <template v-if="currentStepNum == 5">
        <div class="conf-steps conf-step-result">
          <div class="entry-content container-p">
            <div class="conf-summary">
              <div class="entry-title m-v-30">
                <h3>{{model.title}} {{currentComplectation.name}}</h3>
              </div>
              <div class="showroom-main m-v-10" v-if="currentExterior && currentExterior.colorFolder">
                <div
                    class="cloudimage-360"
                    :data-folder="currentExterior.colorFolder"
                    data-filename="{index}.png"
                    data-spin-reverse
                    data-amount="72">
                    <div class="showroom-item-cover flex align-center">
                      <div class="flex box-xs-10 align-center">
                        <img :src="currentExterior.colorFolder+'/1.png'" width="100%">
                      </div>
                    </div>
                </div>
              </div>
              <script>window.CI360 = { notInitOnLoad: true }</script>
              <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
              <div class="color-gray-4 text-center m-b-30" v-if="currentExterior && currentExterior.colorFolder">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="showroom__three-sixty-icon"><path d="M9.724 9.472c0-1.584-.912-2.28-2.82-2.28-.6 0-1.632.18-2.268.468v1.296c.816-.276 1.5-.396 2.268-.384.864.012 1.164.336 1.164.924 0 1.056-.948 1.284-1.752 1.284H5.68v1.392h.636c1.212 0 2.064.228 2.064 1.332-.036.816-.42 1.212-1.476 1.212-.768 0-1.344-.06-2.556-.348v1.308a8.962 8.962 0 002.7.444c1.848 0 2.988-.792 2.988-2.616 0-1.26-.552-1.896-1.416-2.196.672-.372 1.104-.96 1.104-1.836zM14.343 14.788c-1.488 0-1.584-1.2-1.584-2.988a5.527 5.527 0 011.572-.252c.972 0 1.38.384 1.38 1.548 0 1.116-.324 1.692-1.368 1.692zm.324-6.228c.612 0 1.308.108 2.124.312V7.6a7.966 7.966 0 00-2.436-.408c-1.668 0-3.264.744-3.264 4.764 0 2.628.912 4.176 3.264 4.176 2.064 0 3.012-1.272 3.012-3.156 0-1.776-.96-2.808-2.736-2.808-.528 0-1.176.096-1.836.3.132-1.548.924-1.908 1.872-1.908zM21.62 16.132c1.968 0 3.132-1.344 3.132-4.428 0-3.084-1.164-4.512-3.132-4.512-1.968 0-3.12 1.428-3.12 4.512 0 3.096 1.152 4.428 3.12 4.428zm0-1.344c-1.116 0-1.464-1.008-1.464-3.084 0-2.028.348-3.168 1.464-3.168s1.476 1.14 1.476 3.168c0 2.076-.36 3.084-1.476 3.084z" fill="currentColor"></path><path d="M15 23c-7.732 0-14-2.727-14-6.09 0-1.263.885-2.437 2.4-3.41m17.667 8.9C25.76 21.417 29 19.328 29 16.91c0-1.263-.885-2.437-2.4-3.41" stroke="currentColor" stroke-width="1.5"></path><circle cx="27.5" cy="6.5" r="1.75" stroke="currentColor" stroke-width="1.5"></circle><path d="M12 19l4 4-4 4" stroke="currentColor" stroke-width="1.5"></path></svg>
                <p><small>{{$t("showroom.notify")}}</small></p>
              </div>
              <div class="conf-summary-id" v-if="false">
                <div class="wrapper-content">
                  <b>{{$t("configurator[13]")}}</b>
                  <a href="#" id="link-copy-code" 
                      @click.prevent.stop="copyUrlCode(summaryCode, $event)" 
                      class="flex align-center" 
                      data-placement="bottom"
                      data-delay='{ "show": 500, "hide": 100 }'
                      data-trigger="focus" 
                      role="button"
                      title="Ссылка скопированно">
                    <input id="copyUrlCode" class="bury">
                    <div class="conf-summary-code m-h-15"><u>{{summaryCode}}</u></div>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M14.734 11.239l2.706-2.955c.747-.816.747-2.14 0-2.956l-2.03-2.216c-.746-.816-1.958-.816-2.705 0L8.647 7.545c-.747.816-.747 2.139 0 2.955l1.015 1.108m-3.72-2.586L2.56 12.716c-.747.816-.747 2.14 0 2.956l2.03 2.216c.746.816 1.957.816 2.705 0l4.735-5.172c.747-.816.746-2.139-.001-2.955l-1.014-1.108" stroke="currentColor" stroke-width="1.5"></path></svg>
                  </a>
                </div>
              </div>
              <div class="conf-summary-params">
                <div class="wrapper-content">
                  <div class="item col-md-6">
                    <div class="fw-6 font-size-nm m-b-20">{{$t("configurator[4]")}}</div>
                    <div class="info-content">
                      <dl><dt>{{$t("configurator[6]")}}</dt> <dd>{{currentEngine.name}} / {{currentEngine.descr}}</dd></dl> 
                      <dl><dt>{{$t("configurator[7]")}}</dt> <dd>{{currentGearbox.value}}, {{currentGearbox.name}}</dd></dl> 
                      <dl><dt>{{$t("configurator[8]")}}</dt> <dd>{{currentDrive.value}}</dd></dl>
                    </div>
                  </div>
                  <div class="item col-md-6">
                    <div class="fw-6 font-size-nm m-b-20">{{$t("showroom.color")}}</div>
                    <div class="info-content">
                      <dl v-if="currentExterior">
                        <dt>{{$t("showroom.exterior")}}</dt>
                        <dd><div class="flex align-center"><span>{{currentExterior.name}}</span> <figure :style="'background-image: url(\''+currentExterior.icon+'\');'"></figure></div></dd>
                      </dl>
                      <dl v-if="currentInterior">
                        <dt>{{$t("showroom.interior")}}</dt>
                        <dd><div class="flex align-center"><span>{{currentInterior.name}}</span> <figure :style="'background-image: url(\''+currentInterior.icon+'\');'"></figure></div></dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div class="config-details">
                <section class="item active" v-if="model.standart">
                  <a href=".item" class="title-click" tc tc-closest>{{$t("configurator[9]")}}<i class="fa fa-angle-up"></i></a>
                  <div class="section-body">
                    <div class="section-body-wrapper">
                      <div class="list-block-body" v-for="(item, key) in model.standart" :key="key">
                        <h4>{{item.name}}</h4>
                        <ul>
                          <li v-for="(text, key) in item.values" :key="key">
                            <span>{{text}}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="item" v-for="(gOption, key) in currentComplectation.options" :key="key">
                  <a href=".item" class="title-click" tc-closest tc>{{gOption.name}}<i class="fa fa-angle-up"></i></a>
                  <div class="section-body">
                    <div class="section-body-wrapper">
                      <div class="list-block-body">
                        <ul>
                          <li v-for="(value, key) in gOption.values" :key="key">{{value}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div class="conf-feedback" id="conf-feedback">
            <div class="entry-content">
              <div class="form-content pt-6 desktop:pt-20 pb-12 desktop:pb-20">
                <div>
                  <h3>{{$t("configurator_feedback[0]")}} {{currentModelLine.name}} {{selectComplectation.name}} {{currentEngine.name}}</h3>
                  <p>{{$t("configurator_feedback[1]")}}</p>
                </div>
                <form action="https://cdn.kia.uz/feedback.php" method="POST" formaj>

                  <input type='hidden' name='anti-bot-a' id='anti-bot-a' :value="new Date().getFullYear()"/>
				          <input type='text' name='anti-bot-q' id='anti-bot-q' size='30' value='19'  class="hide" />
                  <input type="text" value="carBook" name="type" class="hide">
                  <input type="text" name="carName" class="hide" :value="model.title+' '+currentComplectation.name">
                  <input type="text" name="engine" class="hide" :value="currentEngine.name+' / '+currentEngine.descr">
                  <input type="text" name="transmission" class="hide" :value="currentGearbox.value+', '+currentGearbox.name">
                  <input type="text" name="unit" class="hide" :value="currentDrive.value">
                  <input type="text" name="bodyColor" class="hide" :value="currentExterior.name" v-if="currentExterior">
                  <input type="text" name="interColor" class="hide" :value="currentInterior.name" v-if="currentInterior">

                  <div class="row">
                    <div class="input-content m-v-30 col-md-6 p-h-15">
                      <input type="text" name="name" :placeholder="$t('form.name')"  class="form-control" required>
                    </div>
                    <div class="input-content m-v-30 col-md-6 p-h-15">
                      <input value="+998" name="phone" type="text" class="form-control" v-facade="'+### (##) ###-##-##'" placeholder="+998 (__) ___−__−__" required minlength="19">
                    </div>
                  </div>
                  <div class="iagree m-v-30">
                    <label class="flex" role="button">
                      <input type="checkbox" name="iagree" class="hide" required>
                      <span class="checkbox-style-1"></span>
                      <span class="p-l-20">{{$t("form.iagree")}}</span>
                    </label>
                  </div>
                  <span class="btn-def">
                    <button type="submit">{{$t("form.book")}}</button>
                  </span>
                </form>
                <div class="form-success-block">
                  <div class="form-success-block-wrapper pv-10">
                    <h3>{{$t("form.response[0]")}}</h3>
                    <br>
                    <p>{{$t("form.response[1]")}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="conf-down">
      <div class="container-p">
        <div class="flex-wrapper">
          <span class="btn-def btn-step-back" v-if="currentStepNum < steps.length">
            <nuxt-link :to="localePath('/configurator')" v-if="currentStepNum <= 2" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              {{$t("configurator[1]")}}
            </nuxt-link>
            <a href="javascript:;" v-else @click="progressStepsBar('prev')" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              {{$t("configurator[1]")}}
            </a>
          </span>
          <span class="btn-def">
            <a href="javascript:;" v-if="currentStepNum == steps.length" @click.prevent.stop="scrollAnimate('#conf-feedback', $event)">{{$t("form.book")}}</a>
            <a href="javascript:;" v-if="currentStepNum < steps.length" @click="progressStepsBar('next')">{{$t("configurator[2]")}}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import mainjs from '@/static/js/main';
import { configuratorModels, configuratorModel } from '~/api/otherApi';
import _ from 'lodash';

export default {
  head() {
    return {
      title: this.page_data.header.title,
      meta: [
        {
          name: "description",
          content: this.page_data.header.title
        },
        {
          name: "keywords",
          content: this.page_data.header.title
        }
      ],
    }
  },
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    try{
      
      const modelName = route.params.id;
      var selectModelId;
      let page_data = await configuratorModels(store.state.lang, $axios)
      page_data.models.forEach(m => {
      if (m.name.toLowerCase() == modelName.toLowerCase()) 
        selectModelId = m.id;
      });
      var model = await configuratorModel(store.state.lang, $axios, {selectModelId})
      return {
        model: model,
        page_data: page_data
      }
    }catch(e){
      console.log(e)
      error(e);
      // redirect(`/models/${route.params.id}/desc`);
    }
  },
  components: {},
  compluted: {

  },
  filters:{

  },
  data(){
    return {
      currentStepNum: 2,
      currentEngine: {},
      currentGearbox: {},
      currentDrive: {},
      currentPrice: 0,
      newPrice: 0,
      currentComplectation: {},
      selectComplectations: [],
      currentExterior: {},
      currentInterior: {},
      panoActive: false,

      currentModel: {},
      currentModelLine: {},
      currentFuelType: {},
      currentTransmission: {},
      currentOverview: {},

      
      selectComplectation: {},
      selectExteriorColor: {},
      selectInteriorColor: {},
      selectOverview: {},
      selectPanorama: {},


      groupOptions: [],
      uniqueParams: {},

      steps: [
        {
          num: 1,
          text: "01",
          description: this.$t('configurator_steps[1]')
        },
        {
          num: 2,
          text: "02",
          description: this.$t('configurator_steps[2]')
        },
        {
          num: 3,
          text: "03",
          description: this.$t('configurator_steps[3]')
        },
        {
          num: 4,
          text: "04",
          description: this.$t('configurator_steps[4]')
        },
        {
          num: 5,
          text: "05",
          description: this.$t('configurator_steps[0]')
        },
      ],
    }
  },
  mounted(){
    $('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 0
    });
    // Начальный выбор комплектации
    this.selectParamEngine(this.currentEngine);
    // Активация showroom 360 при клике
    $(document).on("click", ".showroom-item-cover", ()=>{
      window.CI360.init();
    })
    $('[style="transform: none;"]').removeAttr("style")
  },
  methods: {
    /* События Изменение цвета  */
    async colorChangeExterior(color, parentClass){
      parentClass = parentClass || ".showroom-main";
      this.currentExterior = color;
      window.CI360.destroy();
      $(parentClass+" [data-folder]").attr('data-folder', this.currentExterior.colorFolder)
      $(parentClass+" [data-amount]").attr('data-amount', 72)
      if($(parentClass).find("canvas").length > 0)
        window.CI360.init();
      else{
        $(parentClass).find(".showroom-item-cover").find("img").attr("src", this.currentExterior.colorFolder+"/1.png")
      }
    },
    async colorChangeInterior(color){
      this.currentInterior = color;
    },
    /* Текущее выбранная комплектация */
    async selectComplectationAppend(complectation){
      this.currentComplectation = complectation;
      this.currentPrice = complectation.price;
      this.newPrice = complectation.dop_price;
      console.log(complectation, ' complectation')
      this.currentExterior = this.currentComplectation.bodyColors[0];
      this.currentInterior = this.currentComplectation.interiorColors[0];
    },
    validParams(val, arr){
      return arr.find(function(arrItem){
        return arrItem === val
      })
    },
    async selectParamEngine(param){
      this.currentEngine = param;

      var statusAllowedGears = this.currentEngine.allowedGears.find(allowedName => {
        return allowedName == this.currentGearbox.name
      });
      if(!statusAllowedGears){
        this.currentGearbox = this.model.gears.find(e=>{
          if(this.currentEngine.allowedGears[0] == e.name)
            return e;
        }) 
      }

      var statusAllowedDrive = this.currentEngine.allowedPrivodi.find(allowedName => {
        return allowedName == this.currentDrive.name
      });
      if(!statusAllowedDrive){
        this.currentDrive = this.model.privodi.find(e=>{
          if(this.currentEngine.allowedPrivodi[0] == e.name)
            return e;
        }) 
      }
    },
    selectParamGearbox(param){
      this.currentGearbox = param;
    },
    selectParamDrive(param){
      this.currentDrive = param;
    },

    scrollAnimate(elId, event){
      $('html, body').animate({ scrollTop: $(elId).offset().top-30}, 300);
    },
    async progressStepsBar(stepNum){
      const that = this;
      console.log(stepNum);
      if(stepNum == "next")
        this.currentStepNum++;
      else if(stepNum == "prev"){
        this.currentStepNum--;
      }
      else if(stepNum >= 0){
        this.currentStepNum = stepNum;
      }
      
      // step 3
      if(this.currentStepNum == 3){
        //https://api.kia.uz/api/public/configurator/get/3/978/0/6AT/FWD
        var url = 
          this.$store.state.lang+
          "/configurator/get/"+
          this.currentStepNum+"/"+
          this.model.id+"/"+
          this.currentEngine.id+"/"+
          this.currentGearbox.name+"/"+
          this.currentDrive.name


        this.selectComplectations = await this.$axios.$get(url)
        this.selectComplectations = _.sortBy(this.selectComplectations, ["price"])
        // this.selectComplectations
        this.currentComplectation = _.find(this.selectComplectations, { 'price': this.currentPrice+"" });
        this.currentExterior = this.currentComplectation.bodyColors[0];
        if(this.currentComplectation.interiorColors)
          this.currentInterior = this.currentComplectation.interiorColors[0];
      }

      // step 5
      if(this.currentStepNum == 5){
        setTimeout(() => {
          mainjs()  
        }, 50);
      }

    },
  },
  watch: {
    currentEngine(){
      this.currentPrice = this.model.minPrices[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]
      this.newPrice = this.model.minPricesDop[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]
    },
    currentGearbox(){
      this.currentPrice = this.model.minPrices[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]
      this.newPrice = this.model.minPricesDop[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]
    },
    currentDrive(){
      this.currentPrice = this.model.minPrices[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]
      this.newPrice = this.model.minPricesDop[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]
    }
  },
  async created(){
    console.log('CONSFFOFO')
    this.model.privodi = _.uniqBy(this.model.privodi, "name");
    /* Начальная выборка */

    this.currentEngine = this.model.engines[0];
    
    this.model.gears.forEach(gear => {
      if(gear.name === this.currentEngine.allowedGears[0])
      this.currentGearbox = gear;
    });
    this.model.privodi.forEach(drive => {
      if(drive.name === this.currentEngine.allowedPrivodi[0])
      this.currentDrive = drive;
    });
    
    this.currentPrice = this.model.minPrices[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]
    this.newPrice = this.model.minPricesDop[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]

  },
}

</script>