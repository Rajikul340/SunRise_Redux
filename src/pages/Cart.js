import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Cart = () => {

  const cart = useSelector((state)=>state.cart);
  const {pathname}  = useLocation();
  console.log(pathname);



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-4 mx-auto my-10">
   {
    cart.map(product =><ProductCard product={product}/>)
   }
  </div>
  );
};

export default Cart;