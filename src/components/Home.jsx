import { useEffect, useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { FilterCharacters } from './FilterCharacters';
import { Pagination } from './Pagination';

import '../styles/Home.css';

import { CharacterList } from '../view/CharacterList';
import { motion, AnimatePresence } from 'framer-motion';

export const Home = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [usernameInput, setUsernameInput] = useState('');
  const [userStatusInput, setUserStatusInput] = useState('');
  const [userSpeciesInput, setUserSpeciesInput] = useState('');
  const [userTypeInput, setUsetTypeInput] = useState('');
  const [userGenderInput, setUserGenderInput] = useState('');
  const [filterCharacters, setFilterCharacters] = useState([]);
  const [listOfSearchTerms, setListOfSearchTerms] = useState([]);

  // console.log(usernameInput, 'usernameInput');
  // console.log(userStatusInput, 'userStatusInput');
  // console.log(userSpeciesInput, 'userSpeciesInput');
  // console.log(userTypeInput, 'userTypeInput');
  // console.log(userGenderInput, 'userGenderInput');
  // console.log(currentPageNumber, 'currentPageNumber');

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
    // currentPageNumber,
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
 console.log((listOfSearchTerms, 'listOfSearchTerms')); 
  // const displaySelectedSearchTerms = () => {
  //   console.log((listOfSearchTerms, 'listOfSearchTerms')); 
  // };

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
          {'·'} {count} {'characters found'} {'·'}
        </div>
        <div className="displayingCharacters-page-length">
          {`Showing ${fetchedAllCharacters.length}`}
        </div>
      </div>

      <Pagination
        totalPageNumbers={totalPageNumbers}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
      />

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
              <CharacterList
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                type={character.type}
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
                <div>
                  No Matching Character with {} ,
                  Please Try Again
                </div>
              </h1>
            )}
          </>
        )}
      </motion.div>
      <Pagination
        totalPageNumbers={totalPageNumbers}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        usernameInput={usernameInput}
      />
    </>
  );
};
