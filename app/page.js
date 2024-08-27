"use client";

import Image from "next/image";
import { useState } from "react";

import Modal from "./components/Modal";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroImage from "/public/main.png";
import Link from "next/link";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  function modalToggleHandler() {
    setShowModal((prevState) => !prevState);
  }
  return (
    <>
      <Modal isOpen={showModal} />

      <Header onModalToggleHandler={modalToggleHandler} />
      <div className="flex flex-col lg:flex-row items-center justify-center  lg:mt-12 mb-8 px-4 sm:px-6 lg:px-24">
        <div className="flex mt-10 md:hidden lg:block xl:flex-shrink-0 lg:mr-8">
          <Image src={HeroImage} alt="Profile Image" className="rounded-full" />
        </div>

        <div className="text-center md:mt-32 md:px-14 lg:px-0 lg:text-left  w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Turning Vision Into Reality With Code And Design.
          </h1>
          <p className="text-gray-300 mb-6">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="#"
              className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Resume
            </a>
            <a
              href="#"
              className="bg-transparent border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
