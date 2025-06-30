import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const exist = state.find((i) => i.id === action.payload.id)
            if (!exist) {
                state.push({ ...action.payload, qty: 1 })
            } else {
                exist.qty += 1
            }
        },

        removerProduct: (state, action) => {
            const index = action.payload.id
            toast.error(`${action.payload.name} is removed`)
            return state.filter((item) => item.id !== index)
        },

        addProductCount: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id);
            if (item) {
                item.qty += 1;
            }
        },

        reduceProductCount: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id);
            if (item && item.qty > 1) {
                item.qty-=1
            }else if(item && item.qty === 1){
                toast.error(`${item.name} removed`)
                return state.filter((item) => item.id !== action.payload.id)
            }
        },
    }
})

export const { addToCart, removerProduct, addProductCount, reduceProductCount} = cartSlice.actions
export default cartSlice.reducer