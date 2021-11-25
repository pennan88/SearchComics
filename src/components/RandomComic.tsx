import { useContext, useEffect, useState } from "react";
import { RandomNumContext } from "../hooks/ContextRandomGen";
import PlaceHolader from "../shared/images/placeholder.png";
import MarvelService from "../shared/api/services/marvelapi/MarvelService";

export const RandomComic = () => {
  const [comic, setComic] = useState() as any;
  const { randomNum } = useContext(RandomNumContext);
  const getComics = async () => {
    try {
      const { data } = await MarvelService.getRandomComic();
      console.log(data.data.results);
      setComic(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComics();
  }, []);
  return (
      <>
    <div className="comicCardContainer">
    <img src={comic?.[randomNum]?.thumbnail?.path? comic?.[randomNum]?.thumbnail?.path + "/portrait_uncanny.jpg" : PlaceHolader} alt="No available image"></img>
    </div>
 
    </>
  );
};
