import React, { useMemo } from "react";

import "./tagsFilter.scss";
import { imageGalleryData } from "../asset/gallery-data";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  showImgByFilterAsync,
} from "../features/gallery/gallerySlice";
const TagsFilter = () => {
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
    <div className=" tags w3-border w3-margin">
      <div className="w3-container w3-padding">
        <h4>Tags</h4>
      </div>
      <div className="w3-container w3-white">
        <p>
          {uniqueLocationsArray.map((location, index) => (
            <button
              key={index}
              className={`w3-tag  ${
                filter === location ? " w3-tag-active " : ""
              }`}
              value={location}
              onClick={handleClickFilterButton}
            >
              {location}
            </button>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TagsFilter;
