import { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import Hero from "../../components/Hero";
import { Loader } from "../../components/Loader";
import MarvelService from "../../shared/api/services/marvelapi/MarvelService";
import { HeroIdContext } from "../../shared/provider/HeroIdProvider";
import "../../styles/heroview.css";

const HeroView = () => {
  const { heroId } = useContext(HeroIdContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [hero, setHero] = useState<AxiosResponse>() as any;
  const [copywrite, setCopywrite] = useState("");

  const fetchHero = async () => {
    try {
      setLoading(true);
      const { data } = await MarvelService.getSpcificHero(heroId);
      console.log(data);
      setHero(data.data.results[0]);
      setCopywrite(data.attributionText);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHero();
  }, []);
  if (!loading) {
    return (
      <div className="heroWrapper">
        <div className="heroContainer">
          <Hero
            thumbnail={hero?.thumbnail.path + "/portrait_uncanny.jpg"}
            name={hero?.name}
            description={hero?.description}
            url={hero?.urls[0].url}
            copywrite={copywrite}
          />
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default HeroView;
