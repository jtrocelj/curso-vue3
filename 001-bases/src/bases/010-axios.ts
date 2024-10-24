import axios from "axios";
import { GiftResponseTs } from "../interfaces/gif.response";

const apikey = 'rd3OkjR6sveLH8ZQN3gVUB9mm8DvRZag';


export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey,
    }
});

giphyApi.get<GiftResponseTs>('/random')
.then(resp => console.log(resp.data.data.images.downsized_large.url))
.catch(err => console.log(err));