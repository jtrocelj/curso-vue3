const quotes = [
    {author: 'John Doe', quote: 'The future belongs to those who believe in the beauty of their dreams.'},
    {author: 'Jane Smith', quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.'},
    {author: 'Mark Twain', quote: 'It is not the length of time, nor the number of times that counts, but the count of the moments that you take.'},
    {author: 'Steve Jobs', quote: 'I have a dream: to make people more aware of the importance of their own lives.'},
    {author: 'Lisa Gherardini', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'}

];

const { createApp, ref} = Vue;

const app = createApp({

    setup() {
        const showAutor = ref(true);
        const changeShowAutor = () => {
            console.log('si llega');
            showAutor.value = !showAutor.value;
        };
        
        return {
            quotes,
            showAutor,
            changeShowAutor
        }
    }

});

app.mount('#myApp');