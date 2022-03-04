// import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { motion, AnimatePresence } from 'framer-motion';

import '../styles/Pagination.css';

export const Pagination = ({
  totalPageNumbers,
  // currentPageNumber,
  setCurrentPageNumber,
}) => {
  // const [localPage, setLocalPage] = useState(currentPageNumber);
  // paginate
  // const [currentPage, setCurrentpage] = useState(currentPageNumber)
  function handlePageClick({ selected: currentPageNumber }) {
    setCurrentPageNumber(currentPageNumber + 1);
  }

  // console.log(currentPage, 'currentPage');
  // const handleNextPage = () => {
  //   setCurrentPageNumber((prevPage) => {
  //     if (prevPage < totalPageNumbers) {
  //       return prevPage + 1;
  //     } else {
  //       return 1;
  //     }
  //   });
  // };

  // const handlePrevioiusPage = () => {
  //   setCurrentPageNumber((prevPage) => (prevPage -= 1));
  // };

  // const handleNegativeOutboundPage = () => {
  //   setCurrentPageNumber(totalPageNumbers);
  // };

  // const handlePositiveOutboundPage = () => {
  //   setCurrentPageNumber(1);
  // };

  // useEffect(() => {
  //   if (localPage <= totalPageNumbers) {
  //     setCurrentPageNumber(localPage);
  //   }
  // }, [localPage, setCurrentPageNumber, totalPageNumbers]);

  // const pageNumbers = [];
  // for (let i = 1; i <= totalPageNumbers; i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <motion.div
      className="pagination-container"
      layout
      transition={{
        delay: 0.3,
        default: { duration: 0.3 },
      }}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          pageCount={totalPageNumbers}
          onPageChange={handlePageClick}
          containerClassName={'pagination-container'}
          nextLinkClassName={'pagination-next__link'}
          previousLinkClassName={'pagination-previous__link'}
          disabledClassName={'pagination-disabled__link'}
          activeClassName={'pagination-active__link'}
        />
      </AnimatePresence>
    </motion.div>
    // <div className="pagination-wrapper">
    //   <span>
    //     {currentPageNumber > 1 ? (
    //       <button onClick={handlePrevioiusPage}>Prev</button>
    //     ) : (
    //       <button onClick={handleNegativeOutboundPage}>Prev</button>
    //     )}
    //   </span>
    //   <span style={{ color: 'white' }}>
    //     {currentPageNumber} / {totalPageNumbers}
    //   </span>
    //   <span>
    //     {pageNumbers.map((page, id) => (
    //       <button
    //         key={page + id}
    //         onClick={() => setLocalPage(page)}
    //         className={localPage === page ? 'active' : ''}
    //       >
    //         {page}
    //       </button>
    //     ))}
    //   </span>
    //   <span>
    //     {currentPageNumber <= totalPageNumbers ? (
    //       <button onClick={handleNextPage}>next</button>
    //     ) : (
    //       <button onClick={handlePositiveOutboundPage}>next</button>
    //     )}
    //   </span>
    // </div>
  );
};
