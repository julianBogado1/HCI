<template>
    <div class="mySubheaderDiv">
        <div class="mySubheaderDivInfo">
            <h3 class="mySubheaderText">Ejercicio 1</h3>
            <MyEditDelete/>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Descripción</p>
        </div>
        </div>
        
        <div class="details-info">
            <p class="infoText">El curl de biceps es un ejercicio diseñado para tonificar los biceps</p>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Pasos a seguir</p>
        </div>
        </div>
        
        <div class="details-info">
            <p class="infoText">Tomar una mancuerna con un peso adecuado
Enderezar espalda y hombros. No debe arquear la espalda ni mover los hombros durante el ejercicio
Con las palmas hacia arriba, mueva su brazo para levantar el peso de la mancuerna. El codo solo debe flexionarse, y no desplazarse vertical u horizontalmente
Posteriormente baje el brazo y repita el ejercicio</p>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Series</p>
        </div>
        </div>

        <div class="details-info">
            <p class="infoText">2</p>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Duración</p>
        </div>
        </div>

        <div class="details-info">
            <p class="infoText">50 segundos</p>
        </div>

    </div>
</template>

<script setup>
import MyEditDelete from '../components/MyEditDelete.vue';


</script>

<style scoped>
    .mySubheaderText{
        color: #000000;
        font-weight: 400;
        font-size: x-large;
    }

    .mySubheaderText2{
        color: #49454F;
        margin-right: 50px;
        font-weight: 300;
        font-size: large;
    }

    .infoText{
        color: #000000;
        font-weight: 400;
        font-size: large;
    }

    .mySubheaderDiv{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 80px;
        margin-right: 80px;
    }

    .mySubheaderDivInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .details-div{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .details-info{
        margin-left: 1%;
    }
</style>