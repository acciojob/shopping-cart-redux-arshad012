import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../redux/productsSlice";

import styles from './css/Products.module.css';
import {addToCart, addToWishlist} from '../redux/productsSlice';

const ProductsPage = () => {
    const {products, status, error} = useSelector(state => state.products);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(
    //         fetchProducts()
    //     )
    // },[]);

    const handleAddToCart = (id) => {
        dispatch(
            addToCart(id)
        )
    }

    return (
        <div>
            <h1>Products</h1>
            <div className={styles.products_container}>
                {
                    products.map((prd) => (
                        <div key={prd.id} className={styles.products_card}>
                            <div>
                                <img src={prd.image} alt={prd.title} width='100%' />
                                <p>Title: {prd.title}</p>
                                <p>Price: ${prd.price}</p>
                                <p>Category: {prd.category}</p>
                            </div>
                            <button className={styles.addToCartBtn} onClick={() => handleAddToCart(prd.id)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsPage;