<template>
    <div class="home">
      <v-main style="padding-top: 110px; padding-bottom: 74px;">
        <MyHeader />
        <div class="center-container">
          <div class="routine-card">
            <div class="cycle-card" v-for="(card, index) in cards" :key="card.id">
              <div class="cycle-header">
                <h2>{{ card.name }}</h2>
                <p>{{ card.detail }}</p>
              </div>
              <div class="cycle-repetitions">
                <span>Repetitions: {{ card.repetitions }}</span>
              </div>
              <div class="exercise-cards">
                <MyExercisesBody
                  v-for="exercise in card.exercises"
                  :key="exercise.id"
                  :name="exercise.name"
                  :detail="exercise.detail"
                  :duration="exercise.duration"
                  :repetitions="exercise.repetitions"
                />
              </div>
              <div class="button-container">
                <div class="add-exercise-button">
                  <button class="add-button" @click="showAddExerciseDropdown = card.id">Add Exercise</button>
                  <div class="dropdown" :style="{ top: showAddExerciseDropdown === card.id ? '100%' : '0' }" v-show="showAddExerciseDropdown === card.id">
                    <ul>
                      <li v-for="exercise in exercises" :key="exercise.id">
                        <button @click="addExercise(card, exercise)">{{ exercise.name }}</button>
                      </li>
                    </ul>
                    <button @click="showAddExerciseDropdown = null">Cancel</button>
                  </div>
                </div>
                <button class="remove-button" @click="removeExercise(card, index)">Remove Exercise</button>
              </div>
            </div>
            <div class="cycle-buttons">
              <button class="add-cycle-button" @click="addCycle">Add Cycle</button>
            </div>
          </div>
        </div>
        <MyFooter />
      </v-main>
    </div>
  </template>
  
  <script>
  import MyHeader from '../components/MyHeader.vue'
  import MyFooter from '../components/MyFooter.vue'
  import MyExercisesBody from '@/components/MyExercisesBody.vue';
  import { fetchMultiple } from '@/api/api';
  
  export default {
    components: {
      MyHeader,
      MyFooter,
      MyExercisesBody,
    },
    data() {
      return {
        exercises: [],
        cards: [],
        showAddExerciseDropdown: null,
        selectedCard: null,
      };
    },
    created() {
        this.populateExercises()
    },
    methods: {
      async populateExercises() {
        const response = await fetchMultiple('exercises', 50)
        this.exercises = response['content']
      },
      addCycle() {
        this.cards.push({
          name: "New Cycle",
          detail: "Cycle Detail",
          repetitions: 15,
          exercises: [],
        });
      },
      addExercise(card, exercise) {
        card.exercises.push(exercise);
      },
      removeExercise(card, index) {
        if (card.exercises.length > 0) {
          card.exercises.pop();
        } else {
          this.cards.splice(index, 1);
        }
      },
      toggleAddExerciseDropdown(card) {
        this.selectedCard = card.id; 
      },
    },
  };
  </script>
  
  <style>
  .home {
    display: flex;
    justify-content: center;
  }
  
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .cycle-card {
    background-color: #f0f0f0;
    padding: 16px;
    display: flex;
    align-items: left;
    flex-direction: column;
    text-align: left;
    min-height: 100px;
    min-width: 1000px;
  }
  
  .cycle-header {
    text-align: left;
    margin-bottom: 10px;
  }
  
  .cycle-repetitions {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #28a745;
  }

  .exercise-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    justify-content: center;
  }
  
  .exercise-card {
    flex: 0 0 calc(25% - 16px);
    margin: 8px;
    padding: 16px;
  }
  
  .exercise-details {
    margin-top: 10px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    position: relative;
  }
  
  .add-button, .remove-button {
    background-color: #007BFF;
    color: #fff;
    padding: 5px 10px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
  }
  
  .remove-button {
    background-color: #DC3545;
  }

  .add-exercise-button {
    position: relative;
  }

  .dropdown {
    position: absolute;
    top: 0; 
    left: 0;
    display: none; 
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .button-container:hover .dropdown,
  .dropdown.show {
    display: block;
  }
  .dropdown button {
    display: block;
    margin-bottom: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }
  

  </style>