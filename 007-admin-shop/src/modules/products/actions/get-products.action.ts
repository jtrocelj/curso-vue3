import { tesloApi } from "@/api/tesloApi";
import type { Product } from "../interfaces/product.interface";
import { getProductImage } from "./get-product-image.action";

export const getProducts = async(page: number = 1, limit: number = 10) => {
   
        try {
            const {data} = await tesloApi.get<Product[]>(`/products?limit=${limit}&offset=${page * limit}`);
            
            //console.log(data);
            
            return data.map(product =>{
                return{
                    ...product,
                    image: product.images.map(getProductImage)
                }
            });
        
        } catch (error) {
        console.error(error);
        }
   
}