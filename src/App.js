import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/Navbar";
import { Project } from "./components/Projects";
import { SocialLinks } from "./components/SocialLinks";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Technologies />
      <Project />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
