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
            </div>
          </div>
          <div class="detail-card">
            <div class="edit-card">
              <div class="content">
                <router-link :to="'/mi-ej-edit/' + item.id" class="icon-link"><svg-icon type="mdi" :path="path1"></svg-icon></router-link>
                <svg-icon type="mdi" class="clickable-icon" :path="path2" @click="() => deleteCurrent(item.id)"></svg-icon>
              </div>
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
      async deleteCurrent(id) {
        try {
            await deleteSingle('exercises', id);
            const index = this.items.findIndex(item => item.id === id);

            if (index !== -1) {
            this.items.splice(index, 1);
            }
        } catch (error) {
            console.error('Error deleting exercise:', error);
        }
       }
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
    padding: 10px;
    background-color: #D9D9D9;
  }
  
  .info-card {
    flex: 1; 
  }
  
  .detail-card {
    display: flex;
  }
  
  .edit-card {
    background-color: #938F99;
    width: 45px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .name-text {
    font-size: x-large;
    color: #000000;
  }
  
  .desc-text {
    font-size: large;
    color: #000000;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }

  .icon-link {
    text-decoration: none;
    color: inherit;
  }

  .icon-link:focus {
    outline: none;
  }

  .clickable-icon {
    cursor: pointer;
  }
  </style>