<template>
    <v-card class="mx-auto px-6 py-8 mycard" width="60%" >
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="usernamelog"
          class="space-below"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Nombre de usuario"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="passwordlog"
          class="space-below"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Contraseña"
          placeholder="Enter your password"
          variant="outlined"
          :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append-inner="show = !show"
        ></v-text-field>

        <br/>
      

      <div class="button-with-mssg">
        <div class="message space-below">
            <div v-if="errorMessage" class="text-error">
            {{ errorMessage }}
          </div>
        </div>
        <v-row justify="center">
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
                Iniciar Sesión
            </v-btn>
      </v-row>
      </div>
      <br/>
      <br/>

      <v-row class="myrow">
        <div class="der-text text-right">
          <router-link to="/register" class="mytext text-right linkDiv">Registrarse</router-link>
        </div>
        <v-divider
              class="mx-3"
              vertical
        ></v-divider>
        <div class="izq-text text-left">
          <text class="mytext text-left">Olvidé mi contraseña</text> 
        </div>    
      </v-row>
      </v-form>
    </v-card>
</template>

<script>
import { loginUser } from '@/api/api.js'
import router from '@/router/router.js'

  export default {
  data: () => ({
    form: false,
    usernamelog: null,
    passwordlog: null,
    loading: false,
    errorMessage:'',
    show: false,
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
      localStorage.clear();
      sessionStorage.clear(); 
      //cleareamos variables que puedan estar guardadas de antes
      //seguro las ibamos a sobreescribir
      this.loading = true
      try{
        let response = await loginUser(this.usernamelog, this.passwordlog); 
        console.log(response);
        if(response.ok){
          let token = await response.json();
          console.log(token.token);
          localStorage.AUTHTOKEN = token.token;
          this.errorMessage='';
          router.push("/")
        }else{
          console.log(response);
          if(response.status===401){
            this.errorMessage='Credenciales inválidas. Vuelva a intentarlo.'
          }
          else{throw new Error(`Request failed with status: ${response.status}`);};
        }        
        this.loading = false;
        
      }
      catch(error){
        this.errorMessage='Ha ocurrido un error al iniciar sesión.'
        console.log(`Unexpected error: ${error.message}`);
        this.loading = false;
      }
      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
      return !!v || 'Field is required'
    },
    
  },

}


</script>

<style scoped>
.linkDiv{
    text-decoration: none;
}
.izq-text{
  flex: 1; /*mismo espacio*/
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: left;
}

.der-text{
  flex: 1; /*mismo espacio*/
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: right;
}

.myrow{
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-divider {
  flex: 0;
}

.mytext{
  color: #73C7A4;
}

  .v-field{
      background-color: #E6F6EF;
  }
  .space-below{
    margin-bottom: 20px;
  }

  .mycard{
  margin-bottom: 1%;
}

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

.message{/*reservamos espacio para el mensaje */
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>