<template>
    <div class="subheader">
        <MySubheaderRutinasExplorar class="subheader-elment"/>
    </div>
</template>

<script setup>
import MySubheaderRutinasExplorar from './MySubheaderRutinasExplorar.vue';

</script>
<style scoped>
    .subheader{
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .subheader-element{
        position: fixed;
        z-index: 99;
    }
</style>