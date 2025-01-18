import "./App.css";
import { Routes, Route } from "react-router-dom";
import CraftCoffeePage from "./pages/CraftCoffeePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CraftCoffeePage />} />
      </Routes>
    </div>
  );
}

export default App;
