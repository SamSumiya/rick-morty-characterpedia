import { useParams } from 'react-router-dom'
import { useCharacterDetailInfo } from '../hooks/useCharacterDetailInfo';
import { CharacterDetails } from '../view/CharacterDetails';

export const CharacterDetail = () => {

 
  const { characterId } = useParams(); 
  console.log(characterId); 
  const { isLoadingDetail, selectedCharacter } = useCharacterDetailInfo(characterId);
  
  if (isLoadingDetail) { 
    return <div>Loading...</div> 
  } 
  
  return <CharacterDetails selectedCharacter={selectedCharacter} />; 


};
