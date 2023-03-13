import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";

// Styles
// import "./scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

// Bootstrap bundle
// import "bootstrap/dist/js/bootstrap.bundle";

// Configuring GraphQL connection with Apollo Client
const client = new ApolloClient({
  uri: process.env.REACT_APP_GITHUB_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

export const UserContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const [colorScheme, setColorScheme] = useState("light");
  const [user, setUser] = useState(null);

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ApolloProvider client={client}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </MantineProvider>
        </ColorSchemeProvider>
      </ApolloProvider>
    </UserContext.Provider>
  );
}

root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
