import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/modules/landing/pages/HomePage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
       
        {
            path:'/',
            name: 'landing',
            component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
            children:[
                {
                    path: '/',
                    name: 'home',
                    component: HomePage
                },
                //carga peresosa que solo se carga la vista cuando se necesita no por defecto
                {
                    path: '/features',
                    name: 'features',
                    component: () => import('@/modules/landing/pages/FeaturesPage.vue')
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    component: () => import('@/modules/landing/pages/PricingPage.vue')
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/modules/landing/pages/ContactPage.vue')
                },
            ]
        },
        //Auth
        {
            path: '/auth',
            name: 'login',
            component: () => import('@/modules/auth/pages/LoginPage.vue')
        }
       
    ]
})

export default router;