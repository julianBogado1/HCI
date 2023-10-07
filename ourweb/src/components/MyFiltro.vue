<template>
    <div class="filter-card">
        <div>
            <p class="field-text">Search</p>
        </div>
        <div>
            <p class="field-text">Dificultad</p>
            <MyBrazoCheck/>
        </div>
        <div>
            <p class="field-text">Grupo Muscular</p>
        </div>
    </div>
</template>

<script setup>
    import MyBrazoCheck from './brazitos/MyBrazoCheck.vue';
</script>

<style scoped>
    .filter-card{
        background-color: #E6F6EF;
        border-radius: 15px;
        margin: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 240px;
    }

    .field-text{
        font-weight: bold;
        font-size: medium;
        color: #000000;
    }
</style>