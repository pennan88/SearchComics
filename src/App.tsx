import { Navigation } from "./components/Navigation";
import { Routes } from "./routes/Routes";
import "./styles/app.css";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Navigation />
      </Routes>
    </div>
  );
}

export default App;
