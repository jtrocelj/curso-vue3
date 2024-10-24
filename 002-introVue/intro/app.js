const { createApp, ref} = Vue;

const app = createApp({
    // template : `
    // <h1>hola {{message}}</h1>
    // <span>{{autor}}</span>`,

    setup(){
        const message = ref('I AM IRON MAN !');
        const autor = ref('IRON MAN !');
    
    setTimeout(() => {
        message.value = 'soy thor';
        autor.value = 'THE TONY STARK';
    },1000);

    return { message, autor};
    }
});

app.mount('#myApp');