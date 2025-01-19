import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import regeneratorRuntime from 'regenerator-Runtime';

export const fetchProducts = createAsyncThunk('fetch/fetchProducts',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        return res.json();
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        cart: [],
        wishList: [],
        status: 'idle',
        error: false
    },
    reducers: {
        addToCart: (state, action) => {
            const newCartItem = state.products.find(item => item.id == action.payload);
            state.cart = [...state.cart, newCartItem];
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id != action.payload);
        },
        addToWishlist: (state, action) => {
            const newWishListItem = state.products.find(item => item.id == action.payload);
            state.wishList = [...state.wishList, newWishListItem];

            state.cart = state.cart.filter(item => item.id != newWishListItem.id);
        },
        removeFromWishList: (state, action) => {
            state.wishList = state.wishList.filter(item => item.id != action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'pending';
                state.error = false;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
                state.error = true;
            })
    }
})

export const {addToCart, removeFromCart, addToWishlist, removeFromWishList} = productsSlice.actions;
export default productsSlice.reducer;