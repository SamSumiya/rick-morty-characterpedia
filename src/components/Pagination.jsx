import React, { useEffect, useState } from 'react';

import '../styles/Pagination.css';

export const Pagination = ({
  totalPageNumbers,
  currentPageNumber,
  setCurrentPageNumber,
  usernameInput,
}) => {
  const [localPage, setLocalPage] = useState(currentPageNumber);

  
  useEffect(() => {
    if (usernameInput) {
      setCurrentPageNumber(1);
    }
  } , [setCurrentPageNumber, usernameInput]); 
  

  const handleNextPage = () => {
    setCurrentPageNumber((prevPage) => (prevPage += 1));
  };

  const handlePrevioiusPage = () => {
    setCurrentPageNumber((prevPage) => (prevPage -= 1));
  };

  const handleNegativeOutboundPage = () => {
    setCurrentPageNumber(totalPageNumbers);
  };

  const handlePositiveOutboundPage = () => {
    setCurrentPageNumber(1);
  };

  useEffect(() => {
    if (localPage <= totalPageNumbers) {
      setCurrentPageNumber(localPage);
    }
  }, [localPage, setCurrentPageNumber, totalPageNumbers]);

  const pageNumbers = [];
  for (let i = 1; i <= totalPageNumbers; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-wrapper">
      <span>
        {/* {currentPageNumber >= 1 && (
          <button onClick={handlePrevioiusPage}>Prev</button>
        )} */}
        {currentPageNumber > 1 ? (
          <button onClick={handlePrevioiusPage}>Prev</button>
        ) : (
          <button onClick={handleNegativeOutboundPage}>Prev</button>
        )}
      </span>
      <span style={{ color: 'white' }}>
        {currentPageNumber} / {totalPageNumbers}
      </span>
      <span>
        {pageNumbers.map((page, id) => (
          <button
            key={page + id}
            onClick={() => setLocalPage(page)}
            className={localPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </span>
      <span>
        {currentPageNumber <= totalPageNumbers ? (
          <button onClick={handleNextPage}>next</button>
        ) : (
          <button onClick={handlePositiveOutboundPage}>next</button>
        )}
      </span>
    </div>
  );
};
