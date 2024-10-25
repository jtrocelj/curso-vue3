<template>

<div  ref="ChatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flemessage -col space-y-2">
            <!-- Messages go here -->
            <!-- Example Message -->
            <!-- <ChatBubble  v-for="m in messages" :key="m.id" :its-mine="m.itsMine" :message="m.message" :image="m.image" /> -->
            <ChatBubble  v-for="m in messages" :key="m.id" v-bind="m" />

          
        </div>
    </div>
</template>
<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-messages-interfaces';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
    messages: ChatMessage[];
}
const {messages} = defineProps<Props>();

const chatRef = ref<HTMLDivElement|null>(null);


watch(() => messages, () => {
    setTimeout(() =>{
    chatRef.value?.scrollTo({ top: chatRef.value.scrollHeight, behavior: 'smooth' });
    }, 100);
});

</script>