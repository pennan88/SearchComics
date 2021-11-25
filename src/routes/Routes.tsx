import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { AllHeroes } from "../views/allheroes/AllHeroes";
import { HomeView } from "../views/home/HomeView";
import RoutingPath from "./RoutingPath";

export const Routes = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path={RoutingPath.homeView} element={<HomeView />} />
        <Route path={RoutingPath.allHeroes} element={<AllHeroes />} />
      </Switch>
    </BrowserRouter>
  );
};
