import { Navigation } from "./components/Navigation";
import { Routes } from "./routes/Routes";
import { HeroIdProvider } from "./shared/provider/HeroIdProvider";
import { RandomNumberProvider } from "./shared/provider/RandomNumberProvider";
import { RandomOffsetProvider } from "./shared/provider/RandomOffsetProvider";
import "./styles/app.css";

function App() {
  return (
    <div className="wrapper">
      <HeroIdProvider>
        <RandomOffsetProvider>
          <RandomNumberProvider>
            <Routes>
              <Navigation />
            </Routes>
          </RandomNumberProvider>
        </RandomOffsetProvider>
      </HeroIdProvider>
    </div>
  );
}

export default App;
