import { useNavigate } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import "../styles/navigation.css";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="innerHeader">
        <div className="brand">
          <img src="" alt="Error" />
        </div>
        <div className="navList">
          <p className="navItem" onClick={() => navigate(RoutingPath.homeView)}>
            Hem
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.allHeroes)}
          >
            All heroes
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.allHeroes)}
          >
            Search heroes
          </p>
        </div>
      </div>
    </div>
  );
};
