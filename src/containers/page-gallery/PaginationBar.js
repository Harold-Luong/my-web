import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { showImgByPageNumber } from "../../features/gallery/gallerySlice";

const PaginationBar = () => {
  const dispatch = useDispatch();
  const pageReducer = useSelector((state) => state.page);
  const currentPage = pageReducer.currentPage;
  const page = pageReducer.totalPage;
  const [totalPage, settotalPage] = useState(page);
  useEffect(() => {
    if (page !== totalPage) {
      settotalPage(page);
    }
  }, [page, totalPage]);

  const handlePageChange = (page) => {
    dispatch(showImgByPageNumber({ ...pageReducer, currentPage: page }));
  };
  console.log("pag");
  return (
    <div className="d-flex justify-content-center mt-4">
      <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        />
        {totalPage.map((pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={currentPage === totalPage.length}
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default PaginationBar;
