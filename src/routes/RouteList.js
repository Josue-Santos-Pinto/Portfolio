import { Routes, Route } from "react-router-dom";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
