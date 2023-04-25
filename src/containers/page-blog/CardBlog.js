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
    <div className="grid-container">
      {blogs.map((item, key) => {
        return (
          <div key={key} className="card-blog w3-animate-zoom">
            <img
              className="grid-item grid-item-1"
              src={item.thumbnail}
              alt={item.location}
            />
            <div className="entry-meta w3-padding-16">
              <span className="byline ">
                by&nbsp;
                <span className="author vcard">
                  <a className="url fn n" href="/blog">
                    {item.author}
                  </a>
                </span>
              </span>
              <span className="posted-on">
                <span className="posted-on-delimeter"> - </span>
                <a href="/blog" rel="bookmark">
                  <time className="entry-date published" dateTime={item.date}>
                    {item.date}
                  </time>
                </a>
              </span>
              <h2 className="entry-title">{item.title}</h2>
            </div>
            <div className="text-blog">{item.description}</div>
            <hr></hr>
            <div className="entry-footer index-entry">
              <p>
                <span
                  className="meta-nav"
                  onClick={() => handleClickContinue(item)}
                >
                  Continue reading →
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardBlog;
