import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFund } from "./pages/PageNotFund";
import { Header } from "./components/Header";
import { Section_1 } from "./components/Section_1";
import { Section_2 } from "./components/Section_2";
import { Section_3 } from "./components/Section_3";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/Sub/1" element={<Section_1 />}></Route>
          <Route path="/Sub/2" element={<Section_2 />}></Route>
          <Route path="/Sub/3" element={<Section_3 />}></Route>

          <Route path="/*" element={<PageNotFund />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
