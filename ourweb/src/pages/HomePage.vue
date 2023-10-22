<template>
  <div class="home">
    <v-main style="padding-top: 110px; padding-bottom: 74px;">
      <MyHeader />
      <div class="subheader">
        <MySubheaderRutinasExplorar/>
      </div>
      <MyBody/>
      <MyFooter />      
    </v-main>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyFooter from '../components/MyFooter.vue'
  import MyBody from '../components/MyBody.vue'
  import MySubheaderRutinasExplorar from '../components/subheaders/MySubheaderRutinasExplorar.vue';
  import { fetchMultiple } from '@/api/api.js';
  import { createInitialRoutines } from '@/api/initUser.js'

  export default {
    components: {
      MyHeader,
      MyFooter,
      MyBody,
      MySubheaderRutinasExplorar,
    },
    async created() {
    if(localStorage.AUTHTOKEN){
        try{
            let response_r = await fetchMultiple('users/current/routines', 10);
            if(response_r['totalCount'] === 0) {
                createInitialRoutines();
            }
        }catch(error){
            console.log(error);
        }
    }
  },
}


  
</script>

<style scoped>
    .subheader{
        position: sticky;
        top: 104px;
        z-index: 999;

        background-color: #FFFFFF;
    }

    .home{
      background-color: #FFFFFF;
    }
</style>