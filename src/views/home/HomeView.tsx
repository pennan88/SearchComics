import { useContext, useEffect } from "react";
import { RandomCharacter } from "../../components/RandomCharacter";
import { RandomComic } from "../../components/RandomComic";
import { RandomNumContext } from "../../hooks/ContextRandomGen";
import "../../styles/home.css";
export const HomeView = () => {
  // const [randomNum, setRandomNum] = useState(0)
  const { setRandomNum } = useContext(RandomNumContext);

  const randomNumberGen = (max: number) => {
    return setRandomNum(Math.floor(Math.random() * max));
  };

  useEffect(() => {
    randomNumberGen(100);
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
