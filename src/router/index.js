import { createRouter, createWebHistory } from "vue-router";

import home from '@/pages/home.vue'

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/done',
        component: ()=> import('@/pages/done.vue')
    },
    {
        path: '/undone',
        component: ()=> import('@/pages/undone.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})



export default router