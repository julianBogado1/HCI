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
                <button class="add-button" @click="addExercise(card)">Add Exercise</button>
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
  
  export default {
    components: {
      MyHeader,
      MyFooter,
      MyExercisesBody,
    },
    data() {
      return {
        cards: [
          {
            id: 1,
            name: "hola",
            detail: "hola",
            repetitions: 1,
            exercises: [
              {
                id: 1,
                name: "hola2",
                detail: "hola2",
                duration: 30,
                repetitions: 15,
              },
              {
                id: 2,
                name: "hola2",
                detail: "hola2",
                duration: 30,
                repetitions: 15,
              },
            ],
          },
        ],
      };
    },
    methods: {
    addCycle() {
        this.cards.push({
        name: "New Cycle",
        detail: "Cycle Detail",
        repetitions: 15,
        exercises: [],
      });
    },
    addExercise(card) {
      card.exercises.push({
        id: card.exercises.length + 1,
        name: "New Exercise",
        detail: "Exercise Detail",
        duration: 30,
        repetitions: 15,
      });
    },
    removeExercise(card, index) {
      if (card.exercises.length > 0) {
        card.exercises.pop();
      } else {
        this.cards.splice(index, 1)
      }
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

  </style>