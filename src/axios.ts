import axios from 'axios';
const { Axios } = axios;
import { Product } from './product.js';

declare module 'axios' {
    interface Axios {
        getProductById(this: typeof Axios, productId: string):Promise<Product>
    }
}

Axios.prototype.getProductById = function (this: typeof Axios, productId: string):Promise<Product> {
    return moySkladAxios.get<Product>(`/entity/product/${productId}`)
        .then(res => res.data)
}

export const moySkladAxios = axios.create({
    baseURL:'https://online.moysklad.ru/api/remap/1.2'
})

