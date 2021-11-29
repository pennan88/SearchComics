import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Routes } from "./routes/Routes";
import { RandomNumberProvider } from "./shared/provider/RandomNumberProvider";
import { RandomOffsetProvider } from "./shared/provider/RandomOffsetProvider";
import "./styles/app.css";

function App() {
  return (
    <div className="wrapper">
      <RandomOffsetProvider>
        <RandomNumberProvider>
          <Routes>
            <Navigation />
          </Routes>
        </RandomNumberProvider>
      </RandomOffsetProvider>
    </div>
  );
}

export default App;
