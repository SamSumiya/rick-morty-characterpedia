import '../styles/FilterCharacters.css';
import { useState, useEffect } from 'react';

export const FilterCharacters = ({
  setUsernameInput,
  fetchedAllCharacters,
  setFilterCharacters,
  // setUpdatedCurrentPageNumber,
}) => {
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [nonDupChacters, setNonDupCharacters] = useState([]);

  //  const [filterCharacters, setFilterCharacters] = useState([]);
  // setUpdatedCurrentPageNumber(1);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    setUsernameInput(search);
  }, [search, setUsernameInput]);

  useEffect(() => {
    setFilterCharacters(filteredCharacters);
  }, [filteredCharacters, search, setFilterCharacters, setFilteredCharacters]);

  const convertAlphabetToLowerCase = (string) => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const word = string.split('');

    return word
      .map((letter) => {
        if (alphabets.includes(letter.toLowerCase())) {
          return letter.toLowerCase();
        } else {
          return letter;
        }
      })
      .join('');
  };

  const handleFilter = (event) => {
    event.preventDefault();

    const searchTerm = event.target.value;
    setSearch(searchTerm);

    if (
      searchTerm === '' ||
      searchTerm === null ||
      search === '' ||
      search === null
    ) {
      setFilteredCharacters([]);
    } else {
      const characters = fetchedAllCharacters.filter((character) => {
        return character.name
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilteredCharacters(characters);
    }
  };

  useEffect(() => {
    const arrayOfNames = [];
    fetchedAllCharacters.filter((character) => {
      if (!arrayOfNames.includes(character.name)) {
        arrayOfNames.push(character.name);
      }
      setNonDupCharacters(arrayOfNames);
    });
  }, [search, fetchedAllCharacters]);

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
          {nonDupChacters.map((name, id) => {
            return (
              <div key={name + id}>
                <p
                  className="dropdown-name"
                  onClick={(value) => handleChange(value.target.innerText)}
                >
                  {name}
                </p>
              </div>
            );
          })}
          {/* {Object.keys(nonDupChacters).map((character) => {
            console.log(character, 'character');
            return (
              <div key={character}>
                <p
                  className="dropdown-name"
                  onClick={(value) => handleChange(value.target.innerText)}
                >
                  {character}
                </p>
              </div>
            );
          })} */}
        </div>
      )}
      <button onClick={handleFormSubmit}>Search</button>
    </form>
  );
};
