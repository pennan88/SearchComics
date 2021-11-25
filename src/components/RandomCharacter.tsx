import { useContext, useEffect, useState } from "react";
import { RandomNumContext } from "../hooks/ContextRandomGen";
import PlaceHolader from "../shared/images/placeholder.png";
import MarvelService from "../shared/api/services/marvelapi/MarvelService";

export const RandomCharacter = () => {
  const [characters, setCharacters] = useState([]) as any;
  const { randomNum } = useContext(RandomNumContext);

  const getCharacters = async () => {
    try {
      const { data } = await MarvelService.getRandomCharacters();
      console.log(data.data.results);
      setCharacters(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <div className="homeImageContainer">
        <img
          src={
            characters?.[randomNum]?.thumbnail?.path
              ? characters?.[randomNum]?.thumbnail?.path +
                "/portrait_uncanny.jpg"
              : PlaceHolader
          }
          alt="No available image "
        />
      </div>
      <div className="homeContentContainer">
        <h1>{characters[randomNum]?.name}</h1>
        <p>
          {characters[randomNum]?.description
            ? characters[randomNum]?.description
            : "No available description"}
        </p>
        <div className="homeSecondConetentContainer">
          <div className="ctn-btn">
            <p>Learn more!</p>
          </div>
        </div>
      </div>
    </>
  );
};
