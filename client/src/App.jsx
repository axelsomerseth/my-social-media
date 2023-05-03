import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Header from "./core/Header";
import NotFound from "./routes/NotFound";
import Footer from "./core/Footer";
import SignUpModal from "./components/auth/SignUpModal";
import SignInModal from "./components/auth/SignInModal";
import FindGithubUser from "./routes/FindGithubUser";
import MyGithubDataPage from "./routes/MyGithubDataPage";
import MyFacebookDataPage from "./routes/MyFacebookDataPage";
import RedirectPage from "./routes/RedirectPage";
import useLocalStorage from "./lib/auth/hooks/use-local-storage";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import ListTracks from "./components/tracks/ListTracks";

export const UserContext = createContext();

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const [user, setUser] = useState(null);
  const [userPersisted, setUserPersisted] = useLocalStorage("user", null);

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  // On mount.
  useEffect(() => {
    // User data is persisted in local storage.
    if (userPersisted) {
      setUser(() => userPersisted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refreshing when 'user' and 'userPersisted' change.
  useEffect(() => {
    // User signed in.
    if (user) {
      setUserPersisted(() => user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Header />
          <main>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="tracks" element={<ListTracks />} />
                <Route path="find-github-user" element={<FindGithubUser />} />
                <Route path="my-github-data" element={<MyGithubDataPage />} />
                <Route
                  path="my-facebook-data"
                  element={<MyFacebookDataPage />}
                />
                <Route path="sign-up" element={<SignUpModal />} />
                <Route path="sign-in" element={<SignInModal />} />
                <Route path="oauth">
                  <Route path="redirect" element={<RedirectPage />} />
                </Route>
                {/* <Route path="links"> */}
                {/* <Route exact path="new" element={<></>} /> */}
                {/* <Route exact path=":linkId" element={<></>} /> */}
                {/* <Route exact path=":linkId/edit" element={<></>} /> */}
                {/* </Route> */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </UserContext.Provider>
  );
}

export default App;
