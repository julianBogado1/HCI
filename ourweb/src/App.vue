<template>
  <v-app>
    <v-main style="padding-top: 110px; padding-bottom: 74px;">
      <MyHeader />
      <MyMainSubheader/>
      <MyRutina/>
      <MyRegisterForm/>
      <MyFooter />      
    </v-main>
  </v-app>
</template>

<script setup>
  import MyHeader from './components/MyHeader.vue'
  import MyFooter from './components/MyFooter.vue'
import MyRutina from './components/MyRutina.vue';
import MyRegisterForm from './components/MyRegisterForm.vue';
import MyMainSubheader from './components/MyMainSubheader.vue';
</script>
