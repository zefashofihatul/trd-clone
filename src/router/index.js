import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import NewsView from "@/views/NewsView.vue";
import DealsheetView from "@/views/DealsheetView.vue";
import AnalyticsView from "@/views/AnalyticsView.vue";
import PostNewsView from "@/views/PostNewsView.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/news",
    name: "news",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/news/create",
    name: "create-news",
    component: () => import("@/views/PostNewsView.vue"),
  },
  {
    path: "/dealsheet",
    name: "dealsheet",
    component: () => import("@/views/DealsheetView.vue"),
  },
  {
    path: "/analytics",
    name: "analytics",
    component: () => import("@/views/AnalyticsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
