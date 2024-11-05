import type { NavigationGuardNext, RouteLocationNormalizedGeneric, RouteLocationNormalizedLoadedGeneric } from "vue-router";

const isAuthenticatedGuard = (to:RouteLocationNormalizedGeneric, from:RouteLocationNormalizedLoadedGeneric, next:NavigationGuardNext) => {

const userId = localStorage.getItem('userId');
if(!userId)
{
    return next({
        name: 'login'
    });
}

return next();
};

export default isAuthenticatedGuard;

