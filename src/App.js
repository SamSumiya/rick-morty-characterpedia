// Imported from local folders and files
import { useCharacters } from './hooks/useCharacters';
import './App.css';

// Imported from outside resoucrs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const { fetchedAllCharacters, totalPageNumbers, isLoading, setIsLoading } =
    useCharacters(2, '', 'dead', 'female');
  console.log(fetchedAllCharacters, 'page: ', totalPageNumbers);
  return (
    <div className="displayingCharacters-wrapper">
      {fetchedAllCharacters.map((character) => (
        <ul key={character.id} className="displayCharacters-character">
          <img src={character.image} alt={character.image} />
          <li>{character.name}</li>
          <li>{character.status}</li>
          <li>{character.species}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
