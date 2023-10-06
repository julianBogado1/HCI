<template>
    <v-footer class="myheader d-flex flex-column">
      
      <div class="cartel d-flex w-100 align-center">
        <img src="../assets/ourlogo.jpeg" class="left-image" />

        <div class="mytext align-center">
            <p class="textHeader">Creatina</p>
            <p class="textHeader">La mejor plataforma para crear tus rutinas</p>
        </div>
      </div>
    </v-footer>
  </template>

<script>
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
    }

    .mytext{
        flex-grow: 1;
        text-align: center;
        color: white;
    }

    .textHeader{
        font-size: x-large;
    }

    .left-image {
    width: 80px;
    height: 80px; 
    margin-right: 10px;
    }
</style>