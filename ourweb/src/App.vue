<template>
  <v-app>
  <div id="app">
      <NavigationBar />
      <router-view v-slot="{ Component }">
          <transition name="slide" mode="out-in">
              <component :is="Component" :key="$route.path" />
          </transition>
      </router-view>
  </div>
  </v-app>
</template>

<script setup>
  import MiRutinaEditPage from './pages/MiRutinaEditPage.vue';
  import HomePage from './pages/HomePage.vue'
  import LoginPage from './pages/LoginPage.vue'
  import RegisterPage from './pages/RegisterPage.vue'
  import PerfilPage from './pages/PerfilPage.vue'
</script>
