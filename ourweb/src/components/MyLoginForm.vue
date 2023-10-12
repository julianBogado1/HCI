<template>
    <v-card class="mx-auto px-6 py-8" width="60%" >
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="usernamelog"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Nombre de usuario"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="passwordlog"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Contraseña"
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
          >
              Iniciar Sesión
          </v-btn>
      </v-row>

      <br/>
      <br/>

      <v-row class="myrow">
        <div class="der-text text-right">
          <router-link to="/register" class="mytext text-right">Registrarse</router-link>
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
  export default {
  data: () => ({
    form: false,
    usernamelog: null,
    passwordlog: null,
    loading: false,

    reqRules:[
  value => {
        if (value) return true

        return 'Campo obligatorio.'
      },
  ],
  }),

  methods: {
    onSubmit () {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },

}


</script>

<style scoped>
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
</style>