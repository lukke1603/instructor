import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TraineesView from "../views/TraineesView.vue";
import LearningGoalsView from "../views/LearningGoalsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/trainees",
      name: "trainees",
      component: TraineesView,
    },
    {
      path: "/goals",
      name: "learningGoals",
      component: LearningGoalsView,
    },
  ],
});

export default router;
