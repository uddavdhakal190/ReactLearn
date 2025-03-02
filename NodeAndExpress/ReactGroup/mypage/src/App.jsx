import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.querySelectorAll(".navigation a").forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

