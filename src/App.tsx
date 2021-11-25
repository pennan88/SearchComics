import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { RandomNumContext, RandomNumDefaultContext } from "./hooks/ContextRandomGen";
import { Routes } from "./routes/Routes";
import "./styles/app.css";

function App() {
  const [randomNum, setRandomNum] = useState(RandomNumDefaultContext.randomNum)
  return (
    <div className="wrapper">
      <RandomNumContext.Provider value={{
        randomNum,
        setRandomNum
      }}>
      <Routes>
        <Navigation />
      </Routes>
      </RandomNumContext.Provider>
    </div>
  );
}

export default App;
