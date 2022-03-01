const URL = 'https://rickandmortyapi.com/api/character';

export const fetchAPICharactersInfo = async (
  pageNumber = 1,
  characterName = '',
  characterStatus = '',
  characterGender = '',
  characterType = '',
  characterSpecies = ''
) => {
  console.log(characterName);
  try {
    const response = await fetch(
      `${URL}/?page=${pageNumber}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&type=${characterType}&species=${characterSpecies}`
    );

    let responseData = await response.json();
    let totalPages;
    let count;
    let fetchCharacters;

    if (response.status === 404) {
      totalPages = 0;
      count = 0;
      fetchCharacters = [];
    } else {
      totalPages = responseData.info.pages;
      count = responseData.info.count;
      fetchCharacters = responseData.results;
    }

    return { totalPages, fetchCharacters, count };
  } catch (error) {
    console.error(error);
  }
};
