<template>
    <div class="profile">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
          <MyHeader />
          <MyPerfilEdit/>
          <MyFooter />      
      </v-main>
    </div>
  </template>
  
  <script setup>
    import MyHeader from '../components/MyHeader.vue'
    import MyPerfilEdit from '../components/MyPerfilEdit.vue'
    import MyFooter from '../components/MyFooter.vue'
  </script>