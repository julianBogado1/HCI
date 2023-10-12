<template>
    <v-main style="padding-bottom: 74px;">
        <div class="centeredCompo">
            <img src="../assets/ourlogo.jpeg" class="log-image" />
            <MyRegisterForm/>
        </div>
        <MyFooter />
    </v-main>
</template>

<script setup>
    import MyRegisterForm from '../components/MyRegisterForm'
    import MyFooter from '../components/MyFooter'
</script>

<style scoped>
    .centeredCompo{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .log-image{
        width: 25%;
    }
</style>