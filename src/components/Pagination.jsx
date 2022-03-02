import React, { useEffect, useState } from 'react';

import '../styles/Pagination.css';

export const Pagination = ({
  totalPageNumbers,
  currentPageNumber,
  setCurrentPageNumber,
  usernameInput,
  userStatusInput,
  userSpeciesInput,
  userTypeInput,
  userGenderInput,
}) => {
  const [localPage, setLocalPage] = useState(currentPageNumber);

  console.log(currentPageNumber);
  
  // useEffect(() => {
  //   if (usernameInput || userStatusInput || userSpeciesInput || userTypeInput || userGenderInput) {
  //     setCurrentPageNumber(1);
  //   }
  // } , [setCurrentPageNumber, userGenderInput, userSpeciesInput, userStatusInput, userTypeInput, usernameInput]); 

  const handleNextPage = () => {
    setCurrentPageNumber((prevPage) => {
      if (prevPage < totalPageNumbers) { 
        return prevPage + 1; 
      } else { 
        return 1; 
      } 
    });
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
