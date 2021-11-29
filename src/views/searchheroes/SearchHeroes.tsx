import { useEffect, useState } from "react";
import { SearchCharacter } from "../../components/SearchCharacter";
import MarvelService from "../../shared/api/services/marvelapi/MarvelService";
import "../../styles/searchherores.css";

export const SearchHeroes = () => {
  const [characterName, setCharacterName] = useState([]) as any;

  const searchCharacter = async () => {
    try {
      const { data } = await MarvelService.searchCharacter("Spider");
      console.log(data.data);
      setCharacterName(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    searchCharacter();
    console.log(characterName);
  }, []);
  return (
    <div className="searchWrapper">
      <input type="text" onChange={(e) => setCharacterName(e.target.value)} />

      <div className="characterGrid">
        {characterName?.results?.map(
          ({ name, decription, thumbnail, i }: any) => {
            return (
              <div key={i} className="gridItem">
                <SearchCharacter
                  image={thumbnail.path}
                  description={decription}
                  name={name}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
