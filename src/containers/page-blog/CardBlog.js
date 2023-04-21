import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const CardBlog = () => {
  const imageGallery = useSelector((state) => state.page.imageGallery);
  const navigate = useNavigate();
  const handleClickContinue = (obj) => {
    navigate("/blog/content/" + obj.id, {
      state: { content: obj },
    });
  };
  return (
    <div className="grid-container">
      {imageGallery.map((item, key) => {
        return (
          <div key={key} className="card-blog w3-animate-zoom">
            <img
              className="grid-item grid-item-1"
              src={item.src}
              alt={item.location}
            />
            <div className="entry-meta w3-padding-16">
              <span className="byline ">
                by&nbsp;
                <span className="author vcard">
                  <a className="url fn n" href="/blog">
                    Duc Trong
                  </a>
                </span>
              </span>
              <span className="posted-on">
                <span className="posted-on-delimeter"> - </span>
                <a href="/blog" rel="bookmark">
                  <time
                    className="entry-date published"
                    dateTime="2017-04-20T08:47:44+00:00"
                  >
                    April 20, 2017
                  </time>
                </a>
              </span>
              <h2 className="entry-title">
                Explore new places every single day
              </h2>
            </div>
            <div className="text-blog">
              {item.description} Integer at pharetra metus, non porttitor lorem.
              Pellentesque consectetur lacus at erat maximus fringilla. Mauris
              suscipit commodo lacus id rutrum. Suspendisse potenti. Vestibulum
              cursus lobortis suscipit. Pellentesque vel eleifend urna.
            </div>
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
