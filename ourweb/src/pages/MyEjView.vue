<template>
    <div class="editroutine">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="subheader">
          <MySubheaderMisEjs/>
        </div>
        <MisEjsInfo/>
        <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
  import MySubheaderMisEjs from '@/components/subheaders/MySubheaderMisEjs.vue';
import MyHeader from '../components/MyHeader.vue'
import MisEjsInfo from '../components/MisEjsInfo.vue';
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