<template>
    <div class="mySubheaderDiv">
        <div class="myrow">
            <svg-icon type="mdi" :path="path" size="50"></svg-icon>
            <h2 class="mySubheaderText">Mis Ejercicios</h2>
        </div>
        <v-divider :thickness="2" class="border-opacity-50"></v-divider>
    </div>
</template>

<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiDumbbell  } from '@mdi/js';

    export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
        path: mdiDumbbell,
        }
    }
    }
</script>

<style scoped>
    .mySubheaderText{
        color: #000000;
        margin-left: 20px;
        font-weight: 400;
    }

    .mySubheaderDiv{
        padding: 1%;
        padding-left: 5%;
        padding-right: 5%;
    }

    .myrow{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>