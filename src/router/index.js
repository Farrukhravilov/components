import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
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
  ],
});

export default router;
