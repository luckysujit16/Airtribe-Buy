// In your cartSlice.js or equivalent Redux slice file
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
      // alert("Item Increased");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
      // alert("Item Dcreaseased");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
