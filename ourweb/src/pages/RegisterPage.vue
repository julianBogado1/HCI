<template>
    <div class="register">
    <v-main style="padding-bottom: 74px;">
        <div class="centeredCompo">
            <img src="../assets/ourlogo.jpeg" class="log-image" />
            <MyRegisterForm/>
        </div>
        <MyFooter />
    </v-main>
    </div>
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
        min-height: 80vh;
    }

    .log-image{
        width: 15%;
        height: auto;
    }
</style>