import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/cart-slice";
import ProductSlice from "./Slices/product-slice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
  },
});
