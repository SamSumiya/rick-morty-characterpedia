const URL = 'https://rickandmortyapi.com/api/character';

export const fetchAPICharactersInfo = async (
  pageNumber,
  characterName,
  characterStatus,
  characterGender,
  characterType,
  characterSpecies
) => {
  try {
    const response = await fetch(
      `${URL}/?page=${pageNumber}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&type=${characterType}&species=${characterSpecies}`
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
