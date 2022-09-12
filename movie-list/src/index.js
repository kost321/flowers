import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import { store } from "./app/store";
import App from "./App";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StyledEngineProvider>
);
