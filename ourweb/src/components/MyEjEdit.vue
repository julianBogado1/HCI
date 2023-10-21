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
          maxLength="50"
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
          maxLength="150"
        ></v-text-field>
      </v-form>
      

      <v-row justify="end">
          <v-btn
          size="large"
          type="submit"
          variant="elevated"
          density="compact"
          rounded="xl"
          color="#73C7A4"
          class="text-white"
          @click="onSubmit"
          >
              Guardar Cambios
          </v-btn>
      </v-row>
    </div>
</template>

<script >

import { fetchSingle } from '@/api/api.js'
import { editExercise } from '@/api/api.js'
import router from '@/router/router.js'

export default {
data: () => ({
  form: {}, // Your form data
  id: null,
  name: null, // Text for the name field
  description: null,
  loading: false,
  reqRules: [], // Your validation rules
  }),
  created() {
    this.id = this.$route.params.id;
    this.loadExercise();
  },
  methods: {
  async loadExercise() {
    try {
      const exercise = await fetchSingle('exercises', this.id);
      
      this.name = exercise.name;
      this.description = exercise.detail;
    } catch (error) {
      // Handle any errors that may occur during the fetch
      console.error('Error fetching exercise:', error);
    }
  },
  async onSubmit() {
    console.log("se apreto")
    try {
      const response = await editExercise(this.id, this.name, this.description)
      router.push("/mis-ejs")
    }
    catch (error) {
        // Handle errors here
        console.error('Error:', error);
      }
    },
  },
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
</style>