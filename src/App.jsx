import "./App.css";

import { NavBar } from "./Component/NavBar";
import { Wheel } from "./Component/Wheel";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Wheel />
    </div>
  );
}

export default App;
