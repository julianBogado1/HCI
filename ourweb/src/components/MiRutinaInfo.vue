<template>
    <div class="mySubheaderDiv">
        <div class="mySubheaderDivInfo">
            <h3 class="mySubheaderText">{{ this.name }}</h3>
            <div class="iconButtons">
                <svg-icon @click="deleteRoutine" class="icon-button" type="mdi" :path="path2"></svg-icon>
            </div>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Descripción</p>
        </div>
        </div>
        
        <div class="details-info">
            <p class="infoText">{{ this.detail }}</p>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Duración (en minutos)</p>
        </div>
        </div>
        
        <div class="details-info">
            <p class="infoText">{{this.duration}}</p>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Dificultad</p>
        </div>
        </div>
        
        <div class="details-info">
            <div v-if="this.difficulty === 'rookie'"><Brazitos1/></div>
            <div v-if="this.difficulty === 'intermediate'"><Brazitos2/></div>
            <div v-if="this.difficulty === 'expert'"><Brazitos3/></div>
        </div>

        <div v-for="cycle in this.cycles">
        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2"> {{ cycle.name }}</p>
            <p class="infoText">Repeticiones: {{ cycle.repetitions }}</p>
            </div>
        </div>

        <div v-for="(exercise, eIndex) in cycle.exercises" :key="eIndex">
            <div class="ej-list">
              <div class="card">
                <div class="info-card">
                  <div class="name-text">
                    <p>{{ exercise.exercise.name }}</p>
                  </div>
                  <div class="desc-text">
                    <p>{{ exercise.exercise.detail }}</p>
                  </div>
                </div>
                <div class="edit-card">
                  <div class="edit-elem">
                    <p class="desc-text-white">Series</p>
                    <p class="desc-text-white"> {{ exercise.repetitions }} </p>
                  </div>
                  <div class="edit-elem">
                    <p class="desc-text-white">Duración (en seg)</p>
                    <p class="desc-text-white"> {{ exercise.duration }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTrashCanOutline } from '@mdi/js';
import { fetchMultiple } from '@/api/api';
import { fetchSingle } from '@/api/api';
import { deleteSingle } from '@/api/api';
import Brazitos1 from './brazitos/Brazitos1.vue';
import Brazitos2 from './brazitos/Brazitos2.vue';
import Brazitos3 from './brazitos/Brazitos3.vue';
import router from '@/router/router.js'

export default {
  components: {
    SvgIcon,
    Brazitos1,
    Brazitos2,
    Brazitos3,
  },
  data: () => ({
  id: null,
  name: "Rutina",
  detail: "Rutina",
  difficulty: "rookie",
  duration: "",
  cycles: null,
  path2: mdiTrashCanOutline,
}),
created() {
  this.id = this.$route.params.id;
  this.loadRoutine();
},
methods: {
  async loadRoutine() {
    try {
      const response_r = await fetchSingle('routines', this.id);
      this.name = response_r.name;
      this.detail = response_r.detail;
      this.difficulty = response_r.difficulty;
      if(response_r.metadata != null && response_r.metadata.duration != null) {
        this.duration = response_r.metadata.duration
      } else {
        this.duration = "N/A"
      }
      const response_c = await fetchMultiple(`routines/${this.id}/cycles`, 100);
      this.cycles = response_c['content'];
      if (this.cycles) {
        for (const cycle of this.cycles) {
          // Call getExercises for each cycle and assign the result to exercises
          cycle.exercises = await this.getExercises(cycle.id);
          console.log(cycle.exercises)
        }
      }
    } catch (error) {
      router.push("/mis-rutinas")
    }
  },
  async getExercises(cycle_id) {
    const response = await fetchMultiple(`cycles/${cycle_id}/exercises`, 100);
    return response['content'];
  },
  async deleteRoutine() {
    await deleteSingle('routines', this.id)
    router.push("/mis-rutinas")
  }
  },
};

</script>

<style scoped>
    .mySubheaderText{
        color: #000000;
        font-weight: 400;
        font-size: x-large;
    }

    .mySubheaderText2{
        color: #49454F;
        margin-right: 50px;
        font-weight: 300;
        font-size: large;
    }

    .infoText{
        color: #000000;
        font-weight: 400;
        font-size: large;
    }

    .mySubheaderDiv{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 80px;
        margin-right: 80px;
    }

    .mySubheaderDivInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .details-div{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .details-info{
        margin-left: 1%;
    }

    .ej-list{
        display: flex;
        flex-direction: column;
        margin-top: 1%;
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
      .iconButtons{
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
</style>