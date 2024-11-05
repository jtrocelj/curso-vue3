<template>

        <form  @submit.prevent="onLogin" class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo</label>
            <div class="mt-2">
              <input  ref="emailInputRef" v-model="theForm.email" id="email" name="email" type="email" autocomplete="email" required="true" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
            </div>
            <div class="mt-2">
              <input ref="passwordInputRef" v-model="theForm.password" id="password" name="password" type="password" autocomplete="current-password" required="true" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="remember" class="block text-sm font-medium leading-6 text-gray-900">Recordar Usuario</label>
            </div>
            <div class="mt-2">
              <input v-model="theForm.rememberMe" id="remember" name="remember" type="checkbox"   class="block w-full rounded-md border-0 py-1.5" />
            </div>
          </div>
  
          <div>
            <button type="submit" @click="onLogin" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
        Sing up Here
          {{ ' ' }}
          <RouterLink :to="{name: 'register'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Registrase</RouterLink>
        </p>
 
  </template>
  <script lang="ts" setup>
    import { reactive, ref, watchEffect } from 'vue';
    import { useAuthStore } from '../stores/auth.store';
    import { useToast } from 'vue-toastification';
    

    const authStore  = useAuthStore();
    const toast = useToast();
    
    const emailInputRef = ref<HTMLInputElement|null>(null);
    const passwordInputRef = ref<HTMLInputElement|null>(null);
    
    const theForm = reactive({
      email: '',
      password: '',
      rememberMe: false
    });
    
    const onLogin = async() => {

      if(theForm.rememberMe ){
        localStorage.setItem('email', theForm.email);
      }else{
        localStorage.removeItem('email');
      }

      const result = await authStore.login(theForm.email, theForm.password);
      if (result) return;

      toast.error('Usuario o Contraseña no son validos');
    };

    //esto usa el correo y token almacenado en el local storage
    watchEffect (() => {
      const email = localStorage.getItem('email');
      if(email){
        theForm.email = email;
        theForm.rememberMe = true;
      }
    });

  </script>