import { useParams } from 'react-router-dom';
import { useCharacterDetailInfo } from '../hooks/useCharacterDetailInfo';
import { CharacterDetailsPage } from '../view/CharacterDetailsPage';

export const CharacterDetail = () => {
  const { characterId } = useParams();

  const { isLoadingDetail, selectedCharacter } =
    useCharacterDetailInfo(characterId);

  if (isLoadingDetail) {
    return (
      <div>
        <img
          src="https://cdn.dribbble.com/users/1944099/screenshots/6385450/rik.gif"
          alt="nodding Rick!"
        />
      </div>
    );
  }
  return (
    <CharacterDetailsPage
      createdTime={selectedCharacter.created}
      episode={selectedCharacter.episode}
      gender={selectedCharacter.gender}
      image={
        selectedCharacter.image
          ? selectedCharacter.image
          : 'https://toppng.com/uploads/preview/image-1-source-rick-and-morty-11562982914hmlrrghjuu.png'
      }
      name={selectedCharacter.name}
      species={selectedCharacter.species}
      status={selectedCharacter.status}
      nextCharacter={selectedCharacter.url}
      origin={
        selectedCharacter.origin ? selectedCharacter.origin.name : 'Loading'
      }
      location={
        selectedCharacter.location ? selectedCharacter.location.name : 'Loading'
      }
    />
  );
};
