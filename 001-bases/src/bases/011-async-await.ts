// import type { GiftResponseTs } from "../interfaces/gif.response";
// import { giphyApi } from "./10-axios";


// export const getImages = async() => {

//     try {
//         const resp = await giphyApi.get<GiftResponseTs>('/randomasdasda')
    
//         return resp.data.data.images.downsized_large.url;
        
//     } catch (error) {
//         throw 'Url no encontrada';
//     }

// }


// getImages().then(url => console.log({url}))
//             .catch(err => console.log(err))