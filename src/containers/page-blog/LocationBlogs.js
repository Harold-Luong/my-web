import React from "react";
import "./locationBlogs.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterBlogsByLoacation } from "../../features/blogs/blogSlice";
const LocationBlogs = () => {
  const dispatch = useDispatch();
  const locationAndTotals = useSelector((state) => state.blogs.locations);

  const handleClickLocation = (event) => {
    const locationFilter = event.target.getAttribute("data-location");

    dispatch(filterBlogsByLoacation(locationFilter));
  };

  return (
    <div className=" tags w3-border w3-margin">
      <div className="w3-container w3-padding">
        <h4>Location</h4>
      </div>
      <div className="w3-container w3-white">
        <ul className="w3-ul">
          {locationAndTotals.map((item, key) => {
            return (
              <li
                key={key}
                id="location"
                className="w3-display-container "
                onClick={handleClickLocation}
                data-location={item.location}
              >
                {item.location}
                <span
                  id="total"
                  className=" w3-padding w3-transparent w3-display-right"
                >
                  ({item.total})
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LocationBlogs;
