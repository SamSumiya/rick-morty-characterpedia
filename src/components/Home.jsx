import React from 'react'

import '../styles/Home.css'

export const Home = ({ fetchedAllCharacters, totalPageNumbers, count }) => {

  return (
    <>
      <div className="displayingCharacters-numbers-wrapper">
        <div className="displayingCharacters-found-numbers">
          {'·'} {count} {'characters found'} {'·'}
        </div>
        <div className="displayingCharacters-page-length">
          {`Showing ${fetchedAllCharacters.length}`}
        </div>
      </div>

      <div className="displayingCharacters-wrapper">
        {fetchedAllCharacters.map((character) => (
          <ul key={character.id} className="displayCharacters-character">
            <img src={character.image} alt={character.image} />
            <li className="displayCharacters-name">{character.name}</li>
            <li>{character.status}</li>
            <li>{character.species}</li>
            <button> Details </button>
          </ul>
        ))}
      </div>
    </>
  );
}
