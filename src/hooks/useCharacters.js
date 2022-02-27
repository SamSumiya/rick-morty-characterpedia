import { useState, useEffect } from 'react';
import { fetchAPICharactersInfo } from '../service/getAPICharactersInfo';

export const useCharacters = (
  pageNumber,
  characterName,
  characterStatus,
  characterGender,
  characterSpecies
) => {
  const [fetchedAllCharacters, setFetchedAllCharacters] = useState([]);
  const [totalPageNumbers, setTotalPageNumbers] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAPICharactersInfo(
      pageNumber,
      characterName,
      characterStatus,
      characterGender,
      characterSpecies
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
    characterName,
    characterStatus,
    characterGender,
    characterSpecies,
  ]);

  return {
    fetchedAllCharacters,
    totalPageNumbers,
    count,
    setIsLoading,
  };
};
