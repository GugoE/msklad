import axios from 'axios';
const { Axios } = axios;
import { Product } from './product.js';

declare module 'axios' {
    interface Axios {
        getProductById(productId: string):Promise<Product>
    }
}

Axios.prototype.getProductById = function (productId: string):Promise<Product> {
    return moySkladAxios.get<Product>(`/entity/product/${productId}`)
        .then(res => res.data)
}
console.log(process.env.MOYSKLADTOKEN)
export const moySkladAxios = axios.create({
    baseURL:'https://online.moysklad.ru/api/remap/1.2',
    headers: {
        Authorization: `Bearer ${process.env.MOYSKLADTOKEN}`
    }
})

moySkladAxios.interceptors.response.use(response => response, error => {
    throw new Error(error.response.data.errors[0].error);
})

