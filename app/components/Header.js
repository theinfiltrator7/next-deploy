"use client";

import Image from "next/image";
import Link from "next/link";

import CircularLogo from "./CircularHire";

import BurgerIcon from "/public/menu_burger.png";
import Twitter from "/public/twitter.png";
import Github from "/public/github.png";
import Instagram from "/public/instagram.png";
import Linkedin from "/public/linkedin.png";
import Facebook from "/public/facebook.png";

export default function Header({ onModalToggleHandler }) {
  return (
    <header className="relative w-full text-white">
      <nav className="flex justify-between h-16 sm:mx-8 lg:mx-32">
        <div className=" lg:hidden py-4 " onClick={onModalToggleHandler}>
          <Image src={BurgerIcon} alt="burger icon" width={40} height={40} />
        </div>
        <div className="hidden lg:flex">
          <Link href="/" className="mx-4 text-white py-4 ">
            Home
          </Link>
          <Link href="/about" className="mx-4 text-white py-4">
            About
          </Link>
          <Link href="/project" className="mx-4 text-white py-4">
            Project
          </Link>
          <Link href="/contact" className="mx-4 text-white py-4">
            Contact Us
          </Link>
        </div>

        <div className="absolute inset-x-0 flex justify-center mt-6">
          <div className="flex items-center justify-center w-16 h-16 bg-black text-white text-3xl font-bold rounded-full">
            AB
          </div>
        </div>

        <div className="hidden items-center space-x-4 lg:flex">
          <Link href="/about">
            <Image src={Twitter} alt="twitter icon" width={30} height={30} />
          </Link>
          <Link href="/about">
            <Image src={Github} alt="github icon" width={30} height={30} />
          </Link>
          <Link href="/about">
            <Image src={Linkedin} alt="linkedin icon" width={30} height={30} />
          </Link>
          <Link href="/about">
            <Image
              src={Instagram}
              alt="instagram icon"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/about">
            <Image src={Facebook} alt="facebook icon" width={30} height={30} />
          </Link>
        </div>
        <div className="mt-6 lg:hidden">
          <CircularLogo />
        </div>
      </nav>
    </header>
  );
}
