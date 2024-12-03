

export function getModels(axios, id = null) {
  return axios({
    method: "get",
    url: `/models`,
  })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
}
export function getMenu(axios, lang) {
  return axios({
    method: "get",
    url: lang == 'uz' ? `/menu` : `${lang}/menu`,
  })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
}
export function fetchPath(axios, params){
  return axios({
    method: "get",
    url: `${params.path}`,
  })
  .then((response) => {
    return response.data;
  })
  .catch(() => {
    return null;
  });
}

export function configuratorModels(lang, axios, params){
  return axios({
    method: "get",
    url: lang == 'uz' ? `/configurator/get/1`: `${lang}/configurator/get/1`,
  })
  .then((response) => {
    return response.data;
  })
  .catch((e) => {
    console.error(e)
    return null;
  });
}
export function configuratorModel(lang, axios, params){
  // console.log(axios)
  return axios({
    method: "get",
    url: lang == 'uz' ? `/configurator/get/2/${params.selectModelId}` : `${lang}/configurator/get/2/${params.selectModelId}`,
  })
  .then((response) => {
    return response.data;
  })
  .catch((e) => {
    console.error(e)
    return null;
  });
  // try{
  //   var selectModel;
  //   const page_data = await this.$axios.$get(this.app.langValUrl()+'/configurator/get/1');
  //   page_data.models.forEach(m => {
  //     if (m.name.toLowerCase() == params.modelName.toLowerCase()) 
  //       selectModel = m;
  //   });
  //   const model = await this.$axios.$get(this.app.langValUrl()+'/configurator/get/2/'+selectModel.id)
  //   return {model, page_data}
  // }catch(e){
  //   throw e
  // }
}