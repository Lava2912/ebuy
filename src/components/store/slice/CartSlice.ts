import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../../constants/product";

export interface CartItemState extends ProductData {
  quantity: number;
}
export interface CartState {
  items: CartItemState[];
  totalQuantity: number;
  totalPrice: number;
}
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItemState>) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);

      if (exisitingItem) {
        if (exisitingItem.quantity !== undefined)
          exisitingItem.quantity += newItem.quantity;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.quantity * newItem.price;
    },
    removeItemFromCart(state, action: PayloadAction<Number>) {
      const id = action.payload;
      // const exisitingItem = state.items.find((item) => item.id === id);

      // if (exisitingItem) {
      //   state.totalQuantity -= exisitingItem.quantity;
      //   state.totalPrice -= exisitingItem.price * exisitingItem.quantity;
      // } else {
      //   state.items.filter((item) => item.id !== id);
      // }
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});
export const { clearCart, removeItemFromCart, addItemToCart } =
  CartSlice.actions;
export const CartReducer = CartSlice.reducer;
