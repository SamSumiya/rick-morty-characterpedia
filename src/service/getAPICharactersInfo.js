const URL = 'https://rickandmortyapi.com/api/character';

export const fetchAPICharactersInfo = async (
  pageNumber = 1,
  characterName = '',
  characterStatus = '',
  characterGender = '',
  characterSpecies = ''
) => {
  try {
    const response = await fetch(
      `${URL}/?page=${pageNumber}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&species=${characterSpecies}`
    );
    const responseData = await response.json();
    const totalPages = responseData.info.pages;
    const fetchCharacters = responseData.results;
    return { totalPages, fetchCharacters };
  } catch (error) {}
};

//  fetch(
//    `${URL}/?page=${pageNumber}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&species=${characterSpecies}`
//  )
//    .then((response) => response.json())
//    .then(console.log)
//    .catch((error) => console.log(error));
