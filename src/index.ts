import { moySkladAxios } from './axios.js';

moySkladAxios.getProductById('f086344a-88c5-11ec-0a80-00d7000af730')
    .then(data => {
        console.log(data.name);
    })

moySkladAxios.addProduct({
    name: 'Erevan'
})

moySkladAxios.updateProduct('6dac2557-88f6-11ec-0a80-02120014e8c3', {name: 'Дим'})


moySkladAxios.getProductsList('')
    .then(products => {
        console.log(products)
    })

moySkladAxios.removeProduct('053e8a0a-88f3-11ec-0a80-0fc4001460b6')
    .then(products => {
        console.log(products.data)
    })