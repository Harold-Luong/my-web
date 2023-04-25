import React from "react";

import "./tagsFilter.scss";
// import blogs from "../asset/blog-data";
import { useDispatch, useSelector } from "react-redux";
import { filterBlogsByTag } from "../features/blogs/blogSlice";
const TagsFilter = () => {
  const uniqueTags = useSelector((state) => state.blogs.uniqueTags);
  const tagActive = useSelector((state) => state.blogs.tagActive);
  const dispatch = useDispatch();
  const handleClickFilterButton = (event) => {
    const btnValueFilter = event.target.value;
    dispatch(filterBlogsByTag(btnValueFilter));
  };
  return (
    <div className=" tags w3-border w3-margin">
      <div className="w3-container w3-padding">
        <h4>Tags</h4>
      </div>
      <div className="w3-container w3-white">
        <p>
          {uniqueTags.map((tag, index) => (
            <button
              key={index}
              className={`w3-tag  ${
                tagActive === tag ? " w3-tag-active " : ""
              }`}
              value={tag}
              onClick={handleClickFilterButton}
            >
              {tag}
            </button>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TagsFilter;
