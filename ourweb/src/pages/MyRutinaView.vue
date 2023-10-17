<template>
    <div class="editroutine">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="subheader">
          <MySubheaderRutina/>
        </div>
        <MiRutinaInfo/>
        <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
import MiRutinaInfo from '@/components/MiRutinaInfo.vue';
import MyHeader from '../components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue';
import MySubheaderRutina from '@/components/subheaders/MySubheaderRutina.vue';
  </script>
  
  <style scoped>
      .subheader{
          position: sticky;
          top: 110px;
          z-index: 999;
  
          background-color: #FFFFFF;
      }
  
      .edit-routine{
        background-color: #FFFFFF;
      }
  </style>