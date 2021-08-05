import { configureStore } from "@reduxjs/toolkit";
import { stockSlice} from "./stockSlice";


export default configureStore({
    reducer: {
        stockInfo: stockSlice.reducer,
    },
});