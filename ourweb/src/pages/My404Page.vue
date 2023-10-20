<template>
    <div class="mi-rutina-edit">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeaderNoNavbar/>
        <compo404/>
        <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
import MyFooter from '@/components/MyFooter.vue'
import compo404 from '@/components/compo404.vue'
import MyHeaderNoNavbar from '@/components/MyHeaderNoNavbar.vue'
  </script>
  
  <style scoped>
  
      .mi-rutina-edit{
        background-color: #FFFFFF;
      }
  </style>