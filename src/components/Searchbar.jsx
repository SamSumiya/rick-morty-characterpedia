import '../styles/Searchbar.css';
import { useState, useEffect } from 'react';

export const SearchBar = ({ setUsernameInput }) => {
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
    </form>
  );
};
