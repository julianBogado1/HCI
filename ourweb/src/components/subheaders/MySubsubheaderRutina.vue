<template>
    <div class="mySubheaderDiv">
        <div class="mySubheaderDivInfo">
            <h3 class="mySubheaderText">Rutina 1</h3>
            <MyEditDelete/>
        </div>
        <v-divider :thickness="1" class="border-opacity-50"></v-divider>
    </div>
</template>

<style scoped>
    .mySubheaderText{
        color: #000000;
        font-weight: 400;
    }

    .mySubheaderDiv{
        margin-left: 80px;
        margin-right: 80px;
    }

    .mySubheaderDivInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<script setup>
    import MyEditDelete from '../MyEditDelete.vue';
</script>