import React, { useMemo, useState } from "react";
import { imageGalleryData } from "../../asset/data";

import { useDispatch } from "react-redux";
import { showImgByFilter } from "../../features/gallery/gallerySlice";
import "./navFilterBtn.scss";

const NavFilterBtn = () => {
  const [filter, setFilter] = useState("All");
  const dispatch = useDispatch();
  const listImgGallery = useMemo(() => imageGalleryData, []);
  //tạo 1 mảng location không trùng nhau
  const uniqueLocationsArray = useMemo(() => {
    const uniqueLocationsSet = new Set(["All"]);
    listImgGallery.forEach((item) => uniqueLocationsSet.add(item.location));
    return Array.from(uniqueLocationsSet);
  }, [listImgGallery]);

  const handleClickFilterButton = (event) => {
    const btnValueFilter = event.target.value;
    if (btnValueFilter === "All") {
      dispatch(
        showImgByFilter({
          imageGallery: listImgGallery,
        })
      );
    } else {
      const imgFilter = listImgGallery.filter(
        (img) => img.location === event.target.value
      );

      dispatch(
        showImgByFilter({
          imageGallery: imgFilter,
        })
      );
    }
    setFilter(btnValueFilter);
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
