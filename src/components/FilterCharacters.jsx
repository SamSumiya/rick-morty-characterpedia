import '../styles/FilterCharacters.css';
import { useState, useEffect } from 'react';

export const FilterCharacters = ({
  setUsernameInput,
  fetchedAllCharacters,
  setFilterCharacters,
}) => {
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleFilter = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    setUsernameInput(search);
    if (searchTerm === '' || searchTerm === null) {
      setFilteredCharacters([]);
    } else {
      const filteredCharacters = fetchedAllCharacters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredCharacters(filteredCharacters);
    }
  };

  useEffect(() => {
    setFilterCharacters(filteredCharacters);
  }, [filteredCharacters, setFilterCharacters]);

  return (
    <form className="input-wrapper" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search for a character"
        value={search}
        onChange={handleFilter}
      />
     {filteredCharacters.length !== 0 && <div className="search-characterNames">
        {filteredCharacters.slice(0, 5).map((character) => {
          return (
            <div key={character.id}>
              <p className="dropdown-name">{character.name}</p>
            </div>
          );
        })}
      </div>}
      <button onClick={handleFormSubmit}>Search</button>
    </form>
  );
};
