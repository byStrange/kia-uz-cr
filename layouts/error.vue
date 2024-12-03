<template>
  <section class="m-b-100 p-v-60">
    <div class="img-content text-center mt-10" style="height: 70vh;">
      <img src="/img/error.svg" alt="" style="height: 100%;">
      <div>
        <nuxt-link :to="'/'" class="hover-aunderline"><b>Вернуться на главную</b></nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  h1{
    color: red;
  }
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>