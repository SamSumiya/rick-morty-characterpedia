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
    const count = responseData.info.count;
    const fetchCharacters = responseData.results;
    return { totalPages, fetchCharacters, count };
  } catch (error) {
    console.error(error);
  }
};
