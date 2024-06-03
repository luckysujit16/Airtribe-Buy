// In your cartSlice.js or equivalent Redux slice file
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
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
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex !== -1) {
        const product = state.cart[productIndex];
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToWishlist: (state, action) => {
      const existingProduct = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      
      if (!existingProduct) {
        state.wishlist.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
         }
      // alert("Reached Executed IF addToWishList")
    },
  }
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;
