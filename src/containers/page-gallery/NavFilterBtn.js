import React, { useMemo } from "react";
import { imageGalleryData } from "../../asset/data";

import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  showImgByFilterAsync,
} from "../../features/gallery/gallerySlice";
import "./navFilterBtn.scss";

const NavFilterBtn = () => {
  const filter = useSelector((state) => state.page.filter);
  const dispatch = useDispatch();
  const listImgGallery = imageGalleryData;
  //tạo 1 mảng location không trùng nhau
  const uniqueLocationsArray = useMemo(() => {
    const uniqueLocationsSet = new Set(["All"]);
    listImgGallery.forEach((item) => uniqueLocationsSet.add(item.location));
    return Array.from(uniqueLocationsSet);
  }, [listImgGallery]);

  const handleClickFilterButton = (event) => {
    const btnValueFilter = event.target.value;
    if (btnValueFilter === "All") {
      dispatch(setFilter(btnValueFilter));
      dispatch(
        showImgByFilterAsync({
          imageGallery: listImgGallery,
        })
      );
    } else {
      const imgFilter = listImgGallery.filter(
        (img) => img.location === event.target.value
      );
      dispatch(setFilter(btnValueFilter));
      dispatch(
        showImgByFilterAsync({
          imageGallery: imgFilter,
        })
      );
    }
  };

  return (
    <div className="toolbar">
      {uniqueLocationsArray.map((location, index) => (
        <button
          key={index}
          className={`btn-filter${filter === location ? " btn-active" : ""}`}
          value={location}
          onClick={handleClickFilterButton}
        >
          {location}
        </button>
      ))}
    </div>
  );
};

export default NavFilterBtn;
