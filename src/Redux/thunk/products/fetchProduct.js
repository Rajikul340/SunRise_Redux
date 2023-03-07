import { loadProduct } from "../../ActionCreatores/ProductAction";

const fetchProduct = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/product");
    const data = await res.json();
    dispatch(loadProduct(data));
  };
};

export default fetchProduct;
