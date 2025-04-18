"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Ovo } from "next/font/google";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";

const OvoFont = Ovo({ subsets: ["latin"], weight: ["400"] });

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className={clsx(OvoFont.className, "text-center mb-2 text-lg ")}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className={clsx(OvoFont.className, "text-center text-5xl ")}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>
      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-60 sm:w-80 rounded-3xl max-w-none "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.suaysh_profile}
            className="w-full rounded-3xl"
            alt=""
          ></Image>
        </motion.div>
        <motion.div
          className="flex-1 -mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className={clsx(OvoFont.className, "mb-10 max-w-2xl")}>
            I'm a passionate app developer with 2 years of experience designing,
            developing, and delivering mobile applications that are fast and
            user-friendly. I specialize in building cross-platform apps using
            modern frameworks like React Native, ensuring seamless performance
            across both iOS and Android. Over the past 2 years, I’ve
            collaborated with teams, constantly learned to stay up-to-date with
            the latest in mobile technology.
          </p>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-md shadow-black"
                whileHover={{ scale: 1.05 }}
              >
                <Image src={icon} alt={title} className="w-7 mt-3"></Image>
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            className={clsx(OvoFont.className, "my-6 mt-10 text-gray-700")}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            className="flex items-center gap-3 sm:gap-5 -mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
                whileHover={{ scale: 1.1 }}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7 "></Image>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
