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
        beforeEnter: (to, from, next) => {
          if (!localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/');
          }
        },
      },
      {
        path: '/register',
        name: 'register',
        component: () => import("@/pages/RegisterPage.vue"),
        beforeEnter: (to, from, next) => {
          if (!localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/');
          }
        },
      },
      {
        path: '/mi-rutina-edit',
        name: 'mi-rutina-edit',
        component: () => import("@/pages/MiRutinaEditPage.vue"),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
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
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/mis-ejs',
        name: 'mis-ejs',
        component: () => import("@/pages/MisEjsPage.vue"),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/mis-rutinas',
        name: 'mis-rutinas',
        component: () => import("@/pages/MisRutinasPage.vue"),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/mi-ej-edit/:id',
        name: 'mi-ej-edit',
        component: () => import("@/pages/MyEjEditPage.vue"),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/mi-ej-create',
        name: 'mi-ej-create',
        component: () => import("@/pages/MyEjCrearPage.vue"),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/mi-ej-view/:id',
        name: 'mi-ej-view',
        component: () => import("@/pages/MyEjView.vue"),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/mi-rutina-view/:id',
        name: 'mi-rutina-view',
        component: () => import("@/pages/MyRutinaView.vue"),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
      },
      {
        path: '/rutina-view/:id',
        name: 'rutina-view',
        component: () => import("@/pages/MyRutinaViewPublic.vue"),
      },
      {
        path: '/mi-rutina-create',
        name: 'mi-rutina-create',
        component: () => import("@/pages/MiRutinaCrearPage.vue"),
        beforeEnter: (to, from, next) => {
          if (localStorage.AUTHTOKEN) {
            next();
          } else {
            next('/login');
          }
        },
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


export default router