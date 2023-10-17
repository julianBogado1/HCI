<template>
    <div class="mycontainer">
         <v-text-field
          v-model="rutinaname"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Nombre"
        ></v-text-field>

        <v-text-field
          v-model="rutinadesc"
          :readonly="loading"
          :rules="fieldRules"
          clearable
          label="Descripción"
        ></v-text-field>

        <v-text-field
          v-model="rutinanotes"
          :readonly="loading"
          :rules="fieldRules"
          clearable
          label="Notas"
        ></v-text-field>

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