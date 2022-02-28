import '../styles/FilterCharacters.css';
import { useState, useEffect } from 'react';

export const FilterCharacters = ({ setUsernameInput, setPageNumber }) => {
  const [search, setSearch] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setUsernameInput(search);
  }, [search, setUsernameInput]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setPageNumber(1);
  };


  return (
    <form className="input-wrapper" onSubmit={handleFormSubmit}>
      <input
        type="search"
        placeholder="Search for a character"
        onChange={handleChange}
      />
      <button onClick={handleFormSubmit}>Search</button>
    </form>
  );
};
