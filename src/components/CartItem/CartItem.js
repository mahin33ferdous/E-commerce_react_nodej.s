import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItem.css'

const CartItem = ({product,handleDeleteCart}) => {
    const{id,name,price,quantity,img,shipping}=product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt=''/>
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price : {price}</small></p>
                    <p><small>Shipping : {shipping}</small></p>
                    <p><small> Quantity : {quantity}</small></p>

                </div>
            </div>
            <div className='delete-container'>
                <button onClick={()=>handleDeleteCart(id)} className='btn-delete'><FontAwesomeIcon className='d-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default CartItem;