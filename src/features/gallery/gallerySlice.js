import { createSlice } from "@reduxjs/toolkit";
import { imageGalleryData, totalPages, itemsPerPage } from "../../asset/data";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    imageGallery: imageGalleryData.slice(0, itemsPerPage),
    totalPage: totalPages,
    currentPage: 1,
    itemsPerPage: itemsPerPage,
    paginationImg: imageGalleryData,
  },

  reducers: {
    showImgByFilter: (state, action) => {
      const filteredImages = action.payload.imageGallery;
      state.paginationImg = filteredImages;
      state.imageGallery = filteredImages.slice(0, itemsPerPage);
      const totalPagesAffter = Array.from(
        { length: Math.ceil(filteredImages.length / itemsPerPage) },
        (_, i) => i + 1
      );
      state.currentPage = 1;
      state.totalPage = totalPagesAffter;
    },
    showImgByPageNumber: (state, action) => {
      const pageImg = state.paginationImg;
      const choosenPage = action.payload.currentPage;
      const indexOfLastItem = choosenPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      state.imageGallery = pageImg.slice(indexOfFirstItem, indexOfLastItem);
      state.currentPage = choosenPage;
    },
    showScale: (state, action) => {},
  },
});

export const { showImgByFilter, showImgByPageNumber, showScale } =
  pageSlice.actions;
export default pageSlice.reducer;
