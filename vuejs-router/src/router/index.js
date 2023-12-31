import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/signup",
            name: "singup",
            component: SignupView,
        },
    ],
});

export default router;
