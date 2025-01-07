import { configureStore } from "@reduxjs/toolkit"
import { cartSlicer } from "./cardSlice"



export const store = configureStore({
    reducer: {
        cart : cartSlicer.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch