import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Async thunk to fetch all posts
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { fulfillWithValue,rejectWithValue }) => {    // _ is option payload instead we can take input from users
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return fulfillWithValue(response.data); // Returns the array of posts
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk to fetch single posts
export const getPostById = createAsyncThunk(
  'posts/getPostById',
  async (id, { fulfillWithValue,rejectWithValue }) => {    // _ is option payload instead we can take input from users
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return fulfillWithValue(response.data); // Returns the array of posts
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);