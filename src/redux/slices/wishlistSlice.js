import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[], //since this state have to hold more than one item
    reducers:{
        // actions
        //    funtion to add items to the wishlist array state
        addToWishlist:(state ,action)=>{
            state.push(action.payload)
        },
        // function to remove item from wishlist
        removeFromWishlist : (state , action)=>{
            // /it returns new array with items  satisfying the condition
            return state.filter(item=>item.id!==action.payload)
        }

    }
})

export const {addToWishlist, removeFromWishlist}= wishlistSlice.actions

export default wishlistSlice.reducer