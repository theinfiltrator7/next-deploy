"use client";

import Image from "next/image";

import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Counter from "../components/Counter";
import HeroImage from "/public/developer-pic-2.png";
import Experience from "../components/Experience";
import Modal from "../components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  function modalToggleHandler() {
    setShowModal((prevState) => !prevState);
  }
  return (
    <>
      <Modal isOpen={showModal} />
      <Header onModalToggleHandler={modalToggleHandler} />
      <main className="mx-8 my-12 sm:mx-14 ">
        <h1 className="text-6xl font-bold text-white mb-4 text-center">
          Passion Fuels Purpose!
        </h1>
        <div className="xl:flex">
          <div className="flex flex-col flex-row-reverse items-center gap-8 md:flex-row lg:mx-14">
            <div className="border-2 rounded-2xl  my-12	shadow-[7px_7px_1px_rgba(255,255,255)] p-8 md:w-1/2">
              <Image
                src={HeroImage}
                alt="Hero's Image"
                className="rounded-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold text-white mb-4">BIOGRAPHY</h2>
              <p className="text-base text-white">
                Hi, I'm <strong>CodeBucks</strong>, a web developer and UI/UX
                designer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients' visions to life. <br />
                <br />
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
                <br />
                <br />
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
          </div>
          <div className="flex justify-between text-center mt-10 sm:mt-20 xl:flex-col xl:min-w-40 xl:mr-8 lg:mx-8">
            <div>
              <Counter
                targetNumber={30}
                classLists="text-4xl sm:text-6xl font-bold text-white mb-4"
              />
              <h2 className="text-white text-center text-sm">
                Satisfied Clients
              </h2>
            </div>
            <div>
              <Counter
                targetNumber={10}
                classLists="text-4xl sm:text-6xl font-bold text-white mb-4"
              />
              <h2 className="text-white text-center text-sm">
                Projects Completed
              </h2>
            </div>
            <div>
              <Counter
                targetNumber={2}
                classLists="text-4xl sm:text-6xl font-bold text-white mb-4"
              />
              <h2 className="text-white text-center text-sm">
                Years of Experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
