import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { Ovo } from "next/font/google";
import { motion } from "motion/react";
const OvoFont = Ovo({ subsets: ["latin"], weight: ["400"] });
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <motion.div
        className="mt-20"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.suaysh_profile}
          alt=""
          className="rounded-full w-32"
        ></Image>
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={clsx(
          OvoFont.className,
          "flex items-end gap-2 text-xl md:text-2xl mb-3"
        )}
      >
        Hi! I'm Suyash Padwal
        <Image src={assets.hand_icon} alt="" className="w-6"></Image>
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={clsx(
          OvoFont.className,
          "text-3xl sm:text-6xl lg:text-[66px] "
        )}
      >
        Cross-platform app developer
        {/* app developer based in Pune. */}
        {/* Delivering scalable app solutions */}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={clsx(OvoFont.className, "max-w-2xl mx-auto ")}
      >
        I’m a passionate app developer with 2 years of hands-on experience
        building high-quality mobile and web applications.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="#contact"
          className="px-10 py-3 border border-white bg-black text-white rounded-full flex items-center gap-2"
        >
          contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4"></Image>
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          my resume
          <Image src={assets.download_icon} alt="" className="w-4"></Image>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
// I’m a passionate app developer with 2 years of hands-on experience
//       building high-quality mobile and web applications.I specialize in
//       creating smooth, responsive, and user-focused apps that not only look
//       great but also perform flawlessly.I focus on clean code, intuitive
//       design, and real-world results.
