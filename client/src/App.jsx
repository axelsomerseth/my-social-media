import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Header from "./core/Header";
import NotFound from "./routes/NotFound";
import Footer from "./core/Footer";
import SignUpModal from "./components/auth/SignUpModal";
import SignInModal from "./components/auth/SignInModal";
import FindGithubUser from "./routes/FindGithubUser";
import MyGithubDataPage from "./routes/MyGithubDataPage";
import RedirectPage from "./routes/RedirectPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="find-github-user" element={<FindGithubUser />} />
            <Route path="my-github-data" element={<MyGithubDataPage />} />
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
    </>
  );
}

export default App;
