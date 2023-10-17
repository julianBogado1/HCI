<template>
    <div class="fieldContainer dflex w-100">
        <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="usernamelog"
          class="space-below"
          :readonly="loading"
          :rules="reqRules"
          label="Nombre de usuario"
          variant="outlined"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="email"
          class="space-below"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="E-mail"
          placeholder="Enter your password"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="name"
          class="space-below"
          clearable
          label="Nombre"
          placeholder="Enter your password"
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
        ></v-text-field>

        <v-text-field
          v-model="passwordlogre"
          class="space-below"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Contraseña"
          placeholder="Enter your password again"
          variant="outlined"
        ></v-text-field>
      
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
</style>