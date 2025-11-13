import Hero from "../components/Hero";
import Capabilities from "../components/Capabilities";
import Highlights from "../components/Highlights";
import About from "../components/About";
import Contact from "../components/Contact";
import "../index.css";

const Home = () => {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
    </main>
  );
};

export default Home;
