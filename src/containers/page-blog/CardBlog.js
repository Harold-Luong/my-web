import React from "react";
import "./cardBlog.scss";
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
      {blogs.map((item, key) => {
        return (
          <div key={key} className="card-item">
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${item.thumbnail})`,
              }}
            ></div>

            <article>
              <a href="#">
                {item.author} - {item.date}
              </a>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <span onClick={() => handleClickContinue(item)}>
                Reade more →
              </span>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default CardBlog;
