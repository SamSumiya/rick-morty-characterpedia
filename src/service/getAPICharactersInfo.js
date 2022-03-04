const URL = 'https://rickandmortyapi.com/api/character';

export const fetchAPICharactersInfo = async (
  pageNumber,
  characterName,
  characterStatus,
  characterGender,
  characterSpecies,
  characterType
) => {
  const pages = [1];
  pages.push(pageNumber);

  try {
    let response = await fetch(
      `${URL}/?page=${pageNumber}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&type=${characterType}&species=${characterSpecies}`
    );
    // let response;
    // if (characterType !== '') {
    //   response = await fetch(
    //     `${URL}/?page=${
    //       pageNumber > 1 ? pages[0] : null
    //     }&name=${characterName}&status=${characterStatus}&gender=${characterGender}&type=${characterType}&species=${characterSpecies}`
    //   );
    // }
    // else if (
    //   characterStatus !== '' ||
    //   characterSpecies !== '' ||
    //   characterGender !== ''
    // ) {
    //   response = await fetch(
    //     `${URL}/?page=${pageNumber}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&type=${characterType}&species=${characterSpecies}`
    //   );
    // } else {
    //   response = await fetch(
    //     `${URL}/?page=${pageNumber}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&type=${characterType}&species=${characterSpecies}`
    //   );
    // }

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

export const fetchAPICharacterDetailInfo = async (characterId) => {
  try {
    const response = await fetch(`${URL}/${characterId}`);
    const data = await response.json();
    const characterDetailInfo = await data;
    console.log(characterDetailInfo);
    return characterDetailInfo;
  } catch (error) {
    console.error(error);
  }
};
