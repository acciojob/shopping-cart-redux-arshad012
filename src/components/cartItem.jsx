import React, {useState} from "react";
import styles from './css/Cart.module.css';
import { useDispatch } from 'react-redux';

import { addToWishlist } from "../redux/productsSlice";

const CartItem = ({item}) => {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    return (
        <div key={item.id} className={styles.cartItem_card}>
            <div className={styles.cartItem}>
                <div className={styles.image_div}>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.details}>
                    <p>Title: {item.title}</p>
                    <p>Price: ${item.price}</p>
                    <p>Category: {item.category}</p>

                    <button>Remove from Cart</button>
                    <button onClick={() => dispatch(addToWishlist(item.id))}>Add to Wish list</button>
                </div>
            </div>

            <div className={styles.cartButtons}>
                <button disabled={quantity <= 0} onClick={() => setQuantity(prev => prev - 1)}>-</button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
        </div>
    )
}

export default CartItem;