import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

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