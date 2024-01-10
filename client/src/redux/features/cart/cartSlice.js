import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [],
    amount : 0,
    totalAmount : 0,
    totalPrice: 0
}

// card slice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {
          const productId = action.payload;
               try{
                const exist = state.card.find((product) => product.id === productId.id )
                if(exist){
                    exist.amount++;
                    exist.totalPrice += productId.price;
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }else {
                    state.carts.push({
                        id:productId.id,
                        price : productId.price,
                        amount : 1,
                        totalPrice : productId.price,
                    });
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }}catch(err){
                    return err;
                }
        },


        // remove perticular iteams
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
        },

        // remove single iteams
        removeSingleIteams:(state,action)=>{
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if(state.carts[IteamIndex_dec].qnty >=1){
                state.carts[IteamIndex_dec].qnty -= 1
            }

        },

        // clear cart
        emptycartIteam:(state,action)=>{
            state.carts = []
        }
    }
});

export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam} = cartSlice.actions;

export default cartSlice.reducer;


