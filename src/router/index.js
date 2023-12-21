import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/washing",
      name: "washing",
      component: () => import("../views/WashingRoomView.vue")
    },
    // error
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: { name: "home" }
    }

  ]
});

export default router;
