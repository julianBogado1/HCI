<template>
  <v-card class="mx-auto px-6 py-8 mycard" width="60%">
    <v-form
      v-model="form"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        v-model="usernamereg"
        class="space-below"
        :readonly="loading"
        :rules="nameRules"
        clearable
        label="Nombre de usuario"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="emailreg"
        class="space-below"
        :readonly="loading"
        :rules="emailRules"
        clearable
        label="Email"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="passwordreg"
        class="space-below"
        :readonly="loading"
        :rules="passwordRules"
        clearable
        label="Contraseña"
        placeholder="Enter your password"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="repeat_passwordreg"
        class="space-below"
        :readonly="loading"
        :rules="[...passwordRules, passwordsMatchRule]"
        clearable
        label="Repetir contraseña"
        placeholder="Enter your password"
        variant="outlined"
      ></v-text-field>
      

    <div class="button-with-mssg">
      <div class="message space-below">
        <div v-if="errorMessage" class="text-error">
                {{ errorMessage }}
            </div>
      </div>
      

    <v-row justify="center" class="space-below">
        <v-btn
        :disabled="!form"
        :loading="loading"
        size="large"
        type="submit"
        variant="elevated"
        rounded="xl"
        color="#73C7A4"
        class="text-white"
        >
            Crear Usuario
        </v-btn>
    </v-row>   
    </div>
    

    <v-row class="myrow">
        <div class="mycontainer">
      <v-divider class="mydiv"></v-divider>
      <div>
        <text>Ya tiene cuenta? </text>
        <router-link to="/login" class="mytext text-right linkDiv">Ingresar</router-link>
      </div>
    </div>
    </v-row>

    </v-form>
  </v-card>
</template>

<script>
import { mdiConsoleNetworkOutline } from '@mdi/js'
import {addUser} from '@/api/api.js';
import router from '@/router/router.js'

export default {
data: () => ({
  form: false,
  usernamereg: null,
  emailreg: null,
  passwordreg: '',
  repeat_passwordreg: '',
  loading: false,
  errorMessage: '',
  reqRules:[
  value => {
        if (value) return true

        return 'Campo obligatorio.'
      },
  ],
  emailRules:[
    value => {
        if (value) return true

        return 'Campo obligatorio.'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail debe ser válido.'
      },
    ],
    nameRules:[
    value => {
        if (value) return true

        return 'Campo obligatorio.'
      },
      value => {
        if (value?.length <= 10) return true

        return 'Nombre de usuario debe ser menor a 10 caracteres.'
      },
    ],
    passwordRules:[
      v => !!v || 'Campo obligatorio',
      v => (v && v.length >= 8) || 'la contraseña debe tener al menos 8 caracteres.',
    ],
}),
computed: {
  passwordsMatchRule() {
    return this.passwordreg === this.repeat_passwordreg || 'Las contraseñas deben coincidir.';
  },
},
watch: {
  passwordreg() {
    this.repeat_passwordreg = '';
  },
  emailreg(){
    this.errorMessage='';
  },
  usernamereg(){
    this.errorMessage='';
  }
},
methods: {
    async onSubmit () {
      if (!this.form) return 
      else if(!this.passwordsMatchRule) return 'Las contraseñas deben coincidir.'

      this.loading = true;
      this.errorMessage = '';
      let response = await addUser(this.usernamereg, this.passwordreg, this.emailreg);
      if(response){
        if(!response.ok){
          let details = await response.json();
            if(details.details[0].includes("User.email")){
              this.errorMessage = 'El email ingresado ya se encuentra registrado';
            }
            else if(details.details[0].includes("User.username")){
              this.errorMessage = 'El nombre de usuario ya se encuentra registrado';
          }
        }
        this.loading=false;
        router.push("/confirm-email")
      }
      setTimeout(() => (this.loading = false), 2000)

      localStorage.lastRegisteredEmail = this.emailreg; //GUARDAMOS EMAIL LOCALMENTE
    },
    required (v) {
      return !!v || 'Campo obligatorio'
    },

    
  },
}
</script>

<style scoped>

.button-with-mssg{
  display: flex;
  flex-direction: column;
}

.text-error {
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}

.myrow{
display: flex;
align-items: center;
justify-content: center;
}

.mytext{
color: #73C7A4;
}

.linkDiv{
    text-decoration: none;
}

.v-field{
    background-color: #E6F6EF;
}

.my-container {
width: 200px;
display: flex;
justify-content: space-between;
align-items: center;
margin:0;
padding: 0;
}
.space-below{
margin-bottom: 20px;
}

.mycard{
  margin-bottom: 1%;
}

.message{/*reservamos espacio para el mensaje */
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>