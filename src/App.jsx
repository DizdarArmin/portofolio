// NPM Packages
import { useState } from "react";

// Project files
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import "./App.css";
import Navigation from "./components/Navigation";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState("");
  function setModalData(item) {
    setModalItem(item);
    setShowModal(true);
  }
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Projects setModalData={setModalData} />
      <Modal modalItem={modalItem} modalState={[showModal, setShowModal]} />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
