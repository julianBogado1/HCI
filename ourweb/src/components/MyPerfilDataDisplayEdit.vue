<template>
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
</template>

<script>
import {editUser} from '@/api/api.js';

export default {
  data: () => ({
    form: false,
    nombre_edit: '',
    apellido_edit: '',  //valores default --> si no se llama a la funcion con parametros, quedan vacios
    loading: false,

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