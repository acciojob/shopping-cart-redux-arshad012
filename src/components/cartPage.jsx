import React from "react";
import { useSelector } from 'react-redux';

import styles from './css/Cart.module.css';
import CartItem from "./cartItem";

const CartPage = () => {
    const {cart} = useSelector(state => state.products);

    let totalPrice=0;
    for(let el of cart) {
        totalPrice += el.price;
    }

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

            <div className={styles.cartValue}>
                <h2>The Total Amount of</h2>
                <hr style={{margin: 0}} />

                <div className={styles.flex}>
                    <p>Amount</p>
                    <p>${totalPrice}</p>
                </div>

                <div className={styles.flex}>
                    <p>Checking</p>
                    <p>Free</p>
                </div>
                
                <div className={styles.flex}>
                    <p>Total Amount <br /> including GST</p>
                    <p>{totalPrice && totalPrice + 200}</p>
                </div>
            </div>
        </div>
    )
}

export default CartPage;