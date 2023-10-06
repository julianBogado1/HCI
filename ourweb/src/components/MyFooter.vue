<template>
    <v-footer class="d-flex flex-column">
      
      <div class="myfooter d-flex w-100 align-center px-4">
        <strong class="text-white">Contactenos</strong>
  
      
      <div class="flex-column">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
          color="white"
        ></v-btn>
      </div>  
    </div>
      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
  </template>

  <script>
    export default {
    data: () => ({
      icons: [
        'mdi-email',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
    .myfooter{
        background-color: #73C7A4;
        flex: 1;
    }
</style>