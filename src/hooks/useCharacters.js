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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAPICharactersInfo(
      pageNumber,
      characterName,
      characterStatus,
      characterGender,
      characterSpecies
    ).then(({ totalPages, fetchCharacters }) => {
      setTotalPageNumbers(totalPages);
      setFetchedAllCharacters(fetchCharacters);
    });
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
    setIsLoading,
  };
};
