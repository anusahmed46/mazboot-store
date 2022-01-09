import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <Link to='/cart' className='btn btn-dark'>
                <span className='fa fa-shopping-cart'></span>cart(0)
            </Link>
        </div>
    )
}

export default Cart
