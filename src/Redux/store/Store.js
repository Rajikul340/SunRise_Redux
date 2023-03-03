import { createStore } from "redux";
import ProductReducer from "../Reducer/ProuductReducer";

export const store = createStore(ProductReducer)