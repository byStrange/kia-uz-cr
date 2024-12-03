

// export const state = () => ({
//   lang: "",
//   menu_data: null
// })

// export const mutations = {
//   lang(state, lang) {
//     state.lang = lang
//   },
//   menu_data(state, data){
//     state.menu_data = data
//   }
// }

// export const actions = {
//   async fetchPath(context, params){
//     try {
//       // console.log("context other, ", context, this.$i18n.locale);
//       var data = await this.$axios.$get(params.path);
//       // if(this.$i18n.locale == "ru")
//         // var data = await this.$axios.$get(params.path);
//       // else
//         // var data = await this.$axios.$get(this.$i18n.locale+params.path);
//       return data;
//     } catch (e) {
//       throw e;
//     }
//   },
//   async newsFetch(context, params){
//     try {
//       var path;
//       console.log(params);
//       if(!params.path)
//          path = 0;
//       // if(params.path.substring(params.path.length-1) == "/")
//       //    params.path = params.path.substring(0, params.path.length-1)
//       const model = await this.$axios.$get("https://api.kia.uz/article/all/"+path);
//       return model;
//     } catch (e) {
//       throw e;
//     }
//   },
// }