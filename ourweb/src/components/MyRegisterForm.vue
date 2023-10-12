<template>
    <v-card class="mx-auto px-6 py-8" max-width="650">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="usernamereg"
          :readonly="loading"
          :rules="nameRules"
          class="mb-2"
          clearable
          label="Nombre de usuario"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="emailreg"
          :readonly="loading"
          :rules="emailRules"
          class="mb-2"
          clearable
          label="Email"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="passwordreg"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Contraseña"
          placeholder="Enter your password"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="repeat_passwordreg"
          :readonly="loading"
          :rules="passwordRules"
          clearable
          label="Repetir contraseña"
          placeholder="Enter your password"
          variant="outlined"
        ></v-text-field>
        

        <br/>
      
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
          @click="passwordMatch"
          >
              Crear Usuario
          </v-btn>
          <p v-if="!passwordMatch">The passwords do not match!.</p>
      </v-row>

      <br/>
      <br/>

      <v-row class="myrow">
          <div class="mycontainer">
        <v-divider class="mydiv"></v-divider>
        <div>
          <text>Ya tiene cuenta? </text>
          <router-link to="/login" class="mytext text-right">Ingresar</router-link>
        </div>
      </div>
      </v-row>

      </v-form>
    </v-card>
</template>

<script>
  export default {
  data: () => ({
    form: false,
    usernamereg: null,
    emailreg: null,
    passwordreg: '',
    repeat_passwordreg: '',
    loading: false,
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
        value => {
          if(value) return true

          return 'Campo obligatorio.'
        },
        value => {
          if (passwordMatch) return true
          return 'Las contraseñas deben coincidir.'
        }
      ]
  }),

computed: {
  passwordMatch(value){
    return pass1===pw2
  }
},

methods: {
  onSubmit () {
    if (!this.form) return 
    else if(!this.passwordMatch) return 'Las contraseñas deben coincidir.'

    this.loading = true

    setTimeout(() => (this.loading = false), 2000)
  },
  required (v) {
    return !!v || 'Campo obligatorio'
  },
},

}


</script>

<style scoped>

.myrow{
  display: flex;
  align-items: center;
  justify-content: center;
}

.mytext{
  color: #73C7A4;
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

</style>