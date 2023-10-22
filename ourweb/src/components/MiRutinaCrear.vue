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

      <div class="space-below">
        <v-select
            label="Dificultad"
            :items="['1','2','3']"
            variant="outlined"
            ></v-select>
      </div>

      <div class="duracion space-below">
            <p class="myText">Duración (en segundos):</p>
            <input class="myInputBox"
            type="number"
            id="numericInput"
            v-model="numberValue"
            min="0" 
            max="100" 
            >
        </div>

      <div>
      <div class="space-below">
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="myText">Ciclo de Entrada en Calor</p>
            <router-link to="/" class="create">
            <div class="myDiv">
                <svg-icon type="mdi" :path="path2"></svg-icon>
                <div >
                    <p>Añadir Ejercicio</p>
                </div>
            </div>
           </router-link>
        </div>
        <div class="repeticiones">
            <p class="myText">Repeticiones:</p>
            <input class="myInputBox"
            type="number"
            id="numericInput"
            v-model="numberValue"
            min="0" 
            max="100" 
            >
        </div>
      </div>

      <span></span>

      <div class="space-below">
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="myText">Ciclo de Ejercitación 1</p>
            <router-link to="/" class="create">
            <div class="myDiv">
                <svg-icon type="mdi" :path="path2"></svg-icon>
                <div >
                    <p>Añadir Ejercicio</p>
                </div>
            </div>
           </router-link>
        </div>
        <div class="repeticiones">
            <p class="myText">Repeticiones:</p>
            <input class="myInputBox"
            type="number"
            id="numericInput"
            v-model="numberValue"
            min="0" 
            max="100" 
            >
        </div>
      </div>

      <v-row justify="center" class="space-below">
      <v-btn
          :loading="loading"
          size="large"
          variant="elevated"
          density="compact"
          rounded="xl"
          color="#73C7A4"
          class="text-white"
          >
              añadir Ciclo
          </v-btn>
        </v-row>

      <div class="space-below">
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="myText">Ciclo de Enfriamiento</p>
            <router-link to="/" class="create">
            <div class="myDiv">
                <svg-icon type="mdi" :path="path2"></svg-icon>
                <div >
                    <p>Añadir Ejercicio</p>
                </div>
            </div>
           </router-link>
        </div>
        <div class="repeticiones">
            <p class="myText">Repeticiones:</p>
            <input class="myInputBox"
            type="number"
            id="numericInput"
            v-model="numberValue"
            min="0" 
            max="100" 
            >
        </div>
      </div>
      
      </div>

      <v-row justify="end">
          <v-btn
          :loading="loading"
          size="large"
          type="submit"
          variant="elevated"
          density="compact"
          rounded="xl"
          color="#73C7A4"
          class="text-white"
          @click="onSubmit"
          >
              Crear Rutina
          </v-btn>
      </v-row>
    </div>
</template>

<script>
  import { createExercise } from '@/api/api.js'
  import router from '@/router/router.js'
  import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlus} from '@mdi/js';


  export default {
    components: {
        SvgIcon
    },
  data: () => ({
    name: '',
    description: '',
    steps: '',
    form: null,
    loading: false,
    reqRules: [], 
    path2: mdiPlus,
  }),
  methods: {
    async onSubmit() {
      try {
        // Fetch exercises and create the new exercise
        const response = await createExercise(this.name, this.description, this.steps);

        // Reset input fields
        this.name = '';
        this.description = '';
        this.steps = '';
        router.push("/mis-ejs")
      } catch (error) {
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

  .myText{
        color: #49454F;
        font-weight: 300;
        font-size: large;
    }

    .details-div{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .myDiv{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 1%;
        margin-left: 1%;
    }

    .create{
        text-decoration: none;
        display: flex;
        align-items: center;
        white-space: nowrap;
        color: #000000;
        font-size: large;
    }

    .myInputBox{
        border: 1px solid gray;
        border-radius: 3px;
    }

    .repeticiones{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }

    .duracion{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 1%;
        gap: 10px;
    }
</style>