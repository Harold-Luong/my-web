import React, { useState } from "react";

import "./locationBlogs.scss";
import { useSelector } from "react-redux";
const LocationBlogs = () => {
  const [count, setCount] = useState(1);
  const blogs = useSelector((state) => state.blogs.filteredBlogs);
  const uniqueLocation = blogs.reduce((location, blog) => {
    return [...new Set([...location, blog.location])];
  }, []);

  console.log(uniqueLocation);

  return (
    <div className=" tags w3-border w3-margin">
      <div className="w3-container w3-padding">
        <h4>Location</h4>
      </div>
      <div className="w3-container w3-white">
        <ul className="w3-ul">
          {uniqueLocation.map((item, key) => {
            return (
              <li key={key} id="location" className="w3-display-container ">
                {item}
                <span id="count" className="w3-transparent w3-display-right">
                  {count}
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
