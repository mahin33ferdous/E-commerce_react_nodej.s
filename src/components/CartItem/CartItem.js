import React from 'react';
import './CartItem.css'

const CartItem = ({product}) => {
    const{name,price,quantity,img}=product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt=''/>
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price : {price}</small></p>
                    <p><small> Quantity : {quantity}</small></p>

                </div>
            </div>
            <div className='delete-container'>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default CartItem;