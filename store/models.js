
// export const actions = {
//   async fetchPageData(context, params){
//     try{
//       //const models = await this.$axios.$get('http://kia-api-php/handler.php', {params})
//       //console.log(context, params);
//       const models = await this.$axios.$get('https://kia.uz/php/handler.php', {params})
      
//       return models
//     }catch(e){
//       throw e
//     }
//   },

//   async fetchVideo(context, params){
//     try{
//       //const modelVideo = await this.$axios.$get('http://kia-api-php/video_bank.php', {params})
//       const modelVideo = await this.$axios.$get('https://kia.uz/php/video_bank.php', {params})
//       return modelVideo
//     }catch(e){
//       throw e
//     }
//   },
//   async configuratorModels(context){
//     try{
//       const url =  this.app.langValUrl()+"/configurator/get/1";
//       const data = await this.$axios.$get(url);
//       return data;
//     }catch(e){
//       throw e
//     }
//   },
//   async configuratorModel(context, params){

//     try{
//       var selectModel;
//       const page_data = await this.$axios.$get(this.app.langValUrl()+'/configurator/get/1');
//       page_data.models.forEach(m => {
//         if (m.name.toLowerCase() == params.modelName.toLowerCase()) 
//           selectModel = m;
//       });
//       const model = await this.$axios.$get(this.app.langValUrl()+'/configurator/get/2/'+selectModel.id)
//       return {model, page_data}
//     }catch(e){
//       throw e
//     }
//   },
// }