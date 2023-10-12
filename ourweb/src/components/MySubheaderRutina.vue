<template>
    <div class="mySubheaderDiv">
        <div class="myrow">
            <svg-icon type="mdi" :path="path" size="50"></svg-icon>
            <h2 class="mySubheaderText">Mis Rutinas</h2>
        </div>
        <v-divider :thickness="2" class="border-opacity-50"></v-divider>
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
        margin-left: 20px;
        font-weight: 400;
    }

    .mySubheaderDiv{
        margin-left: 40px;
        margin-right: 40px;
    }

    .myrow{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>