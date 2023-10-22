<template>
    <div class="mySubheaderDiv">
        <div class="mySubheaderDivInfo">
            <h3 class="mySubheaderText">{{ name }}</h3>
            <div class="content">
                <div>
                    <v-btn @click="editExercise" class="icon-button">
                      <svg-icon type="mdi" :path="path1"></svg-icon>
                    </v-btn>
                    <v-btn @click="deleteExercise" class="icon-button">
                      <svg-icon type="mdi" :path="path2"></svg-icon>
                    </v-btn>
                  </div>
            </div>
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
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPencilOutline } from '@mdi/js';
import { mdiTrashCanOutline } from '@mdi/js';
import { fetchSingle } from '@/api/api.js'
import { deleteSingle } from '@/api/api.js'
import router from '@/router/router.js'

export default {
  name: "my-component",
  components: {
    SvgIcon
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

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
      }
</style>