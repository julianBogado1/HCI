<template>
  <v-app>
    <v-main style="padding-top: 110px; padding-bottom: 74px;">
      <MyHeader />
      <MyRegistrarseMessage/>
      <MyRutina/>
      <MyRegisterForm/>
      <MyFooter />      
    </v-main>
  </v-app>
</template>

<script setup>
  import MyHeader from './components/MyHeader.vue'
  import MyFooter from './components/MyFooter.vue'
  import MyRegistrarseMessage from './components/messages/MyRegistrarseMessage.vue'
import MyRutina from './components/MyRutina.vue';
import MyRegisterForm from './components/MyRegisterForm.vue';
</script>
