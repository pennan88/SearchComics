import { createContext } from "react";

export const RandomNumDefaultContext = {
  randomNum: 0,
  setRandomNum: (_randomNum: number) => {},
};
export const RandomNumContext = createContext(RandomNumDefaultContext);
