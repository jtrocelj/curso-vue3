import isAdminGuard from '@/modules/auth/guards/is-admin.guard';
import type { RouteRecordRaw } from 'vue-router';
import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';

export const adminRoutes: RouteRecordRaw= {
    path: '/admin',
    name: 'admin',
    beforeEnter: [isAuthenticatedGuard, isAdminGuard],
    component: () => import('../layouts/AdminLayout.vue'),
}