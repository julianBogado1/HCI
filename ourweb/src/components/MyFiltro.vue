<template>
    <div class="filter-card">
        <div>
            <p class="field-text title-text">Filtros:</p>
        </div>
        <div>
            <p class="field-text">Dificultad</p>
            <div class="brazo-select">
                <Brazitos1/>
                <v-checkbox @change="handleCheckboxChange('toggle-rookie')" hide-details/>
            </div>
            <div class="brazo-select">
                <Brazitos2/>
                <v-checkbox @change="handleCheckboxChange('toggle-intermediate')" hide-details/>
            </div>
            <div class="brazo-select">
                <Brazitos3/>
                <v-checkbox  @change="handleCheckboxChange('toggle-expert')" hide-details/>
            </div>
        </div>
    </div>
</template>

<script>
    import Brazitos1 from '@/components/brazitos/Brazitos1.vue';
    import Brazitos2 from '@/components/brazitos/Brazitos2.vue';
    import Brazitos3 from '@/components/brazitos/Brazitos3.vue';

    export default {
        components: {
        Brazitos1,
        Brazitos2,
        Brazitos3,
    },
    methods: {
    handleCheckboxChange(signal) {
        this.$emit(signal);
    }
    }
    }
</script>

<style scoped>
    .filter-card{
        background-color: #E6F6EF;
        border-radius: 15px;
        margin: 5%;
        margin-left: 10%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 3%;
        padding-bottom: 3%;
        width: 240px;
    }

    .field-text{
        font-weight: bold;
        font-size: medium;
        color: #000000;
    }

    .title-text{
        margin-bottom: 1%;
    }

    .brazo-select{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
