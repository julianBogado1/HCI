<template>
    <div class="mySubheaderDiv">
        <div class="myrow">
            <h2 class="mySubheaderText">Mi Cuenta</h2>
            <div class="dataText">
                <p></p>
                <v-divider vertical :thickness="2" class="border-opacity-50"></v-divider>
                <p class="muSubheaderText2">Datos de usuario</p>
            </div>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiClipboardListOutline } from '@mdi/js';

    export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
        path: mdiClipboardListOutline,
        }
    }
    }
</script>

<style scoped>
    .mySubheaderText{
        color: #000000;
        margin-left: 1%;
        font-weight: 400;
        margin-right: 10%;
    }

    .mySubheaderDiv{
        margin-left: 5%;
        margin-right: 5%;
    }

    .myrow{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }

    .mySubheaderText2{
        color: #49454F;
        margin-right: 50px;
        font-weight: 200;
        font-size: x-large;
    }

    .dataText{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 30%;
    }
</style>