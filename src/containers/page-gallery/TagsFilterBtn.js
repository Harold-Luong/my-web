import React, { useMemo } from "react";
import { imageGalleryData } from "../../asset/gallery-data";

import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  showImgByFilterAsync,
} from "../../features/gallery/gallerySlice";
import "./tagsFilterBtn.scss";

const TagsFilterBtn = () => {
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
      <div className="  w3-margin">
        <div className="w3-container w3-padding">
          <h4>Location</h4>
        </div>
        <div className="w3-container">
          <p>
            {uniqueLocationsArray.map((location, index) => (
              <button
                key={index}
                className={`w3-medium  ${
                  filter === location ? "w3-black" : " "
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
    </div>
  );
};

export default TagsFilterBtn;
