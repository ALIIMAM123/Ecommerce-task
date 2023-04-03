import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        cartquantity: 0,
        totalPrice:0
    },
    reducers: {
        addProduct: (state, action) => {
            state.cartquantity += 1;
            state.products.push(action.payload);
            state.totalPrice += action.payload.price;
         }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;