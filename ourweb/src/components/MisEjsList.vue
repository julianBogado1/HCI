<template>
    <div>
      <div class="lista">
        <div class="card" v-for="item in items" :key="item.id">
          <div class="info-card">
            <div class="name-text">
              <p>{{ item.name }}</p>
            </div>
            <div class="desc-text">
              <p>{{ item.detail }}</p>
              <router-link :to="'/mi-ej-view/' + item.id" class="linkDiv"><p>Click para más info</p></router-link>
            </div>
          </div>
          <div class="detail-card">
            <div class="edit-card">
                <p class="desc-text-white">Series</p>
                <p class="desc-text-white">Duración</p>
            </div>
          </div>
        </div>
      </div>

      <MyNoEjsMessage v-if="items.length === 0" />
    </div>
  </template>
  
  <script>
  import { fetchMultiple } from '@/api/api.js'
  import { deleteSingle } from '@/api/api.js'
  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiPencilOutline } from '@mdi/js'
  import { mdiTrashCanOutline } from '@mdi/js'
  import MyNoEjsMessage from './messages/MyNoEjsMessage.vue';
  
  export default {
    name: "my-component",
    components: {
      SvgIcon,
      MyNoEjsMessage,
    },
    data: () => ({
      items: [],
      path1: mdiPencilOutline,
      path2: mdiTrashCanOutline,
    }),
    created() {
      this.loadExercises();
    },
    methods: {
      async loadExercises() {
        try {
          const exercise = await fetchMultiple('exercises', 50);
          this.items = exercise['content'];
        } catch (error) {
          console.error('Error fetching exercise:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .lista {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .card {
    display: flex;
    align-items: center; 
    justify-content: space-between;
    height: 90px;
    padding-left: 10px;
    background-color: #D9D9D9;
  }
  
  .info-card {
    height: 90px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  .desc-text-white {
    font-size: large;
    color: #FFFFFF;
  }

  .detail-card{
        display: flex;
        flex-direction: row;
    }

    .edit-card{
        background-color: #938F99;
        width: 90px;
        height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

  .linkDiv{
    color: #0D6138;
}
  </style>