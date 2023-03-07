import { ADD_PRODUCT, ADD_TO_CART, LOAD_PRODUCT, REMOVE_FROM_CART, REMOVE_PRODUCT, SEARCH_PRODUCT } from "../../actionTypes/actionTypes";

const initialState = {
   cart: [],
   search:''
};

const ProductReducer = (state = initialState, action) => {
   const selectedProduct = state.cart.find(p=>p._id === action.payload._id)
  
// console.log('aciton', action.payload);
   switch(action.type){
      case LOAD_PRODUCT:
         return {
            ...state,
            products:action.payload
         }
      case SEARCH_PRODUCT:
         return {
            ...state,
            search: action.payload
         }

         case ADD_PRODUCT:
            return {
               ...state,
               products: [...state.products, action.payload]
            }
         case REMOVE_PRODUCT:
            return {
               ...state,
               products: state.products.filter(p=>p._id !== action.payload)
            }

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
