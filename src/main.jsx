import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MantineProvider, createTheme } from "@mantine/core";

import { Notifications } from "@mantine/notifications";

export function Main() {
  const theme = createTheme({
    fontFamily: "RobotoFlex"
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme} withGlobalStyles withNormalizeCSS>
      <Notifications />
      <App />
    </MantineProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

serviceWorker.unregister();
