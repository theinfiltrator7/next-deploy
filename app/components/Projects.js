import Image from "next/image";
import Link from "next/link";

import CryptoImage from "/public/crypto-screener-cover-image.png";
import NFTImage from "/public/nft-collection-website-cover-image.png";
import Github from "/public/github.png";

export default function Projects() {
  return (
    <section className="container mx-auto px-4">
      <h1 className="text-6xl font-bold text-white mb-4 mt-8 text-center">
        Imagination Trumps Knowledge!
      </h1>

      <div className="projects-section-container mt-16">
        <div className="project-big-container grid grid-cols-1 lg:grid-cols-2 bg-white border-2 border-black rounded-2xl shadow-lg p-5 mx-5 lg:mx-0 my-10">
          <div className="project-big-image flex justify-center items-center overflow-hidden rounded-xl ml-5 mr-2 lg:ml-10 lg:mr-5">
            <Image
              src={CryptoImage}
              alt="Crypto Screener"
              width={600}
              height={400}
              className="w-4/5 transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className="project-text-container flex flex-col justify-center pl-10 pr-5 lg:pl-16 lg:pr-5 leading-relaxed">
            <h3 className="text-xl font-light text-pink-600">
              Featured Project
            </h3>
            <h2 className="text-3xl font-extrabold mt-4">
              Crypto Screener Application
            </h2>
            <p className="mt-4 text-lg">
              A feature-rich Crypto Screener App using React, Tailwind CSS,
              Context API, React Router, and Recharts. It shows details
              regarding almost all the cryptocurrencies. You can easily convert
              the price into your local currency.
            </p>
            <div className="project-big-button-wrapper mt-8 flex">
              <Link href="#">
                <Image
                  src={Github}
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="social-logo cursor-pointer"
                />
              </Link>
              <button className="bg-black text-white font-bold text-sm py-2 px-4 ml-10">
                Visit Project
              </button>
            </div>
          </div>
        </div>

        <div className="project-normal-container-wrapper grid grid-cols-1 md:grid-cols-2 gap-20 my-24">
          <div className="project-normal-container bg-white border-2 border-black rounded-2xl shadow-lg p-5">
            <div className="project-normal-image-wrapper flex justify-center items-center overflow-hidden rounded-lg">
              <Image
                src={NFTImage}
                alt="NFT Collection Website"
                width={600}
                height={400}
                className="w-[35vw] transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-light text-pink-600 mt-5">
              Website Template
            </h3>
            <h2 className="text-3xl font-extrabold mt-2">
              NFT Collection Website
            </h2>
            <div className="flex justify-between mt-4">
              <Link href="#" className="text-lg underline">
                Visit
              </Link>
              <Image
                src={Github}
                alt="GitHub"
                width={30}
                height={30}
                className="social-logo cursor-pointer"
              />
            </div>
          </div>

          <div className="project-normal-container bg-white border-2 border-black rounded-2xl shadow-lg p-5">
            <div className="project-normal-image-wrapper flex justify-center items-center overflow-hidden rounded-lg">
              <Image
                src={NFTImage}
                alt="NFT Collection Website"
                width={600}
                height={400}
                className="w-[35vw] transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-light text-pink-600 mt-5">
              Website Template
            </h3>
            <h2 className="text-3xl font-extrabold mt-2">
              NFT Collection Website
            </h2>
            <div className="flex justify-between mt-4">
              <Link href="#" className="text-lg underline">
                Visit
              </Link>
              <Image
                src={Github}
                alt="GitHub"
                width={30}
                height={30}
                className="social-logo cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
