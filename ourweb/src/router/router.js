import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomePage
      },
      {
        path: '/login',
        name: 'login',
        component: () => import("@/pages/LoginPage.vue"),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import("@/pages/RegisterPage.vue"),
      },
      {
        path: '/editroutine',
        name: 'editroutine',
        component: () => import("@/pages/MiRutinaEditPage.vue"),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import("@/pages/PerfilPage.vue"),
      }
    ]
})


//TODO activarlo cuando ya tengamos usuarios
/*router.beforeEach((to, from) => {
  if (to.matched.some(route => route.meta.requiresAuth) &&
      !store.user)
      return { name: "login", query: { redirect: to.fullPath } }
})
*/

export default router