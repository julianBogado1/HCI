<template>
  <div class="myPerfilDiv">
      <div class="myrow">
          <div class="miCuenta">
              <h2 class="mySubheaderText">Mi Cuenta</h2>
              <div class="avatar-container">
                <div class="avatar-elem">
                    <div class="avatar-image">
                        <img class="avatar-image" v-if="avatar" :src="avatar" alt="User Avatar">
                        <svg-icon type="mdi" :path="path" size="120" v-else/>
                    </div>
                </div>
                  <div class="avatar-elem">
                    <v-row justify="end">
                    <v-text-field
                    v-model="avatarUrl_edit"
                    class="space-below"
                    :readonly="loading"
                    label="Inserte Url"
                    variant="outlined"
                    ></v-text-field>
                </v-row>
                  </div>
              </div>
          </div>
          <div class="datosUser">
              <div class="dataText">
                  <p></p>
                  <v-divider vertical :thickness="2" class="border-opacity-50"></v-divider>
                  <p class="muSubheaderText2">Datos de usuario</p>
              </div>
              <div class="fieldContainer dflex w-100">
                    <v-form
                    v-model="form"
                    @submit.prevent="onSubmit"
                >
                    <v-text-field
                    v-model="nombre_edit"
                    class="space-below"
                    :readonly="loading"
                    :rules="reqRules"
                    :label="nombrepreexistente"
                    placeholder="Nombre"
                    variant="outlined"
                    clearable
                    ></v-text-field>

                    <v-text-field
                    v-model="apellido_edit"
                    class="space-below"
                    :readonly="loading"
                    :rules="reqRules"
                    clearable
                    :label="apellidopreexistente"
                    placeholder="Apellido"
                    variant="outlined"
                    ></v-text-field>

                <div class="button-with-mssg">
                    <div class="message space-below">
                        <div v-if="errorMessage" class="text-error">
                        {{ errorMessage }}
                        </div>
                    </div>
                </div>
                
                <v-row justify="end">
                    <v-btn
                    size="large"
                    type="submit"
                    variant="elevated"
                    density="compact"
                    rounded="xl"
                    color="#73C7A4"
                    class="text-white"
                    @click="onSubmit"
                    >
                        Guardar Cambios
                    </v-btn>
                </v-row>

                </v-form>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCircle } from '@mdi/js';
import {editUserVerified} from '@/api/api.js';
import router from '@/router/router.js'

export default {
    name: "my-component",
    components: {
      SvgIcon
    },
    data: () => ({
    form: false,
    nombrepreexistente: 'Nombre',
    apellidopreexistente: 'Apellido',
    errorMessage: '',
    nombre_edit: sessionStorage.FIRSTNAME,
    apellido_edit: sessionStorage.LASTNAME,  //valores default --> si no se llama a la funcion con parametros, quedan vacios
    avatarUrl_edit: '',
    avatar: sessionStorage.AVATARURL, 
    loading: false,
    path: mdiAccountCircle,
    reqRules:[
    value => {
            if (value.length<=15) return true

            return `El campo no puede tener mas de 15 catacteres.`
        },
  ],
  }),

  methods: {
    async onSubmit () {
        this.errorMessage = '';
      if (!this.form) return
      this.loading = true
      try{
        if(!this.nombre_edit){
            this.nombre_edit=sessionStorage.FIRSTNAME;  //se asignan estos valores para no pasar campos vacios a la api
        }
        if(!this.apellido_edit){
            this.apellido_edit=sessionStorage.LASTNAME;
        }
        if(!this.avatarUrl_edit){
            this.avatarUrl_edit = sessionStorage.AVATARURL;
        }
        let response = await editUserVerified(this.nombre_edit, this.apellido_edit, this.avatarUrl_edit, localStorage.AUTHTOKEN);
        this.avatar = sessionStorage.AVATARURL;
        this.loading = false
        this.errorMessage = '';
        router.push("/profile")
      }catch(error){
        this.errorMessage = 'Ha ocurrido un error al registrar los cambios'
        console.log(error);
        this.loading = false
      }
      setTimeout(() => (this.loading = false), 2000)
      this.errorMessage = '';
    },
  },
}
</script>
<style scoped>
    .avatar-elem{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 2%;
    }
  .miCuenta{
      margin-right: 5%;
      width: 160px;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .avatar-container{
    display: flex;
      flex-direction: column;
      margin: 1%;
      justify-content: center;
      gap: 10px;
  }
  .avatar-image{
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
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
  .fieldContainer{
        display: flex;
        flex-direction: column;
        margin: 1%;
        gap: 10px;
        margin-bottom: 5%;
    }
    

    .space-below{
        margin-bottom: 20px;
    }
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>