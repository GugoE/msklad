import { moySkladAxios } from './axios.js';

moySkladAxios.getProductById('1')
.then(data => {
    console.log(data);
})