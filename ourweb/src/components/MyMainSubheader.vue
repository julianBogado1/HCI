<template>
    <div class="subheader">
        <MySubheaderRutina/>
    </div>
</template>

<script setup>
import MySubheaderRutina from './MySubheaderRutina.vue';

</script>
<style scoped>
    .subheader{
        margin-top: 1%;
        margin-bottom: 1%;
    }

    .subheader-element{
        position: fixed;top: 115px; left: 0; right: 0;
        z-index: 99;
    }
</style>