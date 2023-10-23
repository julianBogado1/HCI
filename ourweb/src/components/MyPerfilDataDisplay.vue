<template>
    <div class="fieldContainer dflex w-100">
        <div class="cuentaField dflex w-100">
            <p class="fieldName">Nombre de usuario</p>
            <div class="fieldColor dflex w-100">
                <p class="fieldData">{{ username }}</p>
            </div>
        </div>
        <div class="cuentaField dflex w-100">
            <p class="fieldName">E-mail</p>
            <div class="fieldColor dflex w-100">
                <p class="fieldData">{{ email }}</p>
            </div>
        </div>
        <div class="cuentaField dflex w-100">
            <p class="fieldName">Nombre</p>
            <div class="fieldColor dflex w-100">
                <p class="fieldData">{{ name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {getUser, getUserVerified} from '@/api/api.js';
export default{
    
    data() {
        return {
            username: '',
            email: '',
            name: '',
        };
    },
    methods: {
        async setupData() {
            try{
                let response = await getUserVerified(localStorage.AUTHTOKEN);                
                console.log(response);
                sessionStorage.AVATARURL = response.avatarUrl; // se guardan los datos de la sesion iniciada en ese momento
                sessionStorage.FIRSTNAME = response.firstName;
                sessionStorage.LASTNAME = response.lastName; 
                this.username = response.username;
                this.email = response.email;
                this.name = response.firstName + ' ' + response.lastName;
            }
            catch(error){
                console.log(error);
            }
        },
    },
    async created(){
        this.setupData();
    },
    updated() {
    this.setupData();
    },
};
</script>


<style scoped>
    .fieldContainer{
        display: flex;
        flex-direction: column;
        margin: 1%;
        gap: 10px;
        margin-bottom: 5%;
    }

    .cuentaField{
        display: flex;
        flex-direction: column;
    }

    .fieldName{
        color: #49454F;
        font-weight: 400;
        font-size: small;
    }

    .fieldColor{
        background-color: #E6F6EF;
        border-radius: 15px;
        padding-left: 1%;
        padding-right: 1%;
        padding-top: 1%;
        padding-bottom: 1%;
        height: fit-content;
    }

    .fieldData{
        color: #000000;
        font-weight: 400;
        font-size: x-large;
    }
</style>