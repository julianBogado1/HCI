<template>
  <v-app>
  <div id="app">
      
      <router-view v-slot="{ Component }">
          <transition name="slide" mode="out-in">
              <component :is="Component" :key="$route.path" />
          </transition>
      </router-view>
  </div>
  </v-app>
</template>

<script setup>

</script>
