<template>
    <div class="lista">
        <div v-for="routine in this.routines">
        <div class="rutina-card dflex w-100">
            <div class="info-card">
                <div class="name-text">
                    <p>{{ routine.name }}</p>
                </div>
                <div class="desc-text">
                    <p>{{ routine.detail }}</p>
                </div>
            </div>
            <div class="dif-card">
                <div v-if="routine.difficulty === 'rookie'"><Brazitos1/></div>
                <div v-if="routine.difficulty === 'intermediate'"><Brazitos2/></div>
                <div v-if="routine.difficulty === 'expert'"><Brazitos3/></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { fetchMultiple } from '@/api/api';
import Brazitos1 from './brazitos/Brazitos1.vue';
import Brazitos2 from './brazitos/Brazitos1.vue';
import Brazitos3 from './brazitos/Brazitos1.vue';

export default {
    components: {
        Brazitos1,
        Brazitos2,
        Brazitos3,
    },
    data: () => ({
        routines: [],
    }),
    created() {
        this.loadRoutines()
    },
    methods: {
        async loadRoutines() {
            try {
                const response = await fetchMultiple('users/current/routines', 100);
                this.routines = response['content'];
            } catch(error) {
                console.error('Error fetching exercise:', error)
            }
        }
    }
}

</script>

<style scoped>
    .lista{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .rutina-card{
        background-color: #D9D9D9;
        width: 800px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .info-card{
        height: 90px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .dif-card{
        background-color: #BEBEBE;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .name-text{
        font-size: x-large;
        color: #000000;
    }

    .desc-text{
        font-size: large;
        color: #000000;
    }
</style>