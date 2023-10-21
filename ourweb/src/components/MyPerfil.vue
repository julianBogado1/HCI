<template>
    <div class="myPerfilDiv">
        <div class="myrow">
            <div class="miCuenta">
                <h2 class="mySubheaderText">Mi Cuenta</h2>
                <div class="avatar-image">
                    <img v-if="avatar" :src="avatar" alt="User Avatar">
                    <MyPlaceholderAvatar v-else/>
                  </div>
            </div>
            <div class="datosUser">
                <div class="dataText">
                    <p></p>
                    <v-divider vertical :thickness="2" class="border-opacity-50"></v-divider>
                    <p class="muSubheaderText2">Datos de usuario</p>
                </div>
                <MyPerfilDataDisplay/>
                <v-row justify="end" class="botoness">
                    <v-btn
                    to="/profile-edit"
                    elevation="0"
                    size="large"
                    density="compact"
                    variant="elevated"
                    rounded="xl"
                    color="#73C7A4"
                    class="text-white"
                >
                    Editar Perfil
                </v-btn>
                <v-btn
                    elevation="0"
                    size="large"
                    density="compact"
                    variant="elevated"
                    rounded="xl"
                    color="#73C7A4"
                    class="text-white"
                >
                    Cerrar Sesión
                </v-btn>
            </v-row>
            </div>
        </div>
    </div>
</template>

<script>
import MyPerfilDataDisplay from '../components/MyPerfilDataDisplay.vue'
import MyPlaceholderAvatar from '../components/MyPlaceholderAvatar.vue'

export default {
  components: {
    MyPerfilDataDisplay,
    MyPlaceholderAvatar
  },
  data() {
    return {
      avatar: localStorage.AVATARURL, // This should hold the URL of the avatar image
    };
  },
};

</script>
<style scoped>
    .miCuenta{
        margin-right: 5%;
        width: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .avatar-image{
        display: flex;
        margin: 1%;
        justify-content: center;
    }
    .mySubheaderText{
        color: #000000;
        margin-left: 1%;
        font-weight: 400;
        margin-right: 10%;
        margin-bottom: 1%;
    }

    .myPerfilDiv{
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 1%;
    }

    .myrow{
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: flex-start;
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
        margin-bottom: 1%;
        gap: 10px;
    }

    .datosUser{
        display: flex;
        flex-direction: column;
        min-width: 300px;
        width: fit-content;
        flex-grow: 1;
    }

    .botoness{
        margin: 1%;
        gap: 10px;
    }
</style>