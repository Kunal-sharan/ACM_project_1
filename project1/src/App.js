import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Featurebar from "./components/Featurebar1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Featurebar />
    </div>
  );
}

export default App;
