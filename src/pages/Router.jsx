import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navigation";
import Footer from "../components/Footer";
1;
import ContactForm from "./contact";
import Various from "./various";
import Home from "./home";
import AboutPage from "./about/About";
import NotFoundPage from "./not-found/NotFound";
import Project from "./project/Project";
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/various" element={<AboutPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<Project />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
