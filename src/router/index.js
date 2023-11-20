import { createRouter, createWebHistory } from "vue-router";
import TaskListView from "../views/TaskListView.vue";
import TaskFormView from "../views/TaskFormView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TaskListView,
  },
  {
    path: "/TaskForm",
    name: "addTask",
    component: TaskFormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
