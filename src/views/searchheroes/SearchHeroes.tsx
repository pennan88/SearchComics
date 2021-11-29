import { SearchCharacter } from "../../components/SearchCharacter";
import "../../styles/searchherores.css";
export const SearchHeroes = () => {
  return (
    <div className="homeWrapper">
      <div className="searchInputContainer">
        <div className="searchInnerInputContainer">
          <input type="text" onSubmit={() => {}} className="searchInput" />
          <div className="search-btn">Search</div>
        </div>
      </div>
      <div className="searchContentContainer">
        <SearchCharacter />
      </div>
    </div>
  );
};
