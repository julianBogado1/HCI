<template>
    <div class="mi-rutina-edit">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader/>
        <compo404/>
        <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
import MyFooter from '@/components/MyFooter.vue'
import MyHeader from '@/components/MyHeader.vue';
import compo404 from '@/components/compo404.vue'
  </script>
  
  <style scoped>
  
      .mi-rutina-edit{
        background-color: #FFFFFF;
      }
  </style>