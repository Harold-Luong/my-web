import React from "react";
import { Pagination } from "react-bootstrap";
import "./paginationbar.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  showScale,
  showImgByPageNumberAsync,
} from "../../features/gallery/gallerySlice";

const PaginationBar = () => {
  const dispatch = useDispatch();
  const pageReducer = useSelector((state) => state.page);
  const currentPage = pageReducer.currentPage;
  const page = pageReducer.totalPage;
  const handlePageChange = (page) => {
    dispatch(showScale(false));
    dispatch(showImgByPageNumberAsync({ currentPage: page }));
  };

  return (
    <div className="d-flex justify-content-center mt-4 pagination">
      <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        />
        {page.map((pageNumber) => (
          <Pagination.Item
            disabled={currentPage === pageNumber}
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={currentPage === page.length}
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default PaginationBar;
