import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navigation";
import Footer from "../components/Footer";
1;
import ContactForm from "./contact";
import Various from "./various";
import Home from "./home";
import AboutPage from "./about/About";
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/various" element={<AboutPage />} />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
