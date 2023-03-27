import React, { useMemo, useState, useEffect, useCallback } from "react";
import imageGallery from "../../asset/data";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../features/counter/filterBtnSlice";
import "./navFilterBtn.scss";

const NavFilterBtn = () => {
  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  const imageGallerys = imageGallery;
  const uniqueLocationsArray = useMemo(() => {
    const uniqueLocationsSet = new Set(["All"]);
    return [
      ...new Set([
        ...uniqueLocationsSet,
        ...imageGallerys.map((item) => item.location),
      ]),
    ];
  }, [imageGallerys]);

  const handleClickFilterButton = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
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
    </>
  );
};
export default NavFilterBtn;
