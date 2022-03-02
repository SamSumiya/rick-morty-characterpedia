import '../styles/FilterCharacters.css';
import { useState, useEffect, useRef } from 'react';
// import { useForm } from 'react-hook-form';

export const FilterCharacters = ({
  setUsernameInput,
  fetchedAllCharacters,
  setFilterCharacters,
  setUserStatusInput,
  setUserGenderInput,
  setUserSpeciesInput,
  setUserTypeInput,
  // setCurrentPageNumber,
  // usernameInput,
  // userStatusInput,
  // userSpeciesInput,
  // userTypeInput,
  // userGenderInput,
  // setUpdatedCurrentPageNumber,
}) => {
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [nonDupChacters, setNonDupCharacters] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
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

  const handleReset = () => {
    // setUsernameInput('')
    setFilterCharacters('');
    setUserStatusInput('');
    setUserGenderInput('');
    setUserSpeciesInput('');
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
    fetchedAllCharacters.filter((character) => {
      if (!arrayOfNames.includes(character.name)) {
        arrayOfNames.push(character.name);
      }
      setNonDupCharacters(arrayOfNames);
    });
  }, [search, fetchedAllCharacters]);

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
      {/* <button onClick={handleFormSubmit}>Search</button> */}
      <label className="fom=label">Status</label>
      <select
        className="form-field"
        type="dropdown"
        name="status"
        // {...register('value_name')}
        onChange={(event) => {
          setUserStatusInput(event.target.value);
          // reset();
        }}
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
        // {...register('value_name')}

        onChange={(event) => {
          console.log(event.target.value, 'event.target.value');
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
        // {...register('value_name')}
        onChange={(event) => {
          setUserSpeciesInput(event.target.value);
          // reset();
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
        <option value="planet">Planet</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="form-field"
        type="dropdown"
        name="type"
        // {...register('value_name')}
        onChange={(event) => {
          setUserTypeInput(event.target.value);
          // reset();
        }}
      >
        <option value="">Type</option>
        <option value="Bird-Person">Bird-Person</option>
        <option value="Monster">Monster</option>
        <option value="Superhuman">Superhuman</option>
        <option value="Clone">Clone</option>
      </select>

      <button onClick={() => handleReset}> Reset </button>
    </form>
  );
};
