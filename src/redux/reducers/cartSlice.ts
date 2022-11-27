import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type CartStateValue = {
    cartItems: ProductType[];
}

type CartState = {
    value: CartStateValue;
}

const initialState = {
    value: {
        cartItems: []
    },
} as CartState

export type ProductType = {
        id: number,
        name: string,
        brand: string,
        description: string,
        photo: string,
        price: number,
        quantity?: number
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductType>) => {

            const existingCartItem = state.value.cartItems.find((cartItem: ProductType) => {
                return cartItem.id == action.payload.id
            })

            if(existingCartItem){
                state.value.cartItems = state.value.cartItems.map((cartItem: ProductType) =>
                    cartItem.id === action.payload.id ?
                        // @ts-ignore
                        {...cartItem, quantity: cartItem.quantity + 1}
                        :
                        cartItem
                )
                return
            }
            state.value.cartItems =  [...state.value.cartItems, {...action.payload, quantity: 1}]
        },
        removeFromCart: (state, action) => {
            const existingCartItem = state.value.cartItems.find((cartItem: ProductType) => {
                return cartItem.id === action.payload.id
            })

            // @ts-ignore
            if(existingCartItem.quantity === 1){
                state.value.cartItems = state.value.cartItems.filter(item => item.id !== action.payload.id)
                return
            }

            state.value.cartItems = state.value.cartItems.map((cartItem: ProductType) =>
                cartItem.id === action.payload.id ?
                    // @ts-ignore
                    {...cartItem, quantity: cartItem.quantity - 1}
                    :
                    cartItem
            )
        },
    },
})

export const { addProduct, removeFromCart } = cartSlice.actions
export {cartSlice}
export default cartSlice.reducer