import { createSlice } from "@reduxjs/toolkit";

import { blogs, uniqueTags } from "../../asset/blog-data";
const initialState = {
  filteredBlogs: blogs,
  uniqueTags: uniqueTags,
  tagActive: "All",
  currentPage: 1,
  perPage: 6,
  totalPage: null,
  location: "",
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    filterBlogsByTag: (state, action) => {
      const tag = action.payload;
      if (tag !== "All") {
        state.filteredBlogs = blogs.filter((blogs) => blogs.tags.includes(tag));
        state.tagActive = tag;
      } else {
        state.filteredBlogs = blogs;
        state.tagActive = tag;
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
  },
});

export const { filterBlogsByTag } = blogsSlice.actions;

export default blogsSlice.reducer;
