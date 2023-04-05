import "./App.scss";
import Footer from "./constants/Footer";
import NavBar from "./constants/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import NotFoundPage from "./components/NotFoundPage";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./components/GalleryPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
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
