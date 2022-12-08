import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types";
import axios from 'axios';


export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export function deleteProduct(id){
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

export function getStoreName(id){
    return function (dispatch){
        axios.get('http://localhost:3001/store')
        .then(r => r.data.name)
        .then(d => dispatch({
            type: GET_STORE_NAME,
            payload: d
        }))
    }
}




