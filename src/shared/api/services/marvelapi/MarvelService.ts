import http from "../../MarvelAPI";

const getRandomCharacters = () => {
  return http.get("/characters?limit=100");
};

const getRandomComic = () => {
  return http.get("/comics?limit=100");

}
export default {
  getRandomCharacters,
  getRandomComic
};
