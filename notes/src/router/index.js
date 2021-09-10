import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Notes from "../views/Notes.vue";
import ModifNote from "../views/ModifNote.vue";

const routes = [
  {
    path: "/Notes",
    name: "Notes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Notes
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/note/:_id",
    name: "ModifNote",
    component: ModifNote
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
