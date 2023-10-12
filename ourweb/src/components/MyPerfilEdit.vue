<template>
    <div class="mycontainer">
         <v-text-field
          v-model="username_perfil"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Nombre de usuario"
        ></v-text-field>

        <v-text-field
          v-model="email_perfil"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="name_perfil"
          :readonly="loading"
          :rules="fieldRules"
          clearable
          label="Nombre"
        ></v-text-field>

        <v-text-field
          v-model="password_perfil"
          :readonly="loading"
          :rules="fieldRules"
          clearable
          label="Nombre"
        ></v-text-field>

        <v-text-field
          v-model="repeat_password_perfil"
          :readonly="reqRules"
          :rules="reqRules"
          clearable
          label="Nombre"
        ></v-text-field>

        <v-btn
          size="large"
          type="submit"
          variant="elevated"
          rounded="xl"
          color="#73C7A4"
          class="text-white"
          >
              Editar Perfil
          </v-btn>

          <v-btn
          size="large"
          type="submit"
          variant="elevated"
          rounded="xl"
          color="#73C7A4"
          class="text-white"
          >
              Cerrar Sesión
          </v-btn>

    </div>
</template>

<script>

  export default {
    data: () => ({
        form: false,
        rutinaname: null,
        rutinadesc: null,
        rutinanotes: null,
        rutinaintensidad: null,
        loading: false,
        reqRules: [
            value => {
                if (value)
                    return true;
                return 'Campo obligatorio.';
            },
        ],
        fieldRules: [
            value => {
                if (value?.length <= 60 || value == null)
                    return true;
                return 'Debe ser menor a 60 caracteres.';
            },
        ],
    }),
    methods: {
        onSubmit() {
            if (!this.form)
                return;
            this.loading = true;
            setTimeout(() => (this.loading = false), 2000);
        },
        required(v) {
            return !!v || 'Field is required';
        },
    },
}


</script>

<style scoped>
  .v-field{
      background-color: #E6F6EF;
  }

  .mycontainer{
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 80px;
    margin-right: 80px;
  }
</style>