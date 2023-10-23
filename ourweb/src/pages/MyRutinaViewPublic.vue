<template>
    <div class="mi-rutina-edit">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="subheader">
          <MySubheaderRutinasExplorar/>
        </div>
        <MiRutinaInfoPublic/>
        <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
import MiRutinaInfoPublic from '@/components/MiRutinaInfoPublic.vue';
import MyHeader from '../components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue';
import MySubheaderRutinasExplorar from '@/components/subheaders/MySubheaderRutinasExplorar.vue';
  </script>
  
  <style scoped>
      .subheader{
          position: sticky;
          top: 104px;
          z-index: 999;
  
          background-color: #FFFFFF;
      }
  
      .mi-rutina-edit{
        background-color: #FFFFFF;
      }
  </style>