<template>
    <!--Left card-->
        <div class="wrapper">
            <MyFiltro/>
        </div>
    <div class="grid-container">
        

        <div></div>

        <div class="content">
            <MyNoEjsMessage/>
            <EjsList/>
        </div>
    </div>
</template>

<script setup>
    import MyFiltro from './MyFiltro.vue';
import EjsList from './EjsList.vue';
    import MyNoEjsMessage from './messages/MyNoEjsMessage.vue';
</script>

<style scoped>
    .v-rows {
        display: grid;
        margin-left: 10%;
        margin-right: 10%;
    }

    .grid-container {
            display: grid;
            grid-template-columns: 260px 1fr;
            grid-gap: 10px;
            width: 100%;
        }

    .content {
        flex-grow: 1;
        padding: 20px;
    }

    .wrapper {
        max-width: min-content;
        position: fixed;
        z-index: 99;
    }
</style>