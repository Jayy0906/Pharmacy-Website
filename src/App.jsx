import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import ScrollToTopButton from "./Component/ScrollToTopButton";

// Lazy-loaded components
const Home = lazy(() => import("./Component/Home"));
const About = lazy(() => import("./Component/About"));
const Service = lazy(() => import("./Component/Service"));
const Contact = lazy(() => import("./Component/Contact"));
const Mail = lazy(() => import("./Component/Mail"));
const AddProduct = lazy(() => import("./Component/Product/Add"));
const SubProduct = lazy(() => import("./Component/Product/Sub"));
const MulProduct = lazy(() => import("./Component/Product/Mul"));
const NotFound = lazy(() => import("./Component/NotFound"));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <Suspense
        fallback={<div className="text-center mt-20 text-lg">Loading...</div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/product/sub" element={<SubProduct />} />
          <Route path="/product/mul" element={<MulProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
