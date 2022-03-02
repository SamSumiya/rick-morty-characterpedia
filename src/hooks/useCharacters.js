import { useState, useEffect, useRef } from 'react';
import { fetchAPICharactersInfo } from '../service/getAPICharactersInfo';

export const useCharacters = (
  pageNumber,
  usernameInput,
  userStatusInput,
  userGenderInput,
  userSpeciesInput,
  userTypeInput
) => {
  const [fetchedAllCharacters, setFetchedAllCharacters] = useState([]);
  const [totalPageNumbers, setTotalPageNumbers] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const pageRef = useRef(1);

  useEffect(() => {
    if (
      usernameInput ||
      userStatusInput ||
      userGenderInput ||
      userSpeciesInput ||
      userTypeInput
    )
      pageNumber = pageRef.current;
  }, [
    usernameInput,
    userStatusInput,
    userGenderInput,
    userSpeciesInput,
    userTypeInput,
  ]);

  useEffect(() => {
    setIsLoading(true);
    fetchAPICharactersInfo(
      pageNumber,
      usernameInput,
      userStatusInput,
      userGenderInput,
      userSpeciesInput,
      userTypeInput
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
    userGenderInput,
    userSpeciesInput,
    userStatusInput,
    userTypeInput,
    usernameInput,
  ]);

  return {
    fetchedAllCharacters,
    totalPageNumbers,
    count,
    isLoading,
    setIsLoading,
  };
};
