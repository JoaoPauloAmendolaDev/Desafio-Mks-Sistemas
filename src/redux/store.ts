import { configureStore } from "@reduxjs/toolkit"
import { productsApi } from "./reducers/products"
import cartReducer from "./reducers/cartSlice"
import isOpenReducer from "./reducers/isOpenLateralBox"


const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        isOpenSlice: isOpenReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
})

export {store}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

