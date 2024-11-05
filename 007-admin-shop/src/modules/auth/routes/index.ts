import type { RouteRecordRaw } from "vue-router";


export const authRoutes: RouteRecordRaw = {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
        {
            path: 'login',
            name: 'login',
            component: () => import('../views/LoginPage.vue')
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('../views/RegisterPage.vue')
        }
    ]
}