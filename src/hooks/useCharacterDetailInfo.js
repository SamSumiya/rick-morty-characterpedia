import { useState, useEffect } from 'react'
import { fetchAPICharacterDetailInfo } from '../service/getAPICharactersInfo';

export const useCharacterDetailInfo = (characterId) => {
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  useEffect(() => {
    setIsLoadingDetail(true)
    fetchAPICharacterDetailInfo(characterId)
      .then((response) => setSelectedCharacter(response))
      .catch((error) => console.log(error))
      .finally(setIsLoadingDetail(false));
  }, [characterId]);

  return { isLoadingDetail, selectedCharacter };
};

