<template>
    <div class="darkgreen buttonNavBar w-100 dflex">
        <div>
            <v-btn to="/" class="darkgreen text-white" size="small" rounded="0" elevation="0">Inicio</v-btn>
            <v-btn to="/login" class="darkgreen text-white" size="small" rounded="0" elevation="0">Buscar  Rutina</v-btn>
            <v-btn to="/register" class="darkgreen text-white" size="small" rounded="0" elevation="0">Buscar Ejercicio</v-btn>
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