"use client";

import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold shadow-dark bg-transparent sm:bg-white text-white sm:text-black cursor-pointer py-2 px-1 absolute lg:py-4 lg:px-4 md:text-sm md:py-1.5 md:px-3 "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <>
      <h2 className="text-6xl font-bold text-white mb-4 text-center mt-32 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="mt-4 w-full h-56  sm:h-screen relative flex items-center justify-center rounded-full bg-circularDarkSm md:bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold p-2 sm:p-4 md:p-8 shadow-dark bg-white text-light cursor-pointer xs:text-xs  "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="GatsbyJS" x="15vw" y="-12vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
}
