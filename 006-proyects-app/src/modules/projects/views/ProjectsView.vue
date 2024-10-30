<template>
  <div class="container mx-auto mt-5">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr class="bg-gray-800 text-white">
          <th class="py-2 px-4 border-b">Song</th>
          <th class="py-2 px-4 border-b">Artist</th>
          <th class="py-2 px-4 border-b">Year</th>
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
    <InputModal  :open="openModal"/>
    <AddButton @click="openModal = true"/>
  </div>
</template>

<script setup lang="ts">

import AddButton from '@/modules/common/components/AddButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';

const openModal = ref(false);
</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>