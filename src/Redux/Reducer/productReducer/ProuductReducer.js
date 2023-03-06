import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actionTypes/actionTypes";

const initialState = {
   cart: [],
};

const ProductReducer = (state = initialState, action) => {
   const selectedProduct = state.cart.find(p=>p._id === action.payload._id)
   // console.log('selected products',selectedProduct);
   console.log('aciton', action);
   switch(action.type){
     case ADD_TO_CART :
        if(selectedProduct){
           const newcart = state.cart.filter (pd =>pd._id !== selectedProduct._id)
         selectedProduct.quantity = selectedProduct.quantity + 1;
         return {
            ...state,
            cart: [...newcart, selectedProduct]
         } ;
        }
     return{
         ...state,
         cart : [...state.cart, {...action.payload, quantity:1}]
     }
     case REMOVE_FROM_CART :
      if(selectedProduct.quantity > 1 ){
         const newcart = state.cart.filter (pd =>pd._id !== selectedProduct._id)
       selectedProduct.quantity = selectedProduct.quantity - 1;
       return {
          ...state,
          cart: [...newcart, selectedProduct]
       } ;
      }
      return {
         ...state,
         cart:  state.cart.filter((item) =>item._id !== action.payload._id)
      }
   
     default:
        return state;

   }
};

export default ProductReducer;
