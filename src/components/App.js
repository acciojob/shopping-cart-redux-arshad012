
import React from "react";
import './../styles/App.css';
import { Provider } from 'react-redux';
import { store } from "../redux/store";

import ProductsPage from "./productsPage";
import CartPage from "./cartPage";
import WishListPage from "./wishListPage";

const App = () => {
  return (
    <Provider store={store}>
        <ProductsPage />
        <hr />
        <CartPage />
        <hr />
        <WishListPage />
    </Provider>
  )
}

export default App;