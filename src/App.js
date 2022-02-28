// Imported from local folders and files
import { useCharacters } from './hooks/useCharacters';
import { SearchBar } from './components/Searchbar.jsx';
import { Home } from './components/Home';

import './App.css';

// Imported from outside resoucrs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [usernameInput, setUsernameInput] = useState('');
  console.log(usernameInput);
  const {
    fetchedAllCharacters,
    totalPageNumbers,
    count,
    isLoading,
    noDataFound,
  } = useCharacters(1, usernameInput);

  if (isLoading) {
    return (
      <img
        src="https://media2.giphy.com/media/9JwUhPDEGmhbWgCMEZ/source.gif"
        alt="spinning Rick Head"
      />
    );
  }

  return (
    <div>
      <SearchBar setUsernameInput={setUsernameInput} />
      <Home
        fetchedAllCharacters={fetchedAllCharacters}
        totalPageNumbers={totalPageNumbers}
        count={count}
        userInput={usernameInput}
      />
    </div>
  );
}

export default App;
