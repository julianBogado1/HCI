<template>
  <div class="mi-rutina-edit">
    <v-main style="padding-top: 110px; padding-bottom: 74px;">
      <MyHeader />
      <div class="subheader">
        <MySubheaderRutina/>
      </div>
      <MyRutinaEditForm/>
      <MyFooter />      
    </v-main>
  </div>
</template>

<script setup>
  import MySubheaderRutina from '@/components/subheaders/MySubheaderRutina.vue';
import MyHeader from '../components/MyHeader.vue'
  import MyRutinaEditForm from '../components/MyRutinaEditForm.vue'
</script>

<style scoped>
    .subheader{
        position: sticky;
        top: 110px;
        z-index: 999;

        background-color: #FFFFFF;
    }

    .mi-rutina-edit{
      background-color: #FFFFFF;
    }
</style>