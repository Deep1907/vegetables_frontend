import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name : "carts",
    initialState : {
        items:[]
    },
    reducers:{
        addItem : (state,action) =>{
            const exists = state.items.find((item)=>item._id === action.payload._id)
            if(!exists){
                state.items.push({...action.payload, qty:1})
            }
        },

        incQty : (state,action) =>{
            const item = state.items.find((item)=>item._id === action.payload._id)
            if(item){
                item.qty += 1
            }
        },

        decQty : (state,action) =>{
            const item = state.items.find((item)=>item._id === action.payload._id)
            if(item){
                if(item.qty <= 0){
                    item.qty = 1;
                }else{
                    item.qty -= 1
                }
            }
        },
        clearCart : (state) =>{
            state.items = []
        }

    }
})

export const {addItem,incQty,decQty,clearCart} = productSlice.actions;

export default productSlice.reducer;