<template>
<div class="flex justify-center space-x-4 py-6 bg-gray-200">

    <button :disabled="page === 1" @click="$router.push({query:{page:page - 1}})"  
    class="flex items-center px-4 py-2 space-x-1.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition duration-300">
       <span>Anterior</span>
    </button>

    <button :disabled="hasMoreData" @click="$router.push({query:{page:page + 1}})" 
    class="flex items-center px-4 py-2 space-x-1.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition duration-300">
       <span>Siguiente</span>
    </button>
</div>


</template>

<script lang="ts" setup>

interface Props {
   page:number ;
   hasMoreData:boolean;
}

defineProps<Props>();
</script>