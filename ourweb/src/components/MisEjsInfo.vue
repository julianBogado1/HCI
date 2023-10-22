<template>
    <div class="mySubheaderDiv">
        <div class="mySubheaderDivInfo">
            <h3 class="mySubheaderText">{{ name }}</h3>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Descripción</p>
        </div>
        </div>
        
        <div class="details-info">
            <p class="infoText">{{ description }}</p>
        </div>
    </div>
</template>

<script >
import MyEditDelete from '../components/MyEditDelete.vue';
import { fetchSingle } from '@/api/api.js'
import { deleteSingle } from '@/api/api.js'
import { editExercise } from '@/api/api.js'
import router from '@/router/router.js'

export default {
data: () => ({
  form: {},
  id: null,
  name: "Ejercicio",
  description: "Descripción del Ejercicio",
  reqRules: [],
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
      console.error('Error fetching exercise:', error);
    }
  },
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
</style>