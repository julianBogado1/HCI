<template>
    <v-footer class="myheader d-flex flex-column">
      
      <div class="cartel d-flex w-100 align-center">
        <router-link to="/"><img src="../assets/ourlogo.jpeg" class="left-image" /></router-link>
        
        <div class="mytext align-center">
            <p class="textHeader">Creatina</p>
            <p class="textHeader">La mejor plataforma para crear tus rutinas</p>
        </div>
      </div>
    </v-footer>
  </template>

<script setup>
</script>

<style scoped>
    .cartel{
        background-color: #73C7A4;
        height: 80px;
        display: flex;
        align-items: center;
    }

    .myheader{
        position: fixed; top: 0; left: 0; right: 0;
        padding: 0;
        z-index: 100; /*esto hace que siempre quee encima del contenido cuando scrolleas*/
    }

    .mytext{
        flex-grow: 1;
        text-align: center;
        color: white;
        position: absolute;
        top: 37.5%;
        left: 50%;
        transform: translate(-50%,-50%);    /*esto hace que quede centrado a pesar de la imagen de la izq*/
    }

    .left-image {
    width: 80px;
    height: 80px;
    }

    .textHeader{
        font-size: x-large;
    }
</style>