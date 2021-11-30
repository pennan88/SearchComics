import { useEffect, useState } from "react";
import { SearchCharacter } from "../../components/SearchCharacter";
import MarvelService from "../../shared/api/services/marvelapi/MarvelService";
import "../../styles/searchherores.css";
import { useDebounce } from "../../hooks/useDebounce";

export const SearchHeroes = () => {
  const [characterName, setCharacterName] = useState([]) as any;
  const [search, setSearch] = useState<string>("");
  const searchTerm = useDebounce(search, 500);

  const searchCharacter = async () => {
    try {
      const { data } = await MarvelService.searchCharacter(search);
      console.log(data.data);
      setCharacterName(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    searchTerm && searchCharacter();
    console.log(characterName);
  }, [searchTerm]);

  return (
    <div className="searchWrapper">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <div className="characterGrid">
        {characterName?.results?.map(({ name, thumbnail, i }: any) => {
          return (
            <div key={i} className="gridItem">
              <SearchCharacter image={thumbnail.path} name={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
