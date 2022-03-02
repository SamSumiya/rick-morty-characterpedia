const URL = 'https://rickandmortyapi.com/api/character';

export const fetchAPICharactersInfo = async (
  pageNumber,
  characterName,
  characterStatus,
  characterGender,
  characterSpecies,
  characterType
) => {
  const pages = [1] 
  pages.push(pageNumber)

  console.log(pages, pageNumber, 'dadfdasfdasfsaf');

  try {
    let response;
    if (
      (
        // characterName !== '' ||
      characterStatus !== '' ||
      characterGender !== '' ||
      characterSpecies !== '' ||
      characterType !== '')
    ) {
      response = await fetch(
        `${URL}/?page=${
          pageNumber !== 1 ? pages[0] : null
        }&name=${characterName}&status=${characterStatus}&gender=${characterGender}&type=${characterType}&species=${characterSpecies}`
      );
    }
    else  {
      response = await fetch(
        `${URL}/?page=${pages[1]}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&type=${characterType}&species=${characterSpecies}`
      );
    }

    let responseData = await response.json();
    let totalPages;
    let count;
    let fetchCharacters;

    console.log(responseData, 'responseData!!!!!');

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
