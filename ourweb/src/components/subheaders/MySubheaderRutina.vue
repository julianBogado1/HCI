<template>
    <div class="mySubheaderDiv">
        <div class="myrow">
            <div class="myDiv">
            <svg-icon type="mdi" :path="path" size="50"></svg-icon>
            <h2 class="mySubheaderText">Mis Rutinas</h2>
            </div>
            <router-link to="/mi-rutina-create" class="create">
            <div class="myDiv">
                <svg-icon type="mdi" :path="path2"></svg-icon>
                <div >
                    <p>Crear nueva</p>
                </div>
            </div>
           </router-link>
        </div>
        <v-divider :thickness="2" class="border-opacity-50"></v-divider>
    </div>
</template>

<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiClipboardListOutline , mdiPlus} from '@mdi/js';

    export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
        path: mdiClipboardListOutline,
        path2: mdiPlus,
        }
    }
    }
</script>

<style scoped>
    .create{
        text-decoration: none;
        display: flex;
        align-items: center;
        white-space: nowrap;
        color: #000000;
        font-size: large;
    }

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
        justify-content: space-between;
    }

    .myDiv{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 1%;
        margin-left: 1%;
    }
</style>