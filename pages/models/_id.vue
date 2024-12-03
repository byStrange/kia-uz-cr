<template>
  <nuxt-child/>
</template>


<script>
export default {
  async asyncData({ params, query, $axios, error, store, route, redirect, i18n }){
    if(route.matched.length != 1)
      return;
    var path
    if(i18n.locale == "ru")
      path = "/models/"+route.params.id+"/desc"
    else
      path = "/"+i18n.locale+"/models/"+route.params.id+"/desc"//""+i18n.locale+"/models/"+route.params.id+"/desc"
    if(route.params.id)
      redirect(301, path)
  },
}
</script>