import http from "../../MarvelAPI";

const getRandomCharacters = (offset: any) => {
  return http.get(`/characters?limit=100&offset=${offset}`);
};

const getRandomComic = (offset: any) => {
  return http.get(`/comics?limit=100&offset=${offset}`);
};

const searchCharacter = (name: string | undefined) => {
  return http.get(`/characters?nameStartsWith=${name}`);
};

const getSpcificHero = (id: number) => {
  return http.get(`/characters/${id}`);
};
export default {
  getRandomCharacters,
  getRandomComic,
  searchCharacter,
  getSpcificHero,
};
