
import { getMenu } from '~/api/otherApi';

export default function ({ app }) {
  // onBeforeLanguageSwitch called right before setting a new locale
  // console.log(app.i18n.locale)

  // if(app.i18n.locale == "uz"){
  //   app.store.dispatch("lang", "")
  // }else{
  //   app.store.dispatch("lang", app.i18n.locale)
  // }
  // context.store.commit("other/lang", "")
  app.i18n.onBeforeLanguageSwitch = async (oldLocale, newLocale, isInitialSetup, context) => {
    var menu_data
    if(newLocale == "uz"){
      menu_data  = await context.$axios.$get('/menu')
      context.store.dispatch("initLanguage", "")
    }else{
      menu_data  = await context.$axios.$get(newLocale+'/menu')
      context.store.dispatch("initLanguage", newLocale)
    }
    context.store.dispatch("setMenu", menu_data)


    // if(!isNaN(context.route.params.id*1)){
    //   var parentPath = route.path.replace(/\d+\/?$/gim, "")
    //   // context.localePath(parentPath)
    //   $nuxt.$router.push(parentPath)
    //   console.log(parentPath)
    //   setTimeout(() => {
    //     // app.$i18n.setLocale(newLocale)  
    //   }, 1);
      
    // }


  },
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {

  }
}