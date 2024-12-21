import "./styles.css";
import { lazy, Suspense } from "react";
// import Contact from "./Contact";
import Home from "./Home";

const Contact = lazy(() => delayForDemo(import("./Contact.js")));

console.log(import("./Contact.js"));
export default function App() {
  return (
    <div className="App">
      <h2>Lazy loading and Code Splitting</h2>
      <Suspense fallback={"Hello World"}>
        <Contact />
      </Suspense>
      <Home />
    </div>
  );
}

const delayForDemo = (importData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  }).then(() => importData);
};
