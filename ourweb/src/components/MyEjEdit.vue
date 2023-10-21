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
          >
              Guardar Cambios
          </v-btn>
      </v-row>
    </div>
</template>

<script >

import { fetchSingle } from '@/api/api.js'

export default {
data: () => ({
  form: {}, // Your form data
  id: null,
  name: 'b', // Text for the name field
  description: 'a',
  loading: false,
  reqRules: [], // Your validation rules
  }),
  created() {
    this.id = this.$route.params.id;
    const exercise = fetchSingle('exercises', id)
    this.name = exercise['name']
    this.description = exercise['description']
  },
  methods: {
    onSubmit() {
      // Handle form submission
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