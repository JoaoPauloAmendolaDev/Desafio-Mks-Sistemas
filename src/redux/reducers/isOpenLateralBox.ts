import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type isOpenStateValue = {
    isOpen: IsOpen;
}

type isOpenState = {
    value: isOpenStateValue;
}

const initialState = {
    value: {
        isOpen: false
    },
} as isOpenState

export type IsOpen = boolean

const isOpenSlice = createSlice({
    name: 'OpenLateralBox',
    initialState,
    reducers: { setTrue: (state, action: any) =>{
        state.value.isOpen = true
    },
    setFalse: (state, action: any)=> {
        state.value.isOpen = false
    }

}})

export const { setTrue, setFalse } = isOpenSlice.actions
export {isOpenSlice}
export default isOpenSlice.reducer