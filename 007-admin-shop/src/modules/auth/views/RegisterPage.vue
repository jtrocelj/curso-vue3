<template>
  <form class="space-y-6" @submit.prevent="onRegister">
    <h1>Registrar nueva cuenta</h1>
    
    <div>
      <label for="nombre" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
      <div class="mt-2">
        <input  ref="fullNameInputRef" v-model="theForm.fullName" id="nombre" name="nombre" type="text" autocomplete="nombre" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo</label>
      <div class="mt-2">
        <input ref="emailInputRef" v-model="theForm.email" id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
      </div>
      <div class="mt-2">
        <input ref="passwordInputRef" v-model="theForm.password" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div>
      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrar</button>
    </div>

  </form>
  <p class="mt-10 text-center text-sm text-gray-500">
    <RouterLink :to="{name: 'login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</RouterLink>
  </p>
</template>

<!-- <script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';


const authStore  = useAuthStore();
const fullName = ref('');
const email = ref('');
const password = ref('');
const message = ref(''); // Ref para almacenar el mensaje
const isSuccessful = ref(false); // Ref para manejar el estado del éxito

const handleSubmit = async () => {
  const result = await authStore.register(fullName.value, email.value, password.value);
  
  if (result.ok) {
    message.value = 'Usuario registrado correctamente'; 
    isSuccessful.value = true; 

  } else {
    message.value = result.message ?? 'Error desconocido'; 
    isSuccessful.value = false; 
  }
};
</script> -->

<script setup lang="ts">
 import { reactive, ref} from 'vue';
    import { useAuthStore } from '../stores/auth.store';
    import { useToast } from 'vue-toastification';


    const authStore  = useAuthStore();
    const toast = useToast();

    const fullNameInputRef = ref<HTMLInputElement|null>(null);
    const emailInputRef = ref<HTMLInputElement|null>(null);
    const passwordInputRef = ref<HTMLInputElement|null>(null);

    const theForm = reactive({
      fullName: '',
      email: '',
      password: '',
    });

    console.log(theForm);
    const onRegister= async() => {

      const {ok, message} = await authStore.register(theForm.fullName,theForm.email, theForm.password);
      
      if (ok) {
          toast.success('Usuario registrado exitosamente');
      }else{
          toast.error(message);
      }

    };
</script>

