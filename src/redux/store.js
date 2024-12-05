import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counterSlice'
import postSlice from './slices/postSlice'
const store = configureStore({
    reducer: {
        counter: counterSlice,
        post: postSlice
    }
})

export default store;
