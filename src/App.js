// Imported from local folders and files
import { useCharacters } from './hooks/useCharacters';
import { Home } from './components/Home';
import './App.css';

// Imported from outside resoucrs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const { fetchedAllCharacters, totalPageNumbers, count, isLoading, setIsLoading } =
    useCharacters(2, '', 'alive', 'male');
  console.log(fetchedAllCharacters, 'page: ', totalPageNumbers);
  return (
    <div>
      <Home
        fetchedAllCharacters={fetchedAllCharacters}
        totalPageNumbers={totalPageNumbers}
        count={count}
      />
    </div>
  );
}

export default App;
