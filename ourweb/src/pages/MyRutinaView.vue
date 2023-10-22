<template>
    <div class="editroutine">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="subheader">
          <MySubheaderRutinaView/>
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
import MySubheaderRutinaView from '@/components/subheaders/MySubheaderRutinaView.vue';
  </script>
  
  <style scoped>
      .subheader{
          position: sticky;
          top: 104px;
          z-index: 999;
  
          background-color: #FFFFFF;
      }
  
      .edit-routine{
        background-color: #FFFFFF;
      }
  </style>