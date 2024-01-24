import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// StrictMode is actually used for development phase so we need to
//

root.render(
  <StrictMode>
    <App />
    {/* this app is a component */}
  </StrictMode>,
);
// samarth notes
// webpacks = javascript bundlers i.e. these are vite
// react has a self virtual DOM and converts all the jsx elements to its virtual DOM
// react is based on components
// react is based on functions and classes
//
