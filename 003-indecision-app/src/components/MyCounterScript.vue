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
    
    <script lang="ts" >
    import { computed, defineComponent, ref } from 'vue';

    export default defineComponent({
        props: {
            value: {type: Number, required: true}
        },
        setup(props) {
            const counter = ref(props.value);
            const squareCount = computed(()=>counter.value*counter.value);
            const incrementar = () => {counter.value++};
            const decrementar = () => {counter.value--};
    
        
        return{
            counter,
            squareCount,
            incrementar,
            decrementar
        }
        
        },
    }) ;

    </script>
    