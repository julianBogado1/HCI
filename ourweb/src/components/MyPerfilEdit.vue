<template>
  <div class="myPerfilDiv">
      <div class="myrow">
          <div class="miCuenta">
              <h2 class="mySubheaderText">Mi Cuenta</h2>
              <div class="avatar-container">
                <div class="avatar-image avatar-elem space-below">
                    <img v-if="avatar" :src="avatar" alt="User Avatar">
                    <svg-icon type="mdi" :path="path" size="120" v-else/>
                </div>
                  <div class="avatar-elem">
                    <v-row justify="end">
                    <v-text-field
                    v-model="avatarUrl_edit"
                    class="space-below"
                    :readonly="loading"
                    :rules="reqRules"
                    label="Inserte Url de la imagen"
                    placeholder="Enter your password"
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
                    label="Nombre"
                    variant="outlined"
                    clearable
                    ></v-text-field>

                    <v-text-field
                    v-model="apellido_edit"
                    class="space-below"
                    :readonly="loading"
                    :rules="reqRules"
                    clearable
                    label="Apellido"
                    placeholder="Enter your password"
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
 import {editUser} from '@/api/api.js';
 import { editAvatarUrl } from '@/api/api.js';
export default {
    name: "my-component",
    components: {
      SvgIcon
    },
  data: () => ({
    form: false,
    nombre_edit: '',
    apellido_edit: '',  //valores default --> si no se llama a la funcion con parametros, quedan vacios
    loading: false,
    path: mdiAccountCircle,
    reqRules:[
  value => {
        if (value) return true

        return 'Campo obligatorio.'
      },
  ],
  }),

  methods: {
    async onSubmit () {
      if (!this.form) return
      console.log("EMPIEZA AWAIT MAGICO");
      this.loading = true
      try{
          let response = await editUser(this.nombre_edit, this.apellido_edit);
          console.log(response);
          if(!response.ok){throw new Error(`Request failed with status: ${response.status}`);}
          else if(response.ok){
              console.log(`Edited user: \n new Name: ${this.nombre_edit}\n new LastName: ${this.apellido_edit}`);
          }
          this.loading = false
      }catch(error){
          console.log(error);
          this.loading = false
      }
      setTimeout(() => (this.loading = false), 2000)
      this.errorMessage = '';
      let response = await editAvatarUrl(this.avatarUrl_edit);
      console.log(response);
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },

}
</script>
<style scoped>
    .avatar-elem{
        display: flex;
        flex-direction: row;
        justify-content: center;
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
      align-items: center;
  }
  .avatar-image{
        width: 100px;
        height: 100px;
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