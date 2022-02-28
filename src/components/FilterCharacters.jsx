import '../styles/FilterCharacters.css';
import { useState, useEffect } from 'react';

export const FilterCharacters = ({ setUsernameInput, fetchedAllCharacters }) => {
  const [search, setSearch] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setUsernameInput(search);
  }, [search, setUsernameInput]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form className="input-wrapper" onSubmit={handleFormSubmit}>
      <input
        type="search"
        placeholder="Search for a character"
        onChange={handleChange}
      />
      {fetchedAllCharacters.map(character => {
        return (
          <div key={character.id}>
            <p>{character.name}</p>
          </div>
        )
      })}
      <button onClick={handleFormSubmit}>Search</button>
    </form>
  );
};
