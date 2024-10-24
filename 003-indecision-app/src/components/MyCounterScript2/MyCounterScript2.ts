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