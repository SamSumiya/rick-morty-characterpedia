import { useEffect, useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { FilterCharacters } from './FilterCharacters';
import { Pagination } from './Pagination';

import '../styles/Home.css';

import { CharacterListPage } from '../view/CharacterListPage';
import { motion, AnimatePresence } from 'framer-motion';

export const Home = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [usernameInput, setUsernameInput] = useState('');
  const [userStatusInput, setUserStatusInput] = useState('');
  const [userSpeciesInput, setUserSpeciesInput] = useState('');
  const [userTypeInput, setUsetTypeInput] = useState('');
  const [userGenderInput, setUserGenderInput] = useState('');
  const [selectedCharacterId, setSelectedCharacterId] = useState(0);

  const [filterCharacters, setFilterCharacters] = useState([]);
  const [listOfSearchTerms, setListOfSearchTerms] = useState([]);

  useEffect(() => {
    return setListOfSearchTerms([
      usernameInput,
      userStatusInput,
      userSpeciesInput,
      userTypeInput,
      userGenderInput,
    ]);
  }, [
    usernameInput,
    userStatusInput,
    userSpeciesInput,
    userTypeInput,
    userGenderInput,
  ]);

  const {
    fetchedAllCharacters,
    totalPageNumbers,
    count,
    isLoading,
    setIsLoading,
  } = useCharacters(
    currentPageNumber,
    usernameInput,
    userStatusInput,
    userGenderInput,
    userSpeciesInput,
    userTypeInput
  );

  return (
    <>
      <FilterCharacters
        setUsernameInput={setUsernameInput}
        fetchedAllCharacters={fetchedAllCharacters}
        setFilterCharacters={setFilterCharacters}
        setUserStatusInput={setUserStatusInput}
        setUserGenderInput={setUserGenderInput}
        setUserSpeciesInput={setUserSpeciesInput}
        setUserTypeInput={setUsetTypeInput}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <div className="displayingCharacters-numbers-wrapper">
        <div className="displayingCharacters-found-numbers">
          {'·'}{' '}
          <span
            style={{
              borderBottom: '2px solid gray',
              color: '#ded5d5',
              fontSize: '.8rem',
            }}
          >
            {count}
          </span>{' '}
          {'characters found'} {'·'}
        </div>
        <div className="displayingCharacters-page-length">
          {`Showing ${fetchedAllCharacters.length}`}
        </div>
      </div>

      <motion.div
        layout
        transition={{
          delay: 0.3,
          default: { duration: 0.3 },
        }}
        animate={{ opacity: 1 }}
        className="displayingCharacters-wrapper"
      >
        {fetchedAllCharacters.length ? (
          fetchedAllCharacters.map((character) => (
            <AnimatePresence key={character.id}>
              <CharacterListPage
                characterId={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                type={character.type}
                location={character.location.name}
              />
            </AnimatePresence>
          ))
        ) : (
          <>
            {isLoading ? (
              <img
                src="https://media2.giphy.com/media/9JwUhPDEGmhbWgCMEZ/source.gif"
                alt="spinning Rick Head"
              />
            ) : (
              <h1 className="no-matching-message">
                <p>No Matching Characters...</p>
                <img
                  className="no-matching-image"
                  src="https://c.tenor.com/QINATntBXoEAAAAC/beth-rick.gif"
                  alt="beth drinking wine"
                />
              </h1>
            )}
          </>
        )}
      </motion.div>

      {fetchedAllCharacters.length && (
        <Pagination
          setCurrentPageNumber={setCurrentPageNumber}
          totalPageNumbers={totalPageNumbers}
          currentPageNumber={currentPageNumber}
        />
      )}
    </>
  );
};
