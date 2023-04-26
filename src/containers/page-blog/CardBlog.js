import React from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CardBlog = () => {
  const blogs = useSelector((state) => state.blogs.filteredBlogs);
  const navigate = useNavigate();
  const handleClickContinue = (obj) => {
    navigate("/blog/content/" + obj.id, {
      state: { content: obj },
    });
  };

  return (
    <div id="blogs">
      <div className="card-container">
        {blogs.map((item, key) => {
          return (
            <div
              key={key}
              className="card card-blog"
              onClick={() => handleClickContinue(item)}
            >
              <div className="card-img"></div>

              <img className="card-img-hovered" src={item.thumbnail} />

              <div className="card-info">
                <div className="card-about">
                  <a className="card-tag tag-news">{item.location}</a>
                  <div className="card-time">{item.date}</div>
                </div>
                <h1 className="card-title">{item.title}</h1>
                <div className="card-creator">
                  by <span>{item.author}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardBlog;
