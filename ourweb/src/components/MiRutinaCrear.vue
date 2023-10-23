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
            v-model="difficulty"
            label="Dificultad"
            :items="['Principiante','Intermedio','Avanzado']"
            variant="outlined"
            ></v-select>
      </div>

      <div class="duracion space-below">
        <p class="myText">Duración (en minutos):</p>
        <input
            class="myInputBox"
            type="number"
            id="numericInput"
            v-model="duration" 
            min="0"
            max="100"
          />
      </div>

      <div v-for="(cycle, index) in cards" :key="index">

        
        <div>
          <div class="space-below">
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
              <v-text-field v-model="cycle.name" readonly></v-text-field>
              </div>
              <div class="repeticiones space-below">
                <p class="myText">Repeticiones:</p>
                <input
                  class="myInputBox"
                  type="number"
                  id="numericInput"
                  v-model="cycle.repetitions"
                  min="0"
                  max="100"
                />
              </div>

              <div>
              <v-select
                v-model="cycle.selectedExercise"
                :items="exercises.map(exercise => exercise.name)"
                label="Elegir Ejercicio"
                @input="addExerciseAndClearSelection(cycle)"
                variant="outlined"
                class="selectEj"
              ></v-select>
            </div>
              
            

              <div class="details-buttons space-below">
                <v-btn
                class="custom-button"
                  variant="outlined"
                  color="#5DA587"
                  @click="addExerciseAndClearSelection(cycle)">
                    <div class="myDiv">
                      <svg-icon type="mdi" :path="path2"></svg-icon>
                      <div>
                        <p>Añadir Ejercicio</p>
                      </div>
                    </div>
                  </v-btn>

              <v-btn 
              class="custom-button"
              variant="outlined"
              color="#5DA587"
              @click="removeExercise(cycle, index)">
                <div class="myDiv">
                  <svg-icon type="mdi" :path="path2"></svg-icon>
                  <div>
                    <p>{{ cycle.exercises.length === 0 ? 'Eliminar Ciclo' : 'Eliminar Ejercicio' }}</p>
                  </div>
                </div>
              </v-btn>
              
            </div>
            
            <div class="space-below" v-for="(exercise, eIndex) in cycle.exercises" :key="eIndex">
              <div class="ej-list">
                <div class="card">
                  <div class="info-card">
                    <div class="name-text">
                      <p>{{ exercise.name }}</p>
                    </div>
                    <div class="desc-text">
                      <p>{{ exercise.detail }}</p>
                    </div>
                  </div>
                  <div class="edit-card">
                    <div class="edit-elem">
                    <p class="desc-text-white">Series:</p>
                      <input
                        class="myInputBox desc-text-white"
                        type="number"
                        id="numericInput"
                        v-model="exercise.repetitions" 
                        min="0"
                        max="100"
                      />
                    </div>
                    <div class="edit-elem ">
                    <p class="desc-text-white">Duración (en seg):</p>
                      <input
                        class="myInputBox  desc-text-white"
                        type="number"
                        id="numericInput"
                        v-model="exercise.duration" 
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="duracion space-below">
              <p class="myText">Duración del ciclo (en minutos):</p>
              <input
                class="myInputBox"
                type="number"
                id="numericInput"
                v-model="cycle.duration" 
                min="0"
                max="100"
              />
            </div>

          </div>

        </div>
      </div>


      <v-row justify="center" class="space-below">
      <v-btn
          size="large"
          variant="elevated"
          density="compact"
          rounded="xl"
          color="#73C7A4"
          class="text-white"
          @click="addCycle"
          >
              Añadir Ciclo de Entrenamiento
          </v-btn>
        </v-row>

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
          @click="createRoutine"
          >
              Crear Rutina
          </v-btn>
      </v-row>
    </div>
</template>

<script>
  import { fetchMultiple } from '@/api/api';
  import { createCycle } from '@/api/api';
  import { createRoutine } from '@/api/api';
  import { addExerciseToCycle } from '@/api/api';
  import MyEjEjemplo1 from './MyEjEjemplo1.vue';
  import router from '@/router/router';
