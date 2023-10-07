<template>
    <div class="rutina-card dflex w-100">
        <div class="info-card">
            <div class="name-text">
                <p>Rutina 1</p>
            </div>
            <div class="desc-text">
                <p>Descripción: rutina buenarda</p>
            </div>
        </div>
        <div class="dif-card">
            <Brazitos1/>
        </div>
    </div>
</template>

<script setup>
    import Brazitos1 from './brazitos/Brazitos1.vue';
</script>

<style scoped>
    .rutina-card{
        background-color: #D9D9D9;
        width: 800px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .info-card{
        height: 90px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .dif-card{
        background-color: #BEBEBE;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .name-text{
        font-size: x-large;
        color: #000000;
    }

    .desc-text{
        font-size: large;
        color: #000000;
    }
</style>