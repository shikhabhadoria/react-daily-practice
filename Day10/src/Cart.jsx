import React, { useContext } from 'react';
import { ProductContext } from './App.jsx';

function Cart() {
    const { cartItem } = useContext(ProductContext);
    return (
        <h1>Total item in cart: {cartItem}</h1>
    );
}
export default Cart;