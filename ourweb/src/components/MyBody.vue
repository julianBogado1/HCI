<template>
    <v-row>
        <!--Left card-->
        <v-col class="wrapper">
            <MyFiltro/>
        </v-col>

        <v-col class="content">
            <MyRutina/>
        </v-col>
    </v-row>
</template>

<script setup>
    import MyFiltro from './MyFiltro.vue';
import MyRutina from './MyRutina.vue';
</script>

<style scoped>
    .v-row {
        display: flex;
        margin-left: 40px;
        margin-right: 40px;

    }

    .content {
        flex-grow: 1;
        padding: 20px;
    }

    .wrapper {
        max-width: min-content;
    }
</style>