import "./App.css";

import { useState } from "react";

import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import DesktopNavigation from "./components/DesktopNavigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState();

  function toggleModal() {
    setShowModal(!showModal);
  }

  function setModalData(item) {
    setModalItem(item);
    console.log(JSON.stringify(item));
    setShowModal(true);
  }
  return (
    <div className="App">
      <MobileNavigation />
      <DesktopNavigation />
      <Hero />
      <About />

      <Projects setModalData={setModalData} />
      {showModal && <Modal modalItem={modalItem} toggleModal={toggleModal} />}
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
