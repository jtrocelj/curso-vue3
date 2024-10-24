import { computed, ref } from "vue";

export const useCounter = () => {
    
    const counter = ref(12); 
    const squareCount = computed(()=>counter.value*counter.value);
    const incrementar = () => {counter.value++};
    const decrementar = () => {counter.value--};
    return{
        counter,
        squareCount,
        incrementar,
        decrementar,        
    }
}