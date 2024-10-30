<template>
     <button @click="$emit('click')" class="btn btn-circle btn-primary" style="border: none; padding: 10px;">
 
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Row"> <path id="Vector" d="M3 14V15C3 16.1046 3.89543 17 5 17L19 17C20.1046 17 21 16.1046 21 15L21 13C21 11.8954 20.1046 11 19 11H13M10 8H7M7 8H4M7 8V5M7 8V11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>

    </button>

</template>

<script lang="ts" setup>

interface Props{
    position?: 'top-left'|'bottom-left'|'top-right'|'bottom-right',
    icon?: string;
}

withDefaults(defineProps<Props>(),{
    position: 'bottom-right'
});

defineEmits(['click']);
</script>

<style scoped>
.btn-circle {
  border-radius: 20%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
 
  color: #fcfcfc;
  position: fixed;
  bottom: 20px;
  right: 20px;
  left:100px;
  z-index: 1000;
}
</style>