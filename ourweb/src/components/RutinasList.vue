<template>
    <div class="lista">
        <MyRutinaEjemplo/>
        <MyRutinaEjemplo2/>
        <MyRutinaEjemplo/>
        <MyRutinaEjemplo2/>
        <MyRutinaEjemplo/>
        <MyRutinaEjemplo2/>
        <MyRutinaEjemplo/>
        <MyRutinaEjemplo2/>
        <MyRutinaEjemplo/>
        <MyRutinaEjemplo2/>
    </div>
</template>

<script setup>
import MyRutinaEjemplo from './MyRutinaEjemplo.vue';
import MyRutinaEjemplo2 from './MyRutinaEjemplo2.vue';

</script>

<style scoped>
    .lista{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>