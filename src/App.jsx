import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
