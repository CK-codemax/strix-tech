const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
     wishList : [],
    
}

const wishListSlice = createSlice({
    name : 'wishList',
    initialState,
    reducers : {
        addItem(state, action){
        // payload =    {
        //         url : 'https://www.amazon.com/dp/B0BVL4VRXN?tag=gsmarena093-20&linkCode=osi&th=1&psc=1',
        //         quantity : 1,
               
        //     },

            state.wishList.push(action.payload)
        },

        deleteItem(state, action){
            //payload = url
            state.wishList = state.wishList.filter((item) => item.id !== action.payload)
        },

     

        clearCart(state,){
            state.wishList = []
        },
    }
})


 export const { addItem, deleteItem, clearCart } = wishListSlice.actions;

export default wishListSlice.reducer;