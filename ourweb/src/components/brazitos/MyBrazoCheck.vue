<template>
    <div class="brazo-select">
        <Brazitos1/>
        <v-checkbox hide-details/>
    </div>
    <div class="brazo-select">
        <Brazitos2/>
        <v-checkbox hide-details/>
    </div>
    <div class="brazo-select">
        <Brazitos3/>
        <v-checkbox hide-details/>
    </div>
</template>

<script setup>
import Brazitos1 from './Brazitos1.vue';
import Brazitos2 from './Brazitos2.vue';
import Brazitos3 from './Brazitos3.vue';
</script>

<style scoped>
    .brazo-select{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>