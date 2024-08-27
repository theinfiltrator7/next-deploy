"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

import Modal from "../components/Modal";

import { useState } from "react";

export default function Project() {
  const [showModal, setShowModal] = useState(false);
  function modalToggleHandler() {
    setShowModal((prevState) => !prevState);
  }
  return (
    <>
      <Modal isOpen={showModal} />

      <Header onModalToggleHandler={modalToggleHandler} />
      <Projects />
      <Footer />
    </>
  );
}
