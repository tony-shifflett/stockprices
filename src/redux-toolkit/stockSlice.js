import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
    name: "stockInfo",
    initialState: {
       stockData: null,
       symbol: "",
       details: null
    },
    reducers: {
        assignStock: (state, action)=>{
            state.stockData = action.payload;
        },
        assignSymbol: (state, action)=>{
            state.symbol = action.payload;
        },
        assignDetails: (state, action)=>{
            state.details = action.payload;
        }
    }
})

//exports here
export const {assignStock, assignSymbol, assignDetails} = stockSlice.actions;
