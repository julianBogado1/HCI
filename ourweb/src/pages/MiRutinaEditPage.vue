<template>
    <v-main style="padding-top: 110px; padding-bottom: 74px;">
      <MyHeader />
      <MyMainSubheader/>
      <MyRutinaEditForm/>
      <MyFooter />      
    </v-main>
</template>

<script setup>
  import MyHeader from '../components/MyHeader.vue'
  import MyMainSubheader from '../components/MyMainSubheader.vue'
import MyRutinaEditForm from '../components/MyRutinaEditForm.vue'
</script>