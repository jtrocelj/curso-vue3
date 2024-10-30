<template>

<dialog  class="modal" :open="open2">
  <div class="modal-box">
  <div class="border-b border-b-teal-600">
        <slot name="header"></slot>
  </div>

  <div class="my-5">
        <slot name="body"></slot>
  </div>

    <div class="border-t border-b-teal-600">
        <slot name="footer"></slot>
    </div>
  </div>
</dialog>
</template>

<script lang="ts" setup>

interface Props{
    open2?: boolean;
}

withDefaults(defineProps<Props>(),{
    open2: false,
})
</script>