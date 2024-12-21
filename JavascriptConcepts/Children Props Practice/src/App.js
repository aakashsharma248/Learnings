import "./styles.css";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <h2>Children Props in React</h2>
      <Contact>
        <About />
      </Contact>
      <Home com={<About />}>Working</Home>
    </div>
  );
}
