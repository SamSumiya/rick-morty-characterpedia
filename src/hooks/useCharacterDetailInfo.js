import { useState, useEffect } from 'react'
import { fetchAPICharacterDetailInfo } from '../service/getAPICharactersInfo';

export const useCharacterDetailInfo = (characterId) => {
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetchAPICharacterDetailInfo(1).then((response) =>
      setSelectedCharacter(response)
    ).catch(error => console.log(error))
      .finally(setIsLoading(false))
  }, [characterId]);

  return { isLoading, selectedCharacter };
};

