import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { productReducer } from "./Store/productReducer.js";
import { createStore } from "redux";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(
  productReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
