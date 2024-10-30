<template>

<dialog class="modal" :open="open" ref="modalRef">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Nuevo Proyecto</h3>
    <p class="py-4">Asigna un unico nombre al proyecto</p>

    <div class="modal-action flex flex-col">
      <form method="dialog" @submit.prevent="submitValue">
        <input 
        ref="inputRef"
        type="text" 
        placeholder="Ingrese el nombre del proyecto" 
        class="input input-bordered input-primary w-full flex-1" 
        v-model="inputValue"
        >

        <div class="flex justify-end mt-5">
          <button @click="$emit('close')" class="btn mr-4" type="button">Close</button>
          <button class="btn btn-primary" type="submit">Aceptar</button>
        </div>
      
      </form>
    </div>
  </div>
</dialog>

<div v-if="open" class="modal-backdrop fixec top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen">

</div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';


interface Props {
  open: boolean;
}

defineProps<Props>();

const emits = defineEmits<{
  close:[void];
  value:[text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);
const modalRef = ref<HTMLDialogElement | null>(null);

const submitValue = ( )=>{
  console.log({value: inputValue.value});

  if(!inputValue.value){
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  

  inputValue.value = '';

}

</script>