import { mdiCreditCard } from '@mdi/js';
  
  export default {
    components: {
      MyEjEjemplo1,
    },
    data() {
        return {
            name: "",
            loading: false,
            description: "",
            difficulty: 'Intermedio',
            duration: 0,
            exercises: [],
            cards: [],
            showAddExerciseDropdown: null,
            cycles: 0,
        };
    },
    created() {
      this.populateExercises();
      this.initialize()
    },
    methods: {
      async populateExercises() {
        this.loading=true;
        const response = await fetchMultiple('exercises', 50);
        this.exercises = response['content'];
        this.loading=false;
      },
      async initialize() {
        this.cards.push({
          name: `Ciclo de Calentamiento`,
          order: 1,
          detail: "Un ciclo para empezar a ejercitar",
          type: "warmup",
          repetitions: 3,
          exercises: [],
        },
        {
          name: `Ciclo de Ejercitación 1`,
          order: 2,
          detail: "Para una ejercitación a pleno",
          type: "exercise",
          repetitions: 3,
          exercises: [],
        },
        {
          name: `Ciclo de Enfriamiento`,
          order: 99,
          detail: "Elongaciones y estiramientos",
          type: "cooldown",
          repetitions: 1,
          exercises: [],
        }
        )
        this.cycles = 2
        for (const cycle of this.cards) {
          cycle.showAddExerciseDropdown = false;
        }
      },
      addCycle() {
        const cooldown = this.cards.pop()
        this.cards.push({
          name: `Ciclo de Ejercitación ${this.cycles}`,
          order: this.cycles + 1,
          detail: "Cycle Detail",
          type: "exercise",
          duration: 1,
          exercises: [],
        });
        this.cards.push(cooldown)
        this.cycles++
      },
      addExercise(card, selectedExercise) {
        
          if (selectedExercise) {
            const exercise = this.exercises.find(exercise => exercise.name === selectedExercise)
            card.exercises.push({
              id: exercise.id,
              name: exercise.name,
              detail: exercise.detail,
              duration: 10,
              repetitions: 1,
            });
            card.selectedExercise = null;
          }
      },
      addExerciseAndClearSelection(cycle) {
        if (cycle.selectedExercise) {
          this.addExercise(cycle, cycle.selectedExercise);
          cycle.selectedExercise = null;
        }
      },
      removeExercise(card, index) {
        if (card.exercises.length > 0) {
          card.exercises.pop();
        } else {
          this.cards.splice(index, 1);
        }
      },
      async createRoutine() {
        this.loading=true;
        let response_c
        let response_e
        let response_r = await createRoutine(this.name, this.description, true, this.getSkillLevel(this.difficulty), Math.min(Math.max(this.duration, 1), 999))
        for(const card of this.cards) {
            response_c = await createCycle(response_r.id, card.name, card.detail, card.type, card.order, Math.min(Math.max(card.repetitions, 1), 999))
            var i = 1
            for(const ex of card.exercises) {
                console.log(ex)
                console.log(ex.id)
                response_e = await addExerciseToCycle(response_c.id, ex.id, i, Math.min(Math.max(ex.duration, 1), 999), Math.min(Math.max(ex.repetitions, 1), 999))
                i++
            }
        }
        this.loading=false;
        router.push("/")
      },
      isExercisesEmpty(card) {
        return card.exercises.length === 0;
      },
      getSkillLevel(skill) {
        switch (skill) {
          case 'Principiante':
            return "rookie";
          case 'Intermedio':
            return "intermediate";
          case 'Avanzado':
            return "expert";
          default:
            return "intermediate";
        }
      }
    },
    components: { MyEjEjemplo1 },
    computed: {
    isFormValid() {
      return this.name && this.description && this.difficulty && this.duration
       && this.cards.every(card => card.duration && card.repetitions && card.duration >= 1 && card.duration <= 999 && card.repetitions >= 1 && card.repetitions <= 999)
        && this.cards.every(card => !card.exercises || card.exercises.every(exercise => exercise.duration && exercise.repetitions && exercise.duration >= 1 && exercise.duration <= 999 && exercise.repetitions >= 1 && exercise.repetitions <= 999));
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
        flex-direction: row;
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

    .card {
      display: flex;
      align-items: center; 
      justify-content: space-between;
      padding-left: 10px;
      background-color: #D9D9D9;
    }
    .info-card {
      height: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }
    
    .name-text {
      font-size: x-large;
      color: #000000;
      font-weight: 500;
    }
    
    .desc-text {
      font-size: large;
      color: #000000;
    }

    .desc-text-white{
      font-size: large;
      color: white;
    }
    .ej-list{
      display: flex;
      flex-direction: column;
      margin-top: 1%;
      gap: 10px;
    }
    .details-buttons{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
    }

    .edit-card{
        background-color: #938F99;
        height: 90px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 1%;
    }

    .edit-elem{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .selectEj {
      color: #5DA587;
    }

    .custom-button{
      flex-grow: 1;
    }
</style>