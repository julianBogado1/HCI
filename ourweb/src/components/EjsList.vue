<template>
    <div class="lista">
        <MyEjEjemplo1/>
        <MyEjEjemplo1/>
        <MyEjEjemplo1/>
        <MyEjEjemplo1/>
        <MyEjEjemplo1/>
        <MyEjEjemplo1/>
        <MyEjEjemplo1/>
        <MyEjEjemplo1/>
    </div>
</template>

<script setup>
import MyEjEjemplo1 from './MyEjEjemplo1.vue';


</script>

<style scoped>
    .lista{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>