<template>
    <div class="register">
    <v-main style="padding-bottom: 74px;">
        <div class="centeredCompo">
            <img src="../assets/ourlogo.jpeg" class="log-image" />
            <v-card class="mx-auto px-6 py-8" width="60%" >
                <div class="myDiv space-below xlarg-text">
                    <p>Registro exitoso!</p>
                </div>
                <div class="myDiv space-below larg-text">
                    <p>Recuerde revisar su correo electrónico para validar su cuenta</p>
                </div>
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

<script setup>
    import MyFooter from '../components/MyFooter'
</script>

<style scoped>
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
</style>