import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { SearchCharacter } from "../../components/SearchCharacter";
import { useDebounce } from "../../hooks/useDebounce";
import RoutingPath from "../../routes/RoutingPath";
import MarvelService from "../../shared/api/services/marvelapi/MarvelService";
import { HeroIdContext } from "../../shared/provider/HeroIdProvider";
import "../../styles/searchherores.css";

export const SearchHeroes = () => {
  const [characterName, setCharacterName] = useState() as any;
  const [search, setSearch] = useState<string>("Spider");
  const [loading, setLoading] = useState<boolean>(false);
  const { setHeroId } = useContext(HeroIdContext);
  const searchTerm = useDebounce(search, 500);
  const navigate = useNavigate();

  const searchCharacter = async () => {
    try {
      setLoading(true);
      const { data } = await MarvelService.searchCharacter(search);
      console.log(data.data);
      setCharacterName(data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const resetSearch = () => {
    search === "" && setSearch("Spider");
  };

  const handleClick = (id: number) => {
    setHeroId(id);
    navigate(RoutingPath.heroView);
  };

  useEffect(() => {
    searchTerm && searchCharacter();
    resetSearch();
  }, [searchTerm]);

  const Loaded = () => {
    if (!loading) {
      return (
        <div className="characterGrid">
          {characterName?.results?.map(({ name, thumbnail, id, i }: any) => {
            return (
              <div key={i} className="gridItem">
                <SearchCharacter
                  image={thumbnail.path}
                  name={name}
                  click={() => handleClick(id)}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return <Loader />;
    }
  };

  return (
    <div className="searchWrapper">
      <input
        type="text"
        placeholder="Start typing"
        onChange={(e) => setSearch(e.target.value)}
      />
      {Loaded()}
    </div>
  );
};
