<template>
    <div class="register">
    <v-main style="padding-bottom: 74px;">
        <div class="centeredCompo">
            <img src="../assets/ourlogo.jpeg" class="log-image" />
            <v-card class="mx-auto px-6 py-8 mycard" width="60%" >
                <div class="myDiv space-below xlarg-text">
                    <p>Registro exitoso!</p>
                </div>
                <div class="myDiv space-below larg-text">
                    <p>Recuerde revisar su correo electrónico para validar su cuenta</p>
                </div>
                <v-row class="myrow">
                    <v-text-field
                    v-model="confirmation_code"
                    clearable
                    label="Inserte el código de verificación"
                    placeholder="Enter your password"
                    variant="outlined"
                ></v-text-field>
                <v-btn
                :loading="loading"
                size="large"
                variant="elevated"
                density="compact"
                rounded="xl"
                color="#73C7A4"
                class="text-white"
                @click="verifyUserWrapper"
                >
                    Verificar
                </v-btn>
               
                </v-row>
                <v-row>
                    <div class="button-with-mssg">
                        <div v-if="errorMessage" class="text-error space-below">
                          {{ errorMessage }}
                      </div>
                    </div>
                    <div class="button-with-mssg">
                        <div v-if="successMessage" class="text-success space-below">
                          {{ successMessage }}
                      </div>
                    </div>
                </v-row>
                <v-row class="myrow">
                    <div class="der-text">
                    <router-link to="/register" class="mytext linkDiv">Volver a la página principal</router-link>
                    </div>
                    <v-divider
                        class="mx-3"
                        vertical
                    ></v-divider>
                    <div class="izq-text">
                    <router-link to="/login" class=" mytext linkDiv">Ingresar</router-link> 
                    </div>  
                </v-row>
            </v-card>
        </div>
        <MyFooter />
    </v-main>
    </div>
</template>

<script>
import { mdiContentSaveCogOutline } from '@mdi/js';
import MyFooter from '../components/MyFooter'
import { verifyUser } from '@/api/api.js';

export default {
  data: () => ({
    loading: false,
    errorMessage: '',
    successMessage: '',
  }),
  methods: {
    async verifyUserWrapper () {
        this.loading = true;
        this.errorMessage = '';
        this.successMessage = '';
        try{
            let response = await verifyUser(localStorage.lastRegisteredEmail, this.confirmation_code);
            if(!response.ok){
                this.errorMessage='Error de verificacion. Inténtelo nuevamente.'
            }
            else if(response.ok){
                this.successMessage='Verificación realizada exitosamente.'
            }
            this.loading=false;
        }catch(error){
            console.log('Unexpected error: \n' + error.message)
            this.errorMessage='Error de verificacion. Inténtelo nuevamente.'
            this.loading=false;
        }
        setTimeout(() => (this.loading = false), 2000);
        }
    },
};

</script>

<style scoped>

.mycard{
  margin-bottom: 1%;
}
.izq-text{
  flex: 1; /*mismo espacio*/
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: left;
}

.der-text{
  flex: 1; /*mismo espacio*/
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: right;
}

.linkDiv{
    text-decoration: none;
}

.mytext{
color: #73C7A4;
}
    .xlarg-text{
        font-size: x-large;
    }

    .larg-text{
        font-size: large;
    }

    .myDiv{
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: center;
        color: #000000;
        white-space: nowrap;
    }
    .myrow{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .centeredCompo{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    }

    .log-image{
        width: 15%;
        height: auto;
    }

    .space-below{
    margin-bottom: 20px;
  }
  .text-error {
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-success {
    color: green;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>