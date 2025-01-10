import { createRouter, createWebHistory } from "vue-router";
import Style from '@/views/StyleView.vue'
import Home from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  router,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
          { path: '', name: 'Dashboard', component: Dashboard },
          // Добавьте другие маршруты админки
      ]
    },
    {
      path: "/Faq",
      name: "Faq",
      component: () => import("@/views/Faq.vue"),
      props: true,
    },
    {
      path: "/About",
      name: "About",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/Connection",
      name: "Connection",
      component: () => import("@/views/Connection.vue"),
    },
    {
      path: "/Videos",
      name: "Videos",
      component: () => import("@/views/Videos.vue"),
    },
    {
      path: "/InfoPage",
      name: "InfoPage",
      component: () => import("@/views/InfoPage.vue"),
    },
    {
      meta: {
        title: 'Select style'
      },
      path: '/',
      name: 'style',
      component: Style
    },
    {
      // Document title tag
      // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
      meta: {
        title: 'Dashboard'
      },
      path: '/dashboard',
      name: 'dashboard',
      component: Home
    },
    {
      meta: {
        title: 'Tables'
      },
      path: '/tables',
      name: 'tables',
      component: () => import('@/views/TablesView.vue')
    },
    {
      meta: {
        title: 'Forms'
      },
      path: '/forms',
      name: 'forms',
      component: () => import('@/views/FormsView.vue')
    },
    {
      meta: {
        title: 'Profile'
      },
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')
    },
    {
      meta: {
        title: 'Ui'
      },
      path: '/ui',
      name: 'ui',
      component: () => import('@/views/UiView.vue')
    },
    {
      meta: {
        title: 'Responsive layout'
      },
      path: '/responsive',
      name: 'responsive',
      component: () => import('@/views/ResponsiveView.vue')
    },
    {
      meta: {
        title: 'Login'
      },
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      meta: {
        title: 'Error'
      },
      path: '/error',
      name: 'error',
      component: () => import('@/views/ErrorView.vue')
    }
  ],
});


export default router;
