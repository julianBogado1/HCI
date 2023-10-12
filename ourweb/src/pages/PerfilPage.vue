<template>
  <div class="profile">
    <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <MyPerfil/>
        <MyFooter />      
    </v-main>
  </div>
</template>

<script setup>
  import MyHeader from '../components/MyHeader.vue'
  import MyPerfil from '../components/MyPerfil.vue'
  import MyFooter from '../components/MyFooter.vue'
</script>