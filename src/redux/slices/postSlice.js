import { createSlice } from "@reduxjs/toolkit"
import { fetchPosts, getPostById } from "../services/postService";

const initialState = {
    posts: [],
    loading: false,
    error: null,
    singlePost : {}
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchPosts.pending, (state) => {
            console.log("Pending:::", state)
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPosts.fulfilled, (state, action)=> {
            state.loading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.payload;
        })        
        builder.addCase(getPostById.pending, (state) => {
            console.log("Pending:::", state)
            state.loading = true;
            state.error = null;
        })
        .addCase(getPostById.fulfilled, (state, action)=> {
            state.loading = false;
            state.singlePost = action.payload;
        })
        .addCase(getPostById.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.payload;
        })        
    }    
});

export default postSlice.reducer;