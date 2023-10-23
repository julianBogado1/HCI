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
                </v-row>
                <div class="button-with-mssg">
                    <div class="message space-below">
                        <div v-if="errorMessage" class="text-error">
                          {{ errorMessage }}
                      </div>
                        <div v-if="successMessage" class="text-success">
                          {{ successMessage }}
                      </div>
                    </div>
                </div>
                <v-row justify="center" class="space-below">
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
                    
                
                <v-row class="myrow">
                    <div class="der-text">
                    <router-link to="/register" class="mytext linkDiv">Volver a la página principal</router-link>
                    </div>
                    <v-divider
                    class="mx-3"
                    vertical
                ></v-divider>
                    <div class="center-text">
                        <router-link to="/confirm-email" class="mytext linkDiv" @click="resendEmail"
                        >Reenviar email de verificación</router-link>
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
import { resendVerificationEmail, verifyUser } from '@/api/api.js';
import router from '@/router/router';

export default {
    components: {
        MyFooter,
    },
  data: () => ({
    loading: false,
    errorMessage: '',
    successMessage: '',
    confirmation_code: '',
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
            router.push("/login")
            this.loading=false;
        }catch(error){
            console.log('Unexpected error: \n' + error.message)
            this.errorMessage='Error de verificacion. Inténtelo nuevamente.'
            this.loading=false;
        }
        setTimeout(() => (this.loading = false), 2000);
    },
    async resendEmail(){
        console.log("resent verification email");
        try{
            const resend_response = await resendVerificationEmail(localStorage.lastRegisteredEmail);
            if(!resend_response.ok){
                throw new Error(resend_response);
            }
        }  
        catch(error){
            console.log(error);
        }
    }
    },
};

</script>

<style scoped>
.button-with-mssg{
  display: flex;
  flex-direction: column;
}
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

.center-text{
    flex: 1; /*mismo espacio*/
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    justify-content:center;
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
.divisor-izq{
   margin-right: 5px;
}
.divisor-der{
    margin-left: 10px;
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
  .message{/*reservamos espacio para el mensaje */
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>