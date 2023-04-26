import "./App.scss";
import Footer from "./constants/Footer";
import NavBar from "./constants/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import NotFoundPage from "./components/NotFoundPage";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./components/GalleryPage";
import HomePage from "./components/HomePage";
import Feature from "./components/Feature";
import { useSelector } from "react-redux";
import Wedding from "./components/Wedding";
import Blogs from "./components/Blogs";
// import CardBlog from "./containers/page-blog/CardBlog";
import CardContent from "./containers/page-blog/CardContent";

function App() {
  const themeBg = useSelector((state) => state.page.theme);

  return (
    <div className={themeBg ? "bg-dark" : "bg-light"}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route
            exact
            path="/contact"
            element={<ContactPage themeBg={themeBg} />}
          />
          <Route exact path="/feature" element={<Feature />} />
          <Route exact path="/blog" element={<Blogs />}>
            <Route path="/blog/content/:id" element={<CardContent />} />
          </Route>
          <Route exact path="/wedding" element={<Wedding />} />
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
