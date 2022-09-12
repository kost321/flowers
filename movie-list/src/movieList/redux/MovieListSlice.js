import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { COUNT_OF_ITEMS_ON_PAGE } from "../../constants";
import {
  getPostsFromServer,
  getPostFromServerById,
  deletePostsFromServer,
  editPostFromServer,
  addPostFromServer,
} from "./GetMovieListAPI";

const initialState = {
  posts: [],
  loading: true,
  currentFilter: "",
  currentMovie: "",
  totalCount: 0,
  numberOfPage: 1,
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (offset) => {
    const limit = COUNT_OF_ITEMS_ON_PAGE;
    const response = await getPostsFromServer({limit, offset});
    return response;
  }
);

export const movieFilter = createAsyncThunk(
  "posts/movieFilter",
  async (filter, { dispatch }) => {
    const limit = COUNT_OF_ITEMS_ON_PAGE;
    const posts = await getPostsFromServer({filter,limit});
    dispatch(setCurrentFilter(filter));
    return posts;
  }
);

export const movieSort = createAsyncThunk(
  "posts/movieSort",
  async (sortOrder, { getState }) => {
    const limit = COUNT_OF_ITEMS_ON_PAGE;
    const currentState = getState();
    const filter = currentState.movie.currentFilter;
    const sortMovie = await getPostsFromServer({sortOrder, limit, filter});
    return sortMovie;
  }
);

export const movieSearch = createAsyncThunk(
  "posts/movieSearch",
  async (search, { getState }) => {
    const limit = COUNT_OF_ITEMS_ON_PAGE;
    const currentState = getState();
    const filter = currentState.movie.currentFilter;
    const searchMovie = await getPostsFromServer({search,limit,filter});
    return searchMovie;
  }
);

export const currentMovie = createAsyncThunk(
  "posts/currentMovie",
  async (id) => {
    const searchMovie = await getPostFromServerById(id);
    return searchMovie;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { dispatch, getState }) => {
    await deletePostsFromServer(id);
    const currentState = getState();
    const currentFilter = currentState.movie.currentFilter;
    if (currentFilter === "") {
      dispatch(getPosts());
    } else {
      dispatch(movieFilter(currentFilter));
    }
    return id;
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (paramDispatchEdit) => {
    const searchMovie = await editPostFromServer(paramDispatchEdit);
    return searchMovie;
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (paramDispatch) => {
  
    const searchMovie = await addPostFromServer(paramDispatch);
    return searchMovie;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    setNumberOfPage: (state, action) => {
      state.numberOfPage = action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.data;
      state.totalCount = action.payload.totalAmount;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
    [movieFilter.pending]: (state) => {
      state.loading = true;
    },
    [movieFilter.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.data;
      state.totalCount = action.payload.totalAmount;
    },
    [movieSort.pending]: (state) => {
      state.loading = true;
    },
    [movieSort.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.data;
    },
    [movieSearch.pending]: (state) => {
      state.loading = true;
    },
    [movieSearch.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.data;
      state.totalCount = action.payload.totalAmount;
    },
    [currentMovie.pending]: (state) => {
      state.loading = true;
    },
    [currentMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentMovie = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      const index = state.posts.findIndex((item) => item.id === action.payload);
      state.posts.splice(index, 1);
    },
    [editPost.fulfilled]: (state, action) => {
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.posts[index] = action.payload;
    },
    [addPost.fulfilled]: (state, action) => {
      state.posts.unshift(action.payload);
    },
  },
});

export const {
  setCurrentFilter,
  setSort,
  movieNotFound,
  deleteMovie,
  notFoundMovie,
  setNumberOfPage,
} = movieSlice.actions;

export default movieSlice.reducer;
