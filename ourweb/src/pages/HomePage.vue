<template>
  <div class="home">
    <v-main style="padding-top: 110px; padding-bottom: 74px;">
      <MyHeader />
      <div class="subheader">
        <MySubheaderRutinasExplorar/>
      </div>
      <MyBody/>
      <MyFooter />      
    </v-main>
  </div>
</template>

<script setup>
  import MyHeader from '../components/MyHeader.vue'
  import MyFooter from '../components/MyFooter.vue'
  import MyBody from '../components/MyBody.vue'
  import MySubheaderRutinasExplorar from '../components/subheaders/MySubheaderRutinasExplorar.vue';
</script>

<style scoped>
    .subheader{
        position: sticky;
        top: 104px;
        z-index: 999;

        background-color: #FFFFFF;
    }

    .home{
      background-color: #FFFFFF;
    }
</style>