import { combineReducers } from "redux";
import { filterReducer } from "../filterReducer/fitlterReducer";
import ProductReducer from "../productReducer/ProuductReducer";

export const rootReducer = combineReducers({
    product: ProductReducer,
    filter:filterReducer
})