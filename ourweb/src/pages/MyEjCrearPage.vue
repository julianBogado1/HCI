<template>
    <div class="edit-ej">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="subheader">
          <MySUbheaderMisEjsView/>
        </div>
        <div class="editcontent">
          <MyEjCrear/>
        </div>
        <MyFooter/>      
      </v-main>
    </div>
  </template>
  
  <script setup>
 import MyHeader from '../components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';
import MyEjCrear from '@/components/MyEjCrear.vue';
import MySUbheaderMisEjsView from '@/components/subheaders/MySUbheaderMisEjsView.vue';
  </script>
  
  <style scoped>
      .subheader{
          position: sticky;
          top: 110px;
          z-index: 999;
  
          background-color: #FFFFFF;
      }
  
      .edit-ej{
        background-color: #FFFFFF;
      }

      .editcontent{
        display: flex;
        align-items: center;
        margin-left: 5%;
        margin-right: 5%;
      }
  </style>