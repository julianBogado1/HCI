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
import {getUser} from '@/api/api.js';
export default{
    data() {
    return {
      username: '',
      email: '',
      name: '',
    };
  },
  async mounted() {
    let response = await getUser();
    console.log(response);
    localStorage.AVATARURL = response.avatarUrl; // The image is saved locally

    this.username = response.username;
    this.email = response.email;
    this.name = response.firstName + ' ' + response.lastName;
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