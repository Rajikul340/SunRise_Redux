import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
   cart: [],
};

const ProductReducer = (state = initialState, action) => {
   const selectedProduct = state.cart.find(p=>p._id === action.payload._id)
   console.log('selected products',selectedProduct);
   switch(action.type){
     case ADD_TO_CART :
      const newcart = state.cart.filter (pd =>pd._id !== action.payload._id)
        if(selectedProduct){
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
      return {
         ...state,
         cart:  state.cart.filter((item) =>item._id !== action.payload)
      }
     default:
        return state;

   }
};

export default ProductReducer;
