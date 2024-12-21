import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"
import App from "./App";
import store from "./Store/Store"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


// fetch redux store from Store and pass it into the provider

root.render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
);
