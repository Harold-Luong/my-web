import React, { useMemo, useState } from "react";
import { imageGalleryData } from "../../asset/data";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { showImgByFilter } from "../../features/gallery/gallerySlice";
import "./navFilterBtn.scss";

const NavFilterBtn = () => {
  const [filter, setFilter] = useState("All");
  const pageReducer = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const listImgGallery = imageGalleryData;
  const uniqueLocationsArray = useMemo(() => {
    const uniqueLocationsSet = new Set(["All"]);
    return [
      ...new Set([
        ...uniqueLocationsSet,
        ...listImgGallery.map((item) => item.location),
      ]),
    ];
  }, [listImgGallery]);

  const handleClickFilterButton = (event) => {
    const btnValueFilter = event.target.value;
    if (btnValueFilter === "All") {
      dispatch(
        showImgByFilter({
          ...pageReducer,
          currentPage: 1,
          imageGallery: listImgGallery,
        })
      );
    } else {
      const imgFilter = imageGalleryData.filter(
        (img) => img.location === event.target.value
      );
      dispatch(
        showImgByFilter({
          ...pageReducer,
          currentPage: 1,
          imageGallery: imgFilter,
        })
      );
    }
    setFilter(btnValueFilter);
  };
  console.log("nav");
  return (
    <React.Fragment>
      <div className="toolbar">
        {uniqueLocationsArray.map((location, index) => (
          <Button
            key={index}
            className={`btn-filter${filter === location ? " btn-active" : ""}`}
            value={location}
            onClick={handleClickFilterButton}
          >
            {location}
          </Button>
        ))}
      </div>
    </React.Fragment>
  );
};
export default NavFilterBtn;
