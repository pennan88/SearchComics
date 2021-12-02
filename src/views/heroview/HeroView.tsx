import { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import MarvelService from "../../shared/api/services/marvelapi/MarvelService";
import { HeroIdContext } from "../../shared/provider/HeroIdProvider";
import "../../styles/heroview.css";

const HeroView = () => {
  const { heroId } = useContext(HeroIdContext);
  const [hero, setHero] = useState<AxiosResponse>() as any;
  const [copywrite, setCopywrite] = useState("");

  const fetchHero = async () => {
    try {
      const { data } = await MarvelService.getSpcificHero(heroId);
      console.log(data);
      setHero(data.data.results[0]);
      setCopywrite(data.attributionText);
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
          <div className="heroNameContainer">
            <h3>{hero?.name}</h3>
          </div>
          <div className="heroDescriptionContainer">
            <p>
              {hero?.description
                ? hero?.description
                : "No available description"}
            </p>
          </div>
          <div className="heroAttributionContainer">
            <a
              href={hero?.urls[0].url}
              target="_blank"
              className="ctn-btn learn-more"
            >
              learn more
            </a>
            <p>{copywrite}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
