import type { GiftResponseTs } from '../interfaces/gif.response';


const apikey = 'rd3OkjR6sveLH8ZQN3gVUB9mm8DvRZag';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
.then(resp => resp.json())
.then((body: GiftResponseTs) => {
    console.log(body.data.images.downsized_medium.url)
})
.catch(err => console.info(err))