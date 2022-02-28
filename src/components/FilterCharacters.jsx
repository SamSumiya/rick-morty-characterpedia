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

  const handleChange = (value) => {
    setSearch(value);
  };


  console.log(search);
  setUsernameInput(search);
  
  const handleFilter = (event) => {
    event.preventDefault();

    const searchTerm = event.target.value;
    console.log(searchTerm, 'searchTerm');


    setSearch(searchTerm);
    console.log(search)
    // setUsernameInput(search);

    if (
      searchTerm === '' ||
      searchTerm === null ||
      search === '' ||
      search === null
    ) {
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

  // const newCharacters = [...fetchedAllCharacters]
  // const justNames = [] 
  // filteredCharacters.map((character) => {
  //   return justNames.push(character.name);
  // }); 

  // console.log(justNames, 'justName');
  // const currentIndex = justNames.indexOf(search); 
  // console.log(currentIndex, 'currentIndex'); 

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
          {filteredCharacters
            // .slice(0, currentIndex+2)
            .map((character) => {
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
            })}
        </div>
      )}
      <button onClick={handleFormSubmit}>Search</button>
    </form>
  );
};
