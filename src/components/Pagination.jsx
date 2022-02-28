import React, { useEffect, useState } from 'react';

import '../styles/Pagination.css';

export const Pagination = ({
  totalPageNumbers,
  currentPageNumber,
  setCurrentPageNumber,
}) => {
  const [localPage, setLocalPage] = useState(currentPageNumber);

  const handleNextPage = (localPage) => {
    setCurrentPageNumber((prevPage) => (prevPage += 1));
  };

  const handlePrevioiusPage = (localPage) => {
    setCurrentPageNumber((prevPage) => (prevPage -= 1));
  };

  useEffect(() => {
    if (localPage < totalPageNumbers) {
      setCurrentPageNumber(localPage);
    }
  }, [localPage, setCurrentPageNumber]);

  return (
    <div className="pagination-wrapper">
      <span>
        <button onClick={handlePrevioiusPage}>Previos</button>
      </span>
      <span>
        {currentPageNumber} / {totalPageNumbers}
      </span>
      <span>
        <button onClick={handleNextPage}>Next</button>
      </span>
    </div>
  );
};
