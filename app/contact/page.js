"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mt-20 fade-in-text">
          Contact Me
        </h1>

        <div className="flex justify-center items-center my-24">
          <form className="bg-white p-12 border-2 border-black rounded-2xl shadow-[10px_10px_0_rgba(0,0,0,0.7)] max-w-2xl w-full pr-16 md:pr-5 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-bold text-sm text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-11/12 p-5 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-bold text-sm text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-11/12 p-5 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 font-bold text-sm text-gray-700"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-11/12 p-5 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-bold text-sm text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-11/12 p-5 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
