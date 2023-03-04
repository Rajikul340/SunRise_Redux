import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import ProductReducer from "../Reducer/ProuductReducer";

export const store = createStore(ProductReducer, composeWithDevTools())