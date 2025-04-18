"use client";
import React from "react";
import { Ovo } from "next/font/google";
const OvoFont = Ovo({ subsets: ["latin"], weight: ["400"] });
import clsx from "clsx";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
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
        What I offer
      </motion.h4>
      <motion.h2
        className={clsx(OvoFont.className, "text-center text-5xl ")}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services
      </motion.h2>
      <motion.p
        className={clsx(
          OvoFont.className,
          "text-center max-w-2xl mx-auto mt-5 mb-12 "
        )}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I am an app developer from Pune, with 2 years of experience in BlitzCode
        Systems. I specialize in building user-friendly, high-performance mobile
        apps that solve real-world problems.
      </motion.p>

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className="border border-gray-400 rounded-lg px-6 py-12  cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-md shadow-black"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={icon} alt="" className="w-10"></Image>
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-gray-600 text-sm leading-5">{description}</p>

            <a href={link} className="flex itmes-center gap-2 text-sm mt-5">
              Read more
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
