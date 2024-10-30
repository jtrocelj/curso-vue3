<template>
  <div class="container mx-auto mt-5">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr class="bg-gray-800 text-white">
          <th class="py-2 px-4 border-b">Proyecto</th>
          <th class="py-2 px-4 border-b">Tareas</th>
          <th class="py-2 px-4 border-b">Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td class="py-2 px-4 border-b">Malcolm Lockyer</td>
          <td class="py-2 px-4 border-b">1961</td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">Witchy Woman</td>
          <td class="py-2 px-4 border-b">The Eagles</td>
          <td class="py-2 px-4 border-b">1972</td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">Shining Star</td>
          <td class="py-2 px-4 border-b">Earth, Wind, and Fire</td>
          <td class="py-2 px-4 border-b">1975</td>
        </tr>
      </tbody>
    </table>

    <InputModal 
    :open="openModal" 
    @close="openModal = false"
    @value="onNewValue"/>

    <CustomModal :open="customModalOpen">
      <template #header>
        <h6>Custom Modal</h6>
      </template>

      <template #body>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequatur amet quia eaque possimus dicta nam obcaecati animi commodi velit ea, expedita, ullam a quisquam. Ex, earum magni. Quia, tempore?</p>
      </template>

      <template #footer>
        <div class="flex justify-end">
          <button @click="customModalOpen = false">Close</button>
        </div>
      </template>
  
    </CustomModal>

    <AddButton @click="openModal = true"/>
    
    <AddButton2 @click="customModalOpen = true"/>
  </div>
</template>

<script setup lang="ts">

import AddButton from '@/modules/common/components/AddButton.vue';
import AddButton2 from '@/modules/common/components/AddButton2.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import { ref } from 'vue';

const openModal = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) =>{
console.log({projectName});
}


</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>