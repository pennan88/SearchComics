import { createContext, useState } from "react";

const HeroIdDefaultContext = {
  heroId: 0,
  setHeroId: (_heroId: number) => {},
};

export const HeroIdContext = createContext(HeroIdDefaultContext);

export const HeroIdProvider = ({ children }: any) => {
  const [heroId, setHeroId] = useState(HeroIdDefaultContext.heroId);

  return (
    <HeroIdContext.Provider value={{ heroId, setHeroId }}>
      {children}
    </HeroIdContext.Provider>
  );
};
