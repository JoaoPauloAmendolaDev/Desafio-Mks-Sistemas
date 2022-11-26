import { configureStore } from "@reduxjs/toolkit"
import { productsApi } from "./Reducers/Products"



const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
})

export {store}
