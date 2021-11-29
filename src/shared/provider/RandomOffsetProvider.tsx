import { createContext, useState } from "react";

export const RandomOffsetDefualtContext = {
  randomOffset: 0,
  setRandomOffset: (_randomOffset: number) => {},
};

export const RandomOffsetContext = createContext(RandomOffsetDefualtContext);

export const RandomOffsetProvider = ({ children }: any) => {
  const [randomOffset, setRandomOffset] = useState(
    RandomOffsetDefualtContext.randomOffset
  );

  return (
    <RandomOffsetContext.Provider value={{ randomOffset, setRandomOffset }}>
      {children}
    </RandomOffsetContext.Provider>
  );
};
