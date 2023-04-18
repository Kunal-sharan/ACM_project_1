import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Featurebar from "./components/Featurebar1";
import Tools from "./components/Tools";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Description />
      <Featurebar />
      <Tools />
    </div>
  );
}

export default App;
