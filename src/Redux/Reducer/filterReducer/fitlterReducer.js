import { TOGGLE_BRANDS, TOGGLE_STOCK } from "../../actionTypes/actionTypes";

const filterInitialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: "",
};

export const filterReducer = (state = filterInitialState, action) => {
    // console.log(action.payload);
  switch (action.type) {
    case TOGGLE_BRANDS:
      if (!state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filter: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload],
          },
        };
      }
      else{
        return {
            ...state,
            filter:{
                ...state.filters,
                brands:state.filters.brands.filter(brand=>brand !== action.payload)
            }
      }
   
  }
  case TOGGLE_STOCK:
    return{
        ...state,
        filters:{
            ...state.filters,
            stock:!state.filters.stock
        }
    }
  default:
    return state;
 }
}
