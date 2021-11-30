import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { AllHeroes } from "../views/allheroes/AllHeroes";
import HeroView from "../views/heroview/HeroView";
import { HomeView } from "../views/home/HomeView";
import { SearchHeroes } from "../views/searchheroes/SearchHeroes";
import RoutingPath from "./RoutingPath";

export const Routes = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path={RoutingPath.homeView} element={<HomeView />} />
        <Route path={RoutingPath.allHeroes} element={<AllHeroes />} />
        <Route path={RoutingPath.searchHeroes} element={<SearchHeroes />} />
        <Route path={RoutingPath.heroView} element={<HeroView />} />
      </Switch>
    </BrowserRouter>
  );
};
