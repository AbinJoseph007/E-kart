import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :"cart",
    initialState:[],
    reducers:{
        // actions
        // function to add items to cart array
        addToCart:(state , action)=>{
            state.push(action.payload)
        }
    }
})
export const {addToCart} = cartSlice.actions 
export default cartSlice.reducer