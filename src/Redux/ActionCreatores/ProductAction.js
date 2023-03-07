import { ADD_TO_CART, LOAD_PRODUCT, REMOVE_FROM_CART, REMOVE_PRODUCT, SEARCH_PRODUCT } from "../actionTypes/actionTypes"

export  const AddToCart = (product) =>{
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const RemoveCart = (productId) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: productId
    }
}

export const loadProduct = (products) =>{
return {
    type: LOAD_PRODUCT,
    payload: products
}
}
export const addProductData = (products) =>{
return {
    type: LOAD_PRODUCT,
    payload: products
}
}
export const removeProduct = (id) =>{
return {
    type: REMOVE_PRODUCT,
    payload: id
}
}

export const searchProduct = (querydata) =>{

    return {
        type: SEARCH_PRODUCT,
        payload: querydata
    }
}