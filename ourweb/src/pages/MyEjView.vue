<template>
    <div class="editroutine">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="subheader">
          <MySUbheaderMisEjsView/>
        </div>
        <MisEjsInfo/>
        <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
 import MyHeader from '../components/MyHeader.vue'
import MisEjsInfo from '../components/MisEjsInfo.vue';
import MyFooter from '@/components/MyFooter.vue';
import MySUbheaderMisEjsView from '@/components/subheaders/MySUbheaderMisEjsView.vue';
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