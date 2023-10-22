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
            :items="['1','2','3']"
            variant="outlined"
            ></v-select>
      </div>

      <div v-for="(cycle, index) in cards" :key="index">

        <div class="duracion space-below">
          <p class="myText">Duración (en segundos):</p>
          <input
            class="myInputBox"
            type="number"
            id="numericInput"
            v-model="cycle.duration" 
            min="0"
            max="100"
          />
        </div>
        <div>
          <div class="space-below">
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
              <p class="myText">{{ cycle.name }}</p>
              <v-btn @click="showAddExerciseDropdown = !showAddExerciseDropdown">
                <div class="myDiv">
                  <svg-icon type="mdi" :path="path2"></svg-icon>
                  <div>
                    <p>Añadir Ejercicio</p>
                  </div>
                </div>
              </v-btn>
              <v-menu
                v-model="showAddExerciseDropdown"
                offset-y
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    v-if="showAddExerciseDropdown"
                  >
                    Cerrar
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(exercise, index) in exercises"
                    :key="index"
                    @click="addExercise(selectedCard, exercise)"
                  >
                    <v-list-item-title>{{ exercise.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <div class="repeticiones">
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
          </div>
        </div>
      </div>

      <span></span>

      <v-row justify="center" class="space-below">
      <v-btn
          :loading="loading"
          size="large"
          variant="elevated"
          density="compact"
          rounded="xl"
          color="#73C7A4"
          class="text-white"
          @click="addCycle"
          >
              añadir Ciclo
          </v-btn>
        </v-row>

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
  import { fetchMultiple } from '@/api/api';
  import { createCycle } from '@/api/api';
  import { createRoutine } from '@/api/api';
  import { addExerciseToCycle } from '@/api/api';
  
  export default {
    data() {
      return {
        name: "",
        description: "",
        difficulty: 2,
        exercises: [],
        cards: [],
        showAddExerciseDropdown: null,
        selectedCard: null,
      };
    },
    created() {
      this.populateExercises();
    },
    methods: {
      async populateExercises() {
        const response = await fetchMultiple('exercises', 50);
        this.exercises = response['content'];
      },
      addCycle() {
        this.cards.push({
          name: `New Cycle ${this.cards.length + 1}`,
          order: this.cards.length + 1,
          detail: "Cycle Detail",
          type: "exercise",
          repetitions: 1,
          exercises: [],
        });
      },
      addExercise(card, exercise) {
        card.exercises.push({
            id: exercise.id,
            name: exercise.name,
            detail: exercise.detail,
            duration: 10,
            repetitions: 1,
        });
      },
      removeExercise(card, index) {
        if (card.exercises.length > 0) {
          card.exercises.pop();
        } else {
          this.cards.splice(index, 1);
        }
      },
      async createRoutine() {
        let response_c
        let response_e
        let response_r = await createRoutine(this.name, this.description, true, getSkillLevel(this.difficulty))
        for(const card of this.cards) {
            response_c = await createCycle(response_r.id, card.name, card.detail, card.type, card.order, card.repetitions)
            var i = 1
            for(const ex of card.exercises) {
                console.log(ex)
                console.log(ex.id)
                response_e = await addExerciseToCycle(response_c.id, ex.id, i, ex.duration, ex.repetitions)
                i++
            }
        }
      },
      isExercisesEmpty(card) {
        return card.exercises.length === 0;
      },
      getSkillLevel(skill) {
        switch (skill) {
          case 1:
            return "rookie";
          case 2:
            return "intermediate";
          case 3:
            return "expert";
          default:
            return "intermediate";
        }
      }
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