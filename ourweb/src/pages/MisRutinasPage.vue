<template>
    <div class="home">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="subheader">
            <MySubheaderRutina/>
        </div>
        <MisRutinasBody/>
        <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
    import MyHeader from '../components/MyHeader.vue'
    import MyFooter from '../components/MyFooter.vue'
    import MisRutinasBody from '../components/MisRutinasBody.vue'
import MySubheaderRutina from '@/components/subheaders/MySubheaderRutina.vue';
  </script>
  
  <style scoped>
      .subheader{
          position: sticky;
          top: 110px;
          z-index: 999;
  
          background-color: #FFFFFF;
      }
  
      .home{
        background-color: #FFFFFF;
      }
  </style>