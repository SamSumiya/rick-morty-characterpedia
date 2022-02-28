import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { FilterCharacters } from './FilterCharacters';

import '../styles/Home.css';

export const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [usernameInput, setUsernameInput] = useState('');
  const [userStatusInput, setUserStatusInput] = useState('');
  const [userSpeciesInput, setUserSpeciesInput] = useState('');
  const [userTypeInput, setUsetTypeInput] = useState('');
  const [userGenderInput, setUserGenderInput] = useState('');

  const {
    fetchedAllCharacters,
    totalPageNumbers,
    count,
    isLoading,
    noDataFound,
  } = useCharacters(
    pageNumber,
    usernameInput,
    userStatusInput,
    userSpeciesInput,
    userTypeInput,
    userGenderInput
  );

  if (isLoading) {
    return (
      <img
        src="https://media2.giphy.com/media/9JwUhPDEGmhbWgCMEZ/source.gif"
        alt="spinning Rick Head"
      />
    );
  }

  return (
    <>
      <FilterCharacters setUsernameInput={setUsernameInput}/>
      <div className="displayingCharacters-numbers-wrapper">
        <div className="displayingCharacters-found-numbers">
          {'·'} {count} {'characters found'} {'·'}
        </div>
        <div className="displayingCharacters-page-length">
          {`Showing ${fetchedAllCharacters.length}`}
        </div>
      </div>

      <div className="displayingCharacters-wrapper">
        {fetchedAllCharacters.map((character) => (
          <ul key={character.id} className="displayCharacters-character">
            <img src={character.image} alt={character.image} />
            <li className="displayCharacters-name">{character.name}</li>
            <li>{character.status}</li>
            <li>{character.species}</li>
            <button> Details </button>
          </ul>
        ))}
      </div>
    </>
  );
};
