<template>
    <div class="darkgreen buttonNavBar w-100 dflex">
        <div>
            <v-btn to="/" class="darkgreen text-white" size="small" rounded="0" elevation="0">Buscar  Rutinas</v-btn>
            <v-btn to="/ejs" class="darkgreen text-white" size="small" rounded="0" elevation="0">Buscar Ejercicios</v-btn>
            <v-btn to="/mis-rutinas" class="darkgreen text-white" size="small" rounded="0" elevation="0">Mis  Rutinas</v-btn>
            <v-btn to="/mis-ejs" class="darkgreen text-white" size="small" rounded="0" elevation="0">Mis Ejercicios</v-btn>
       </div>
        <v-btn to="/profile" class="darkgreen text-white" size="small" rounded="0" elevation="0">Mi Cuenta</v-btn>
      </div>
    
</template>

<style scoped>
    .buttonNavBar{
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .darkgreen{
        background-color: #5DA587;
    }
</style>