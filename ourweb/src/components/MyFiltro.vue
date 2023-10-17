<template>
    <div class="filter-card">
        <div>
            <p class="field-text title-text">Filtros:</p>
        </div>
        <div>
            <p class="field-text">Dificultad</p>
            <MyBrazoCheck/>
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
        margin: 5%;
        margin-left: 10%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 3%;
        padding-bottom: 3%;
        width: 240px;
    }

    .field-text{
        font-weight: bold;
        font-size: medium;
        color: #000000;
    }

    .title-text{
        margin-bottom: 1%;
    }
</style>