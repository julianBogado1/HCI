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
        path: '/ejs',
        name: 'ejs',
        component: () => import("@/pages/HomeEjsPage.vue"),
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
        path: '/mi-rutina-edit',
        name: 'mi-rutina-edit',
        component: () => import("@/pages/MiRutinaEditPage.vue"),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/pages/PerfilPage.vue'),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/profile-edit',
        name: 'profile-edit',
        component: () => import("@/pages/PerfilEditPage.vue"),
      },
      {
        path: '/mis-ejs',
        name: 'mis-ejs',
        component: () => import("@/pages/MisEjsPage.vue"),
      },
      {
        path: '/mis-rutinas',
        name: 'mis-rutinas',
        component: () => import("@/pages/MisRutinasPage.vue"),
      },
      {
        path: '/mi-ej-edit/:id',
        name: 'mi-ej-edit',
        component: () => import("@/pages/MyEjEditPage.vue"),
      },
      {
        path: '/mi-ej-create',
        name: 'mi-ej-create',
        component: () => import("@/pages/MyEjCrearPage.vue"),
      },
      {
        path: '/mi-ej-view/:id',
        name: 'mi-ej-view',
        component: () => import("@/pages/MyEjView.vue"),
      },
      {
        path: '/mi-rutina-view/:id',
        name: 'mi-rutina-view',
        component: () => import("@/pages/MyRutinaView.vue"),
      },
      {
        path: '/confirm-email',
        name: 'confirm-email',
        component: () => import("@/pages/MyConfirmPage.vue"),
      },{
        path: '/:catchAll(.*)', //cualquier otro caso que no este por encima
        name: 'not-found',
        component: () => import("@/pages/My404Page.vue"),
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