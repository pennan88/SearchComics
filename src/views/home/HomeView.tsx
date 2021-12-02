import { useContext, useEffect } from "react";
import { RandomCharacter } from "../../components/RandomCharacter";
import { RandomComic } from "../../components/RandomComic";
import { RandomNumberContext } from "../../shared/provider/RandomNumberProvider";
import { RandomOffsetContext } from "../../shared/provider/RandomOffsetProvider";
import "../../styles/home.css";
export const HomeView = () => {
  const { setRandomNumber } = useContext(RandomNumberContext);
  const { setRandomOffset } = useContext(RandomOffsetContext);

  const randomNumberGen = () => {
    return setRandomNumber(Math.floor(Math.random() * 100));
  };

  const randomOffset = () => {
    return setRandomOffset(Math.floor(Math.random() * 1400));
  };

  useEffect(() => {
    randomNumberGen();
    randomOffset();
  }, []);
  return (
    <div className="homeWrapper">
      <div className="homeMainContainer">
        <RandomCharacter />
      </div>
      <div className="homeComicsContainer">
        <RandomComic />
        <RandomComic />
        <RandomComic />
      </div>
    </div>
  );
};
