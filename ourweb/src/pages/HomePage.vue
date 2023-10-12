<template>
  <div class="home">
    <v-main style="padding-top: 110px; padding-bottom: 74px;">
      <MyHeader />
      <MyMainSubheader/>
      <MyBody/>
      <MyFooter />      
    </v-main>
  </div>
</template>

<script setup>
  import MyHeader from '../components/MyHeader.vue'
  import MyFooter from '../components/MyFooter.vue'
  import MyMainSubheader from '../components/MyMainSubheader.vue'
  import MyBody from '../components/MyBody.vue'
</script>