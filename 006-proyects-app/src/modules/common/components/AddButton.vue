<template>
     <button @click="$emit('click')" class="btn btn-circle btn-primary" style="border: none; padding: 10px;">
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#154c4b">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.29 22 4.93 22 3.46 20.54C2 19.07 2 16.71 2 12C2 7.29 2 4.93 3.46 3.46C4.93 2 7.29 2 12 2C16.71 2 19.07 2 20.54 3.46C22 4.93 22 7.29 22 12C22 16.71 22 19.07 20.54 20.54C19.07 22 16.71 22 12 22ZM12 8.25C12.41 8.25 12.75 8.59 12.75 9V11.25H15C15.41 11.25 15.75 11.59 15.75 12C15.75 12.41 15.41 12.75 15 12.75H12.75V15C12.75 15.41 12.41 15.75 12 15.75C11.59 15.75 11.25 15.41 11.25 15V12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H11.25V9C11.25 8.59 11.59 8.25 12 8.25Z" fill="#fcfcfc"></path>
      </svg>
      
    </button>

</template>

<script lang="ts" setup>

interface Props{
    position?: 'top-left'|'bottom-left'|'top-right'|'bottom-right'
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
  z-index: 1000;
}
</style>