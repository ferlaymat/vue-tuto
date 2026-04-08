import { createRouter, createWebHistory } from "vue-router";
import Kanban from "@/features/kanban/components/Kanban.vue";
import Home from "@/features/home/Home.vue";

const routes = [
    {path:"/", component: Home},
    {path:"/kanban", component:Kanban}
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
  });