import axios from 'axios';
const { Axios } = axios;
import { Product } from './product.js';

declare module 'axios' {
    interface Axios {
        getProductById(productId: string):Promise<Product>
        getProductsList(search: string):Promise<Product[]>
        addProduct(payload: Partial<Product>&{name: string}):Promise<Product>
        removeProduct(id: string):Promise<any>
        updateProduct(productId: string, payload: Partial<Product>):Promise<Product>
    }
}

Axios.prototype.getProductById = function (productId: string):Promise<Product> {
    return moySkladAxios.get<Product>(`/entity/product/${productId}`)
        .then(res => res.data)
}

Axios.prototype.addProduct = function (payload: Partial<Product>&{name: string}):Promise<Product> {
    return moySkladAxios.post<Product>(`/entity/product`, payload)
        .then(res => res.data)
}

// Тут пока поиск не сделал только выдает все. Но с утра пока ты будешь в офисе я сделаю, ок?
Axios.prototype.getProductsList = function (search: string):Promise<Product[]> {
    return moySkladAxios.get<Product[]>(`/entity/product`, {data: search})
        .then(res => res.data)
}

Axios.prototype.updateProduct = function (productId: string, payload:Partial<Product>):Promise<Product> {
    return moySkladAxios.put<Product>(`/entity/product/${productId}`, payload)
        .then(res => res.data)
}

//Тут как бы я не промучился не получилось сделать так чтобы было через void сделал пока с any после обсудим
Axios.prototype.removeProduct = function (id: any):Promise<any> {
    return moySkladAxios.delete<any>(`/entity/product/${id}`)
        .then(res => res)
}

export const moySkladAxios = axios.create({
    baseURL:'https://online.moysklad.ru/api/remap/1.2',
    headers: {
        Authorization: `Bearer ${process.env.MOYSKLADTOKEN}`
    }
})

moySkladAxios.interceptors.response.use(response => response, error => {
    throw new Error(error.response.data.errors[0].error);
})

