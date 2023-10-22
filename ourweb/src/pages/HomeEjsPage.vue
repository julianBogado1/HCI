<template>
    <div class="home">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="subheader">
          <MySubheaderEjsExplorar/>
        </div>
        <MyBodyEjsExplore/>
        <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
    import MyHeader from '../components/MyHeader.vue'
    import MyFooter from '../components/MyFooter.vue'
    import MyBodyEjsExplore from '../components/MyBodyEjsExplore.vue'
import MySubheaderEjsExplorar from '@/components/subheaders/MySubheaderEjsExplorar.vue';
  </script>
  
  <style scoped>
      .subheader{
          position: sticky;
          top: 104px;
          z-index: 999;
  
          background-color: #FFFFFF;
      }
  
      .home{
        background-color: #FFFFFF;
      }
  </style>