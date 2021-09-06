// NPM Packages
import { useState } from "react";

// Project files
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import DesktopNavigation from "./components/DesktopNavigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import "./App.css"; // this goes inside proejct files

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState();

  // functions that only have the goal of calling other functiosn must not exist (avoid duplicate or unnecesary code)
  function toggleModal() {
    setShowModal(!showModal);
  }

  function setModalData(item) {
    console.log(JSON.stringify(item)); // no comments in production -1 (yes, -1 never put debug code in production is not professional)

    setModalItem(item);
    setShowModal(true);
  }
  return (
    <div className="App">
      {/* I saw a comment on the component tree regarding using media queries to handle this. That comment has a purpose here to explain how this 2 are hadled */}
      {/* We toggle between the mobile and desktop menus based on CSS properties. */}
      {/* You can even go one level further an create a component called Navigation that has this 2 subcomponents and then you can write the explaantion there */}
      <MobileNavigation />
      <DesktopNavigation />

      <Hero />
      <About />

      <Projects setModalData={setModalData} />
      {/* The logic of the toggle modal can be set here instead on toggleModal() */}
      {/* toggleModal={()=>setShowModal(!showModal)} */}
      {showModal && <Modal modalItem={modalItem} toggleModal={toggleModal} />}
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
