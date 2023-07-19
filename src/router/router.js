import Page from "../page/Page";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: Page
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;

