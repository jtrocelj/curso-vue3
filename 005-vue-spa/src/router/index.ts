import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/modules/landing/pages/HomePage.vue'
import NotFound404Page from "@/modules/auth/pages/NotFound404Page.vue";
import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
       //Landing
        {
            path:'/',
            name: 'landing',
            component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
            children:[
                {
                    path: '/',
                    name: 'home',
                    beforeEnter: [isAuthenticatedGuard],
                    component: HomePage
                },
                //carga peresosa que solo se carga la vista cuando se necesita no por defecto
                {
                    path: '/features',
                    name: 'features',
                    beforeEnter: [isAuthenticatedGuard],
                    component: () => import('@/modules/landing/pages/FeaturesPage.vue')
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    beforeEnter: [isAuthenticatedGuard],
                    component: () => import('@/modules/landing/pages/PricingPage.vue')
                },
                {
                    path: '/contact',
                    name: 'contact',
                    beforeEnter: [isAuthenticatedGuard],
                    component: () => import('@/modules/landing/pages/ContactPage.vue')
                },
                {
                    path: '/dball/:id',
                    name: 'dball',
                    beforeEnter: [isAuthenticatedGuard],
                    //props: true,
                    props: (route) => {
                        const id = Number(route.params.id);
                        return isNaN(id) ? {id:1} : {id};
                    },
                    component: () => import('@/modules/dragonball/pages/DragonBallPage.vue')
                },

            ]
        },
        //Auth
        {
            path: '/auth',
            redirect: '/login',
            component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
            children:[
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/modules/auth/pages/LoginPage.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('@/modules/auth/pages/RegisterPage.vue')
                }
            ]
        },

        //Not found
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound404Page
        }
        
       
    ]
})

export default router;