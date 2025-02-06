import { configureStore } from "@reduxjs/toolkit";
import { ShoppingApi } from "./shoppingQuery/ShoppingQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CartReducer } from "./slice/CartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "cart",
  storage,
};
const persistedCartReducer = persistReducer(persistConfig, CartReducer);
export const store = configureStore({
  reducer: {
    [ShoppingApi.reducerPath]: ShoppingApi.reducer,
    Cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ShoppingApi.middleware);
  },
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
