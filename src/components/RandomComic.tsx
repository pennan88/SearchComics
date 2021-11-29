import { useContext, useEffect, useState } from "react";
import MarvelService from "../shared/api/services/marvelapi/MarvelService";
import { RandomOffsetContext } from "../shared/provider/RandomOffsetProvider";
import { Display } from "./Display";

export const RandomComic = () => {
  const [comic, setComic] = useState() as any;
  const { randomOffset } = useContext(RandomOffsetContext);
  const getComics = async () => {
    try {
      const { data } = await MarvelService.getRandomComic(49000);
      console.log(data);
      setComic(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComics();
  }, []);
  return (
    <div className="comicCardContainer">
      <Display path={comic} />
    </div>
  );
};
