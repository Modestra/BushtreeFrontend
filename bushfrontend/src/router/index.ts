import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    // Если есть хеш в маршруте, прокручиваем к элементу с этим хешем
    if (to.hash) {
      return {
        el: to.hash,
        top: +60, // смещение на 60 пикселей вверх
        behavior: "smooth",
      };
    }
    // В противном случае ничего не меняем
    return { top: 0 }; // или просто return; если не хотите перемещаться
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/gensettings",
      name: "gensettings",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GenSettings.vue"),
    },
    {
      path: "/results",
      name: "results",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Results.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/ErrorNotFound.vue"),
    },
  ],
});

export default router;
