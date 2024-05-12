"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa6";

const sourceCodeLink = "https://github.com/ranepaarth/next-photo-album";
const githubProfileLink = "https://github.com/ranepaarth";
const linkedInProfileLink = "https://linkedin.com/in/paarth-rane";

const HomePage = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Next photo album with Cloudinary
        </div>
        <div className="font-extralight text-base md:text-xl text-neutral-200 py-4 flex items-center space-x-2">
          A NextJs14 web application developed using cloudinary
        </div>
        <Link
          href="/gallery"
          className="bg-white rounded-full w-fit text-black px-4 py-2 uppercase hover:bg-neutral-100"
        >
          get started
        </Link>
      </motion.div>
      <footer className="fixed bottom-0 flex items-center justify-between p-4 text-neutral-300 w-full">
        <div className="text-sm">ranepaarth&copy;2024</div>
        <div className="flex items-center space-x-4 text-lg">
          <Link href={sourceCodeLink} target="_blank">
            <FaCode />
          </Link>
          <Link href={githubProfileLink} target="_blank">
            <FaGithub />
          </Link>
          <Link href={linkedInProfileLink} target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </footer>
    </AuroraBackground>
  );
};

export default HomePage;
