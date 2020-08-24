import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "main",
            component: () => import("@/App"),
            children: [ {
                path: "main",
                component: () => import("@/components/Layout"),
            }]
        }
    ]
});

export default router;
