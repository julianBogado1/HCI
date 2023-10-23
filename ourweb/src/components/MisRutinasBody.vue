<template>
        <div class="wrapper">
            <MyFiltro @toggle-rookie="handleUpdateRutinaList('rookie')" @toggle-intermediate="handleUpdateRutinaList('intermediate')" @toggle-expert="handleUpdateRutinaList('expert')"/>
        </div>
    <div class="grid-container">
        

        <div></div>

        <div class="content">
            <RutinasList ref="rutinaList"/>
        </div>
    </div>
</template>

<script>
import MyFiltro from './MyFiltro.vue';
import RutinasList from './RutinasList.vue';

export default {
    components: {
        MyFiltro,
        RutinasList,
    },
    methods: {
      handleUpdateRutinaList(signal) {
      this.$refs.rutinaList.filterToggle(signal);
    }
  }
}
</script>

<style scoped>
    .v-rows {
        display: grid;
        margin-left: 10%;
        margin-right: 10%;
    }

    .grid-container {
            display: grid;
            grid-template-columns: 260px 1fr;
            grid-gap: 10px;
            width: 100%;
        }

    .content {
        flex-grow: 1;
        padding: 20px;
    }

    .wrapper {
        max-width: min-content;
        position: fixed;
        z-index: 99;
    }
</style>