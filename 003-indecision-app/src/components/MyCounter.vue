<template>
    <section>
    
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCount }}</h3>
    
        <div>
            <button @click="decrementar()">-1</button>
            <button @click="incrementar()">+1</button>
        </div>
    </section>
    </template>
    
    <script lang="ts" setup>
    import { useCounter } from '@/composables/useCounter';

    const {counter, squareCount, decrementar, incrementar} = useCounter();

    // const props = defineProps({
    //     value:Number
    // })
  
    // const incrementar = () => {counter.value++};
    // const decrementar = () => {counter.value--};

    
    </script>
    