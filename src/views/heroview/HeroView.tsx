import { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import MarvelService from "../../shared/api/services/marvelapi/MarvelService";
import { HeroIdContext } from "../../shared/provider/HeroIdProvider";
import "../../styles/heroview.css";

const HeroView = () => {
  const { heroId } = useContext(HeroIdContext);
  const [hero, setHero] = useState<AxiosResponse>() as any;

  const fetchHero = async () => {
    try {
      const { data } = await MarvelService.getSpcificHero(heroId);
      console.log(data.data.results[0]);
      setHero(data.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHero();
  }, []);
  return (
    <div className="heroWrapper">
      <div className="heroContainer">
        <div className="heroImageContainer">
          <img
            src={hero ? hero.thumbnail.path + "/portrait_uncanny.jpg" : ""}
            alt=""
          />
        </div>
        <div className="heroContentContainer">
          <h3>{hero?.name}</h3>
          <p>{hero?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
