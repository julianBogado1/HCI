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
                <router-link :to="'/mi-rutina-view/' + routine.id" class="linkDiv"><p>Click para más info</p></router-link>
            </div>
            <div class="dif-card">
                <div v-if="routine.difficulty === 'rookie'"><Brazitos1/></div>
                <div v-if="routine.difficulty === 'intermediate'"><Brazitos2/></div>
                <div v-if="routine.difficulty === 'expert'"><Brazitos3/></div>
                <div v-if="routine.metadata != null"><div v-if="routine.metadata.duration"><p>{{ routine.metadata.duration }} min</p></div></div>
            </div>
        </div>
        </div>
        <MyNoRutinesMessage v-if="routines.length === 0" />
    </div>
</template>

<script>
import { fetchMultiple } from '@/api/api';
import { fetchFilteredRoutines } from '@/api/api';
import Brazitos1 from './brazitos/Brazitos1.vue';
import Brazitos2 from './brazitos/Brazitos2.vue';
import Brazitos3 from './brazitos/Brazitos3.vue';
import MyNoRutinesMessage from './messages/MyNoRutinesMessage.vue';

export default {
    components: {
        Brazitos1,
        Brazitos2,
        Brazitos3,
    },
    data: () => ({
        routines: [],
        filterRookie: false,
        filterIntermediate: false,
        filterExpert: false
    }),
    created() {
        this.loadRoutines()
    },
    methods: {
        async loadRoutines() {
            try {
                this.routines = [];
                let response;

                if (!this.filterRookie && !this.filterIntermediate && !this.filterExpert) {
                    response = await fetchMultiple('users/current/routines', 100);
                    this.routines = response['content'];
                } else {
                    if (this.filterRookie) {
                        response = await fetchCurrentUserFilteredRoutines(100, 'rookie');
                        this.routines = this.routines.concat(response['content']);
                    }
                    if (this.filterIntermediate) {
                        response = await fetchFilteredRoutines(100, 'intermediate');
                        this.routines = this.routines.concat(response['content']);
                    }
                    if (this.filterExpert) {
                        response = await fetchFilteredRoutines(100, 'expert');
                        this.routines = this.routines.concat(response['content']);
                    }
                }
                
            } catch(error) {
                console.error('Error fetching exercise:', error)
            }
        },
        filterToggle(message) {
            switch (message) {
                case 'rookie':
                    this.filterRookie = !this.filterRookie;
                    break;
                case 'intermediate':
                    this.filterIntermediate = !this.filterIntermediate;
                    break;
                case 'expert':
                    this.filterExpert = !this.filterExpert;
                    break;
                default:
            }
            this.loadRoutines()
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
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .info-card{
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .dif-card{
        background-color: #BEBEBE;
        height: 100%;
        width: 90px;
        display: flex;
        flex-direction: column;
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
    .linkDiv{
    color: #0D6138;
}
</style>