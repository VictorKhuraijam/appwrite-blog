import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPostsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPostsSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload.posts;
        },
        fetchPostsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
        addPost: (state, action) => {
            state.posts.push(action.payload.post);
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.postId);
        },
    },
});

export const {
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailure,
    addPost,
    deletePost,
} = postSlice.actions;

export default postSlice.reducer;
