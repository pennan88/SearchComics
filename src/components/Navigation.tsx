import { useNavigate } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import "../styles/navigation.css";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerBackground">
        <h1>Comic Search</h1>
      </div>
      <div className="innerHeader">
        <div className="navList">
          <p className="navItem" onClick={() => navigate(RoutingPath.homeView)}>
            Home
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.allHeroes)}
          >
            All heroes
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.searchHeroes)}
          >
            Search heroes
          </p>
        </div>
      </div>
    </div>
  );
};
