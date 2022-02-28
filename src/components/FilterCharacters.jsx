import '../styles/FilterCharacters.css';
import { useState, useEffect } from 'react';

export const FilterCharacters = ({
  setUsernameInput,
  fetchedAllCharacters,
  setFilterCharacters,
}) => {
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [nonDupChacters, setNonDupCharacters] = useState([]);
  //  const [filterCharacters, setFilterCharacters] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  console.log(search);

  useEffect(() => {
    setUsernameInput(search);
  }, [search, setUsernameInput]);

  // setUsernameInput(search);

  useEffect(() => {
    setFilterCharacters(filteredCharacters);
  }, [filteredCharacters, search, setFilterCharacters, setFilteredCharacters]);

  const handleFilter = (event) => {
    event.preventDefault();

    const searchTerm = event.target.value;
    setSearch(searchTerm);
    
    // const nonDupCharacters = {} 

    if (
      searchTerm === '' ||
      searchTerm === null ||
      search === '' ||
      search === null
    ) {
      setFilteredCharacters([]);
    } else {
      const characters = fetchedAllCharacters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredCharacters(characters);
    }
  };


  useEffect(() => { 
    const results = {}
      fetchedAllCharacters.filter((character) => { 
        if (!results[character.name]) { 
          results[character.name] = character; 
          return character; 
        } 
      setNonDupCharacters(results)
    });
  }
  , [fetchedAllCharacters])
  
  
  console.log(nonDupChacters, 'nonDupChacters');

  // useEffect(() => {
  //   setFilterCharacters(filteredCharacters);
  // }, [filteredCharacters, setFilterCharacters, search]);

  // const newCharacters = [...fetchedAllCharacters]
  // const justNames = []
  // filteredCharacters.map((character) => {
  //   return justNames.push(character.name);
  // });

  // console.log(justNames, 'justName');
  // const currentIndex = justNames.indexOf(search);
  // console.log(currentIndex, 'currentIndex');
  // const totalKeys = Object.keys(nonDupChacters) ; 

  return (
    <form className="input-wrapper" onSubmit={handleFormSubmit}>
      <input
        type="search"
        placeholder="Search for a character"
        value={search}
        onChange={handleFilter}
      />
      {filteredCharacters.length !== 0 && (
        <div className="search-characterNames">
          {/* {filteredCharacters.map((character) => {
            return (
              <div key={character.id}>
                <p
                  className="dropdown-name"
                  onClick={(value) => handleChange(value.target.innerText)}
                >
                  {character.name}
                </p>
              </div>
            );
          })} */}
          {Object.keys(nonDupChacters).map((character) => {
            console.log(character, 'character');
            return (
              <div key={character.id}>
                <p
                  className="dropdown-name"
                  onClick={(value) => handleChange(value.target.innerText)}
                >
                  {character}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <button onClick={handleFormSubmit}>Search</button>
    </form>
  );
};
