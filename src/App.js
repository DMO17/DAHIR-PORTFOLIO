import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/Navbar";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Technologies />
    </div>
  );
}

export default App;
