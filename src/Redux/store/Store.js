import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { cartCounter } from "../middleware/cartCounter";
import { rootReducer } from "../Reducer/RootReducer/rootReducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter))
);
