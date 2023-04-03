import "./App.scss";
import Footer from "./constants/Footer";
import Header from "./constants/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import NotFoundPage from "./components/NotFoundPage";
import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route
            path="/*"
            element={
              <React.Fragment>
                <NotFoundPage />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
