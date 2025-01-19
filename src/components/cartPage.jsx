import React from "react";
import { useSelector } from 'react-redux';

import styles from './css/Cart.module.css';
import CartItem from "./cartItem";

const CartPage = () => {
    const {cart} = useSelector(state => state.products);

    console.log('cart', cart);

    return (
        <div className={styles.cartPage}>
            <div className={styles.cart_section}>
                <h1>Cart: {cart.length} Items</h1>
                <div className={styles.cartItemsContainer}>
                    {
                        cart.map((prd) => <CartItem key={prd.id} item={prd} />)
                    }
                </div>
            </div>

            <div className={styles.cartValue}></div>
        </div>
    )
}

export default CartPage;