import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    categories : [

    ]
}

const categorySlice = createSlice({
    name : 'categories',
    initialState,
    reducers : {},
    // extraReducers : (builder) => {
    //     builder.addCase(),
    // }
})

export default categorySlice.reducer