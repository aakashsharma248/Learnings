import "./styles.css";
import { ThemeContext } from "./ThemeContext";
import { Header } from "./Header.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ThemeContext.Provider value={"sharma"}>
        <Header />
      </ThemeContext.Provider>
    </div>
  );
}
