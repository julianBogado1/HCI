<template>
    <div class="mySubheaderDiv">
        <div class="mySubheaderDivInfo">
            <h3 class="mySubheaderText">Rutina 1</h3>
            <MyEditDelete/>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Descripción</p>
        </div>
        </div>
        
        <div class="details-info">
            <p class="infoText">Esta rutina es una prueba</p>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Duración (en segundos)</p>
        </div>
        </div>
        
        <div class="details-info">
            <p class="infoText">240 segundos</p>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Intensidad</p>
        </div>
        </div>
        
        <div class="details-info">
            <Brazitos2/>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Ciclo de Entrada en Calor</p>
            <p class="infoText">Repeticiones: 3</p>
            </div>
        </div>

        <div>
            
        <MyEjEjemplo1/>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Ciclo de Ejercitación A</p>
            <p class="infoText">Repeticiones: 3</p>
            </div>
        </div>

        <div>
            
        <MyEjEjemplo1/>
        </div>

        <div>
            <v-divider :thickness="1" class="border-opacity-50"></v-divider>
            <div class="details-div">
            <p class="mySubheaderText2">Ciclo de Enfriamiento</p>
            <p class="infoText">Repeticiones: 3</p>
            </div>
        </div>

        <div>
            
            <MyEjEjemplo1/>
            </div>
    </div>
</template>

<script>
import Brazitos1 from './brazitos/Brazitos1.vue';
import Brazitos2 from './brazitos/Brazitos2.vue';
import Brazitos3 from './brazitos/Brazitos3.vue';

export default {
  components: {
    Brazitos1,
    Brazitos2,
    Brazitos3,
  },
data: () => ({
  form: {},
  id: null,
  name: "Ejercicio",
  description: "Descripción del Ejercicio",
  reqRules: [],
  path1: mdiPencilOutline,
  path2: mdiTrashCanOutline,
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
  async editExercise() {
    router.push(`/mi-ej-edit/${this.id}`)
  },
  async deleteExercise() {
    await deleteSingle('exercises', this.id)
    router.push("/mis-ejs")
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
</style>