import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import styles from './css/Products.module.css';

const WishListPage = () => {
    const { wishList } = useSelector(state => state.products);
    console.log('wishList:', wishList);

    return (
        <div>
            <h1>Wish List</h1>
            <div className={styles.wishListItems_container}>
                {
                    wishList.map((prd) => (
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

export default WishListPage;