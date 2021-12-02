import { useContext, useEffect, useState } from "react";
import MarvelService from "../shared/api/services/marvelapi/MarvelService";
import { RandomOffsetContext } from "../shared/provider/RandomOffsetProvider";
import { Display } from "./Display";
import { Loader } from "./Loader";

export const RandomComic = () => {
  const [comic, setComic] = useState() as any;
  const [loading, setLoading] = useState<boolean>(false);

  const { randomOffset } = useContext(RandomOffsetContext);
  const getComics = async () => {
    try {
      setLoading(true);
      const { data } = await MarvelService.getRandomComic(randomOffset);
      console.log(data);
      setComic(data.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComics();
  }, []);
  if (!loading) {
    return (
      <div className="comicGridItem">
        <Display path={comic} />
      </div>
    );
  } else {
    return <Loader />;
  }
};
