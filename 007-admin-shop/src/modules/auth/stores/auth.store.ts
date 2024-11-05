import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '../interfaces/user.interfaces'
import { AuthStatus } from '../interfaces';
import { checkAuthAction, loginAction } from '../actions';
import { registerAction } from '../actions/register.action';
import { useLocalStorage } from '@vueuse/core';
export const useAuthStore = defineStore('auth', () => {
 

    const authStatus = ref(AuthStatus.Checking);
    const user = ref<User|undefined>();
    const token = ref(useLocalStorage('token',''));

    const login = async(email:string, password:string) => {
        try{
            const loginResp = await loginAction(email, password);
            if(!loginResp.ok){
                logout();
                return false;
            }
            user.value = loginResp.user;
            token.value = loginResp.token;
            authStatus.value = AuthStatus.Authenticated;
            return true;

        }catch(error){
            console.error(error);
            return logout();
        }
    };

    const register = async( fullName:string, email:string, password:string) => {
        try{
            const registerResp = await registerAction(fullName, email, password);
            if(!registerResp.ok){
                logout();
                return {ok:false, message:registerResp.message};
            }

            user.value = registerResp.user;
            token.value = registerResp.token ?? '';
            authStatus.value = AuthStatus.Authenticated;
            return {ok:true, message:registerResp.message};
            

        }catch(error){
            console.error(error);
            return {ok:false, message:'Error al registrar al Usuario'};
        }
    }

    const checkAuthStatus = async(): Promise<boolean> => {
        try{
            const statusResp = await checkAuthAction();
            if(!statusResp.ok){
                logout();
                return false;
            }

            user.value = statusResp.user;
            token.value = statusResp.token;
            authStatus.value = AuthStatus.Authenticated;
            return true;
             
        }catch(error){
            console.error(error);
            logout();
            return false;
            
        }
    };
    const logout = () => {
        authStatus.value = AuthStatus.Unauthenticated;
        user.value = undefined;
        token.value = '';
    };

  return { 
    user,
    token,
    authStatus,

    //Getters
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),
    username: computed(() => user.value ? user.value.fullName : ''),

    login,
    register,
    checkAuthStatus,
  }
})
