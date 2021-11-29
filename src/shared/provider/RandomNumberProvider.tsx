import { createContext, useState } from "react";

const RandomNumDefaultContext = {
  randomNumber: 0,
  setRandomNumber: (_randomNum: number) => {},
};

export const RandomNumberContext = createContext(RandomNumDefaultContext);

export const RandomNumberProvider = ({ children }: any) => {
  const [randomNumber, setRandomNumber] = useState(
    RandomNumDefaultContext.randomNumber
  );

  return (
    <RandomNumberContext.Provider value={{ randomNumber, setRandomNumber }}>
      {children}
    </RandomNumberContext.Provider>
  );
};
