<template>
    <v-footer class="myfooter d-flex flex-column">
      
      <div class="green d-flex w-100 align-center px-4">
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
    .green{
        background-color: #73C7A4;
    }

    .myfooter{
        position: fixed; bottom: 0; left: 0; right: 0;
        padding: 0;
    }
</style>