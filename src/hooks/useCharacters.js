import { useState, useEffect } from 'react';
import { fetchAPICharactersInfo } from '../service/getAPICharactersInfo';

export const useCharacters = (
  pageNumber,
  usernameInput,
  userStatusInput,
  userSpeciesInput,
  userTypeInput,
  userGenderInput
) => {
  const [fetchedAllCharacters, setFetchedAllCharacters] = useState([]);
  const [totalPageNumbers, setTotalPageNumbers] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  console.log(fetchedAllCharacters, 'dafdsafads');
  
  useEffect(() => {
    setIsLoading(true);
    fetchAPICharactersInfo(
      pageNumber,
      usernameInput,
      userStatusInput,
      userSpeciesInput,
      userTypeInput,
      userGenderInput
    )
      .then(({ totalPages, fetchCharacters, count }) => {
        setTotalPageNumbers(totalPages);
        setFetchedAllCharacters(fetchCharacters);
        setCount(count);
      })
      .catch((error) => console.error(error))
      .finally(setIsLoading(false));
  }, [
    pageNumber,
    usernameInput,
    userStatusInput,
    userSpeciesInput,
    userTypeInput,
    userGenderInput,
  ]);

  return {
    fetchedAllCharacters,
    totalPageNumbers,
    count,
    isLoading,
    setIsLoading,
  };
};
