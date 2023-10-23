<template>
    <div class="fieldContainer dflex w-100">
        <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="name"
          class="space-below"
          :readonly="loading"
          :rules="reqRules"
          label="Nombre"
          variant="outlined"
          clearable
          maxLength="99"
        ></v-text-field>

        <v-text-field
          v-model="description"
          class="space-below"
          :readonly="loading"
          :rules="reqRules"
          clearable
          label="Descripción"
          placeholder=""
          variant="outlined"
          maxLength="199"
        ></v-text-field>

        <div class="message space-below">
          <div v-if="errorMessage" class="text-error">
          {{ errorMessage }}
        </div>
      </div>

      </v-form>
      

      <v-row justify="end">
          <v-btn
          :loading="loading"
          :disabled="!isFormValid"
          size="large"
          type="submit"
          variant="elevated"
          density="compact"
          rounded="xl"
          color="#73C7A4"
          class="text-white"
          @click="onSubmit"
          >
              Crear Ejercicio
          </v-btn>
      </v-row>
    </div>
</template>

<script>
  import { createExercise } from '@/api/api.js'
  import router from '@/router/router.js'

  export default {
  data: () => ({
    name: '',
    description: '',
    errorMessage: '',
    form: null,
    loading: false,
    reqRules: [], 
  }),
  methods: {
    async onSubmit() {
      let response
      try {
        response = await createExercise(this.name, this.description, this.steps);

        if(response.ok) {
          this.name = '';
          this.description = '';
          router.push("/mis-ejs")
        }
      } catch (error) {
        this.errorMessage = 'Ha ocurrido un problema al crear la rutina. Verifica que no haya otra rutina con el mismo nombre.'
      }
    },
  },
  computed: {
    isFormValid() {
      return this.name && this.description
    }
  }
};
</script>

<style scoped>

    .intensidad{
        flex-grow: 1;
        padding: 1%;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 5px; 
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