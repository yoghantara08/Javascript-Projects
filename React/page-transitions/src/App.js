import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

function App() {
  let location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
