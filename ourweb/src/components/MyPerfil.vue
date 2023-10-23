<template>
    <div class="myPerfilDiv">
        <div class="myrow">
            <div class="miCuenta">
                <h2 class="mySubheaderText">Mi Cuenta</h2>
                <div class="avatar-container">
                    <img class="avatar-image" v-if="avatar" :src="avatar" alt="User Avatar">
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
                    :loading="loading"
                    elevation="0"
                    size="large"
                    density="compact"
                    variant="elevated"
                    rounded="xl"
                    color="#73C7A4"
                    class="text-white"
                    @click="logOutUser"
                >
                    Cerrar Sesión
                </v-btn>
            </v-row>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/router';
import MyPerfilDataDisplay from '../components/MyPerfilDataDisplay.vue'
import MyPlaceholderAvatar from '../components/MyPlaceholderAvatar.vue'
import { logOut } from '@/api/api.js';
import { getUser } from '@/api/api.js';

export default {
  components: {
    MyPerfilDataDisplay,
    MyPlaceholderAvatar
  },
  data() {
    return {
        avatar_loading: null,
        loading: false,
        avatar: sessionStorage.AVATARURL, // This should hold the URL of the avatar image
    };
  },
  methods:{
    async logOutUser(){
        this.loading=true;
        try{
            let response = await logOut();
            if(!response.ok){
                console.log(response);   
            }
            else{
                console.log("Successful LogOut");
                localStorage.clear();
                sessionStorage.clear();
                router.push('/')
            }
        }
        catch(error){
            console.log(error);
        } finally {
            this.loading = false; // Set loading to false after loading completes
        }
    },
    async loadAvatar() {
      // Load the avatar image (you may use an API call or any other method)
      try {
        const response = await getUser(); // Replace with your actual method
        this.avatar = response.avatarUrl; // Update the avatar URL
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false; // Set loading to false after loading completes
      }
    },
  },
  created(){
    this.loadAvatar();
  }
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
        height: 200px;
        width: 200px;
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
    .avatar-container{
        display: flex;
        flex-direction: column;
        margin: 1%;
        justify-content: center;
      }
</style>