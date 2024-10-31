<template>
  <div class="container mx-auto mt-5">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr class="bg-gray-800 text-white">
          <th class="py-2 px-4 border-b">#</th>
          <th class="py-2 px-4 border-b">Proyecto</th>
          <th class="py-2 px-4 border-b">Tareas</th>
          <th class="py-2 px-4 border-b">Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(project, index) in projectsStore.projectList"  :key="project.id" class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
          <td class="py-2 px-4 border-b">{{  project.name }}</td>
          <td class="py-2 px-4 border-b">{{ project.tasks.length }}</td>
          <td class="py-2 px-4 border-b">
            <progress class="progress progress-accent w-56" value="1" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>

    <InputModal 
    :open="openModal" 
    @close="openModal = false"
    @value="projectsStore.addProject"/>

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
import { useProjectsStore } from '../store/proyects.store';

const openModal = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();


</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>