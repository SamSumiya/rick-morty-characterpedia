import { useState } from 'react';
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


  const {
    fetchedAllCharacters,
    totalPageNumbers,
    count,
    isLoading,
    noDataFound,
  } = useCharacters(
    currentPageNumber,
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
      <FilterCharacters
        setUsernameInput={setUsernameInput}
        // setCurrentPageNumber={setCurrentPageNumber}
        // currentPageNumber={currentPageNumber}
        // totalPageNumbers={totalPageNumbers}
        fetchedAllCharacters={fetchedAllCharacters}
        setFilterCharacters={setFilterCharacters}
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
        {fetchedAllCharacters.map((character) => (
          <AnimatePresence key={character.id}>
            {/* <ul key={character.id} className="displayCharacters-character"> */}
            <CharacterList
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              type={character.type}
            />
          </AnimatePresence>
        ))}
      </motion.div>
      <Pagination
        totalPageNumbers={totalPageNumbers}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
      />
    </>
  );
};
