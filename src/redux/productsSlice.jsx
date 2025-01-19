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
        addToWishlist: (state, action) => {
            const newWishListItem = state.products.find(item => item.id == action.payload);
            state.wishList = [...state.wishList, newWishListItem];
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

export const {addToCart, addToWishlist} = productsSlice.actions;
export default productsSlice.reducer;