import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';

const Orders = () => {
    const {products,initialCart} =useLoaderData();
    const [cart,setCart]=useState(initialCart)

    const handleDeleteCart=(id)=>{
        const remaining=cart.filter(product=>product.id!==id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div>
          <div className='shop-container'>
            <div className='orders-container'>
               {
                cart.map(product=> <CartItem
                key={product.id}
                product={product}
                handleDeleteCart={handleDeleteCart}
                ></CartItem>)
               }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
          </div>
        </div>
    );
};

export default Orders;