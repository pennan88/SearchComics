import { useContext, useEffect, useState } from "react";
import PlaceHolader from "../shared/images/placeholder.png";
import MarvelService from "../shared/api/services/marvelapi/MarvelService";
import { RandomNumberContext } from "../shared/provider/RandomNumberProvider";
import { RandomOffsetContext } from "../shared/provider/RandomOffsetProvider";
import { Loader } from "./Loader";

export const RandomCharacter = () => {
  const [characters, setCharacters] = useState([]) as any;
  const [copyWrite, setCopyWrite] = useState() as any;
  const [loading, setLoading] = useState<boolean>(false);
  const { randomNumber } = useContext(RandomNumberContext);
  const { randomOffset } = useContext(RandomOffsetContext);

  const getCharacters = async () => {
    try {
      setLoading(true);
      const { data } = await MarvelService.getRandomCharacters(randomOffset);
      console.log(await MarvelService.getRandomCharacters(randomOffset));
      setCharacters(data.data.results);
      setCopyWrite(data.attributionText);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  if (!loading) {
    return (
      <>
        <div className="homeImageContainer">
          <img
            src={
              characters?.[randomNumber]?.thumbnail?.path +
              "/portrait_uncanny.jpg"
            }
            alt="No available image "
          />
        </div>
        <div className="homeContentContainer">
          <h1>{characters[randomNumber]?.name}</h1>
          <div className="homeInnerContentContainer">
            <p>
              {characters[randomNumber]?.description
                ? characters[randomNumber]?.description
                : "No available description"}
            </p>
          </div>
          <div className="homeSecondConetentContainer">
            <div className="ctn-btn">
              <p>Learn more!</p>
            </div>
            <p>{copyWrite}</p>
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
};
