<template>
  <div class="myPerfilDiv">
      <div class="myrow">
          <div class="miCuenta">
              <h2 class="mySubheaderText">Mi Cuenta</h2>
              <div class="avatar-image">
                <div class="avatar-elem">
                  <MyPlaceholderAvatar/>
                </div>
                  <div class="avatar-elem">
                  <MyEdit/>
                  </div>
              </div>
          </div>
          <div class="datosUser">
              <div class="dataText">
                  <p></p>
                  <v-divider vertical :thickness="2" class="border-opacity-50"></v-divider>
                  <p class="muSubheaderText2">Datos de usuario</p>
              </div>
              <MyPerfilDataDisplayEdit/>
          </div>
      </div>
  </div>
</template>

<script setup>
  import MyPerfilDataDisplayEdit from '../components/MyPerfilDataDisplayEdit.vue'
  import MyPlaceholderAvatar from '../components/MyPlaceholderAvatar.vue'
import MyEditDelete from './MyEditDelete.vue';
import MyEdit from './MyEdit.vue';
</script>
<style scoped>
    .avatar-elem{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
  .miCuenta{
      margin-right: 5%;
      width: 160px;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .avatar-image{
      display: flex;
      flex-direction: column;
      margin: 1%;
      justify-content: center;
      height: 100px;
  }
  .mySubheaderText{
      color: #000000;
      margin-left: 1%;
      font-weight: 400;
      margin-right: 10%;
      margin-bottom: 1%;
  }

  .myPerfilDiv{
      margin-left: 5%;
      margin-right: 5%;
      margin-top: 1%;
  }

  .myrow{
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: flex-start;
  }

  .mySubheaderText2{
      color: #49454F;
      margin-right: 50px;
      font-weight: 200;
      font-size: x-large;
  }

  .dataText{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 1%;
      gap: 10px;
  }

  .datosUser{
      display: flex;
      flex-direction: column;
      min-width: 300px;
      width: fit-content;
      flex-grow: 1;
  }

  .botoness{
      margin: 1%;
      gap: 10px;
  }
</style>