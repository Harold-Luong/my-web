import { createSlice } from "@reduxjs/toolkit";
import { imageGalleryData, totalPages, itemsPerPage } from "../../asset/data";
//init
const indexOfLastItem = itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = imageGalleryData.slice(indexOfFirstItem, indexOfLastItem);

const pageSlice = createSlice({
  name: "page",
  initialState: {
    imageGallery: currentItems,
    totalPage: totalPages,
    currentPage: 1,
    itemsPerPage: itemsPerPage,
    paginationImg: imageGalleryData,
  },

  reducers: {
    showImgByFilter: (state, action) => {
      const filteredImages = action.payload.imageGallery;
      const choosenPage = action.payload.currentPage;
      const totalPagesAffter = Array.from(
        { length: Math.ceil(filteredImages.length / itemsPerPage) },
        (_, i) => i + 1
      );
      const indexOfLastItem = choosenPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = filteredImages.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
      state.paginationImg = filteredImages;
      state.imageGallery = currentItems;
      state.totalPage = totalPagesAffter;
      state.currentPage = 1;
    },
    showImgByPageNumber: (state, action) => {
      const pageImg = state.paginationImg;
      const choosenPage = action.payload.currentPage;
      const indexOfLastItem = choosenPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = pageImg.slice(indexOfFirstItem, indexOfLastItem);
      state.imageGallery = currentItems;
      state.currentPage = choosenPage;
    },
  },
});

export const { showImgByFilter, showImgByPageNumber } = pageSlice.actions;
export default pageSlice.reducer;
