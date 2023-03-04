import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AddToCart, RemoveCart } from "../Redux/ActionCreatores/ProductAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
      key={product._id}
    >
     <div className="">
     { pathname.includes("/") && pathname.includes("/cart") && (
        <p> quantity: {product.quantity}</p>
      )}
     </div>
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2"></ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("/") && !pathname.includes("/cart") && (
          <button
            onClick={() => dispatch(AddToCart(product))}
            className="bg-indigo-500 rounded-full  flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}
        {pathname.includes("/cart") && (
          <button
            onClick={() => dispatch(RemoveCart(product))}
            className="bg-indigo-500 rounded-full flex-1 text-white text-bold"
          >
            Remove
          </button>
        )}
        {pathname.includes("/") && !pathname.includes("/cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
