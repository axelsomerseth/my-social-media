import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Header from "./core/Header";
import NotFound from "./routes/NotFound";
import Footer from "./core/Footer";
import MyGithubDataPage from "./routes/MyGithubDataPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="my-github-data" element={<MyGithubDataPage />} />
            {/* <Route path="sign-up" element={<SignUpModal />} /> */}
            {/* <Route path="sign-in" element={<SignInModal />} /> */}
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
