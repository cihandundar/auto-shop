import React from "react";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/contact" component={Contact} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
