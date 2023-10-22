<template>
    <div class="home">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader/>
        <div class="subheader">
          <MySubheaderRutinaView/>
        </div>
        <div class="editcontent">
          <MiRutinaCrear/>
        </div>
        <MyFooter/>
      </v-main>
    </div>
  </template>
  
  <script setup>
import MySubheaderRutinaView from '../components/subheaders/MySubheaderRutinaView.vue';
import MiRutinaCrear from '../components/MiRutinaCrear.vue';
import MyHeader from '../components/MyHeader.vue';
import MyFooter from '../components/MyFooter.vue';
 
  </script>
  
  <style>
  .subheader{
          position: sticky;
          top: 104px;
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