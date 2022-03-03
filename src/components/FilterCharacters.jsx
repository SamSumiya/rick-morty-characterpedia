import '../styles/FilterCharacters.css';
import { useState, useEffect, useRef } from 'react';

export const FilterCharacters = ({
  setUsernameInput,
  fetchedAllCharacters,
  setFilterCharacters,
  setUserStatusInput,
  setUserGenderInput,
  setUserSpeciesInput,
  setUserTypeInput,
  isLoading,
  setIsLoading,
}) => {
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [nonDupChacters, setNonDupCharacters] = useState([]);

  console.log(fetchedAllCharacters);

  const handleReset = () => {
    setUsernameInput('');
    setFilterCharacters('');
    setUserStatusInput('');
    setUserGenderInput('');
    setUserSpeciesInput('');
    setUserTypeInput('');
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleReset();
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

  const selectUserInputRef = useRef(); 
  const selectStatusRef = useRef();
  const selectGenderRef = useRef();
  const selectSpeciesRef = useRef();
  const selectTypeRef = useRef();

  const onClear = () => {
    selectUserInputRef.current.value = ' ';
    setSearch('')
    selectStatusRef.current.innerHTML = `
      <option value="">Status</option> 
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    `;
    selectGenderRef.current.innerHTML = ` 
      <option value="">Gender</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    `;
    selectSpeciesRef.current.innerHTML = `
      <option value="">Species</option>
      <option value="human">Human</option>
      <option value="alien">Alien</option>
      <option value="humanoid">Humanoid</option>
      <option value="poopybutthole">Poopybutthole</option>
      <option value="mythological">Mythological</option>
      <option value="animal">Animal</option>
      <option value="disease">Disease</option>
      <option value="robot">Robot</option>
      <option value="cronenberg">Cronenberg</option>
      <option value="unknown">Unknown</option>
    `;
    selectTypeRef.current.innerHTML = ` 
      <option value="">Type</option>
      <option value="Bird-Person">Bird-Person</option>
      <option value="Monster">Monster</option>
      <option value="Superhuman">Superhuman</option>
      <option value="planet">Planet</option>
      <option value="Clone">Clone</option>
    `;
  };

  const handleFilter = (event) => {
    event.preventDefault();

    const searchTerm = event.target.value;
    setSearch(searchTerm);

    if (searchTerm === null || search === null) {
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
    setIsLoading(true);
    fetchedAllCharacters.filter((character) => {
      if (!arrayOfNames.includes(character.name)) {
        arrayOfNames.push(character.name);
      }
      setNonDupCharacters(arrayOfNames);
    });
    setIsLoading(false);
  }, [search, fetchedAllCharacters, setIsLoading]);
  if (isLoading) {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif"
          alt="background spinner graphic"
        />
      </div>
    );
  }
  console.log(search);
  return (
    <form className="form-wrapper" onSubmit={handleFormSubmit}>
      <input
        type="search"
        placeholder="Search for a character"
        ref={selectUserInputRef}
        value={search}
        onChange={handleFilter}
      />
      {search !== '' && (
        <div className="search-characterNames">
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
      <select
        className="form-field"
        type="dropdown"
        name="status"
        onChange={(event) => {
          setUserStatusInput(event.target.value);
        }}
        ref={selectStatusRef}
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="form-field"
        type="dropdown"
        name="gender"
        ref={selectGenderRef}
        onChange={(event) => {
          setUserGenderInput(event.target.value);
          // reset();
        }}
      >
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="form-field"
        type="dropdown"
        name="species"
        ref={selectSpeciesRef}
        onChange={(event) => {
          setUserSpeciesInput(event.target.value);
        }}
      >
        <option value="">Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="humanoid">Humanoid</option>
        <option value="poopybutthole">Poopybutthole</option>
        <option value="mythological">Mythological</option>
        <option value="animal">Animal</option>
        <option value="disease">Disease</option>
        <option value="robot">Robot</option>
        <option value="cronenberg">Cronenberg</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="form-field"
        type="dropdown"
        name="type"
        ref={selectTypeRef}
        onChange={(event) => {
          setUserTypeInput(event.target.value);
        }}
      >
        <option value="">Type</option>
        <option value="Bird-Person">Bird-Person</option>
        <option value="Monster">Monster</option>
        <option value="Superhuman">Superhuman</option>
        <option value="planet">Planet</option>
        <option value="Clone">Clone</option>
      </select>
      <div className="reset-button-wrapper">
        <button onClick={onClear} className="reset-button">
          {' '}
          reset{' '}
        </button>
      </div>
    </form>
  );
};
