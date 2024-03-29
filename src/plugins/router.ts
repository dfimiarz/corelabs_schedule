import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../components/pages/MainPage.vue"),
  },
  {
    path: "/facilities/:id",
    name: "FacilityPage",
    component: () => import("../components/pages/FacilityPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
