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
    show: true,
    filter: "All",
    theme: false, //light
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
    showScale: (state, action) => {
      state.show = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setThemeBg: (state, action) => {
      state.theme = action.payload;
    },
  },
});
const delay = () => new Promise((resolve) => setTimeout(resolve, 400));

export const showImgByFilterAsync = (data) => async (dispatch) => {
  dispatch(showScale(false));
  await delay();
  dispatch(showImgByFilter(data));
  dispatch(showScale(true));
};

export const showImgByPageNumberAsync = (data) => async (dispatch) => {
  dispatch(showScale(false));
  await delay();
  dispatch(showImgByPageNumber(data));
  dispatch(showScale(true));
};

export const {
  showImgByFilter,
  showImgByPageNumber,
  showScale,
  setFilter,
  setThemeBg,
} = pageSlice.actions;
export default pageSlice.reducer;
