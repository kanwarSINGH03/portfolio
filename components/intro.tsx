"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import TextCompletionAnimation from "@/components/TextCompletionAnimation";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/profile.png"}
              alt="portrait"
              width={"192"}
              height={"192"}
              quality={"95"}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🤖
          </motion.span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-4">
        <div className="max-w-md min-h-[10rem]">
          {" "}
          {/* ← limits to ~28rem */}
          <TextCompletionAnimation
            className="text-lg font-mono text-center"
            text={`Hi there! I’m Kanwar Pannu, a Computer Science student at the University of Saskatchewan. I am passionate about Full Stack Web 🌐, 🤖 AI and 📱 Android development.`}
            speed={0.01}
            showCursor={true}
          />
        </div>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "tween", ease: "easeOut", duration: 0.6 },
              },
            }}
            className="rounded-full bg-gray-900 text-white px-7 py-3 transition hover:bg-gray-950 hover:scale-110"
          >
            <Link href="#contact" className="flex items-center gap-2">
              Contact me here <BsArrowRight className="opacity-70" />
            </Link>
          </motion.div>

          <motion.a
            href="/Resume.pdf"
            download
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "tween", ease: "easeOut", duration: 0.6 },
              },
            }}
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full transition hover:shadow-md hover:scale-110"
          >
            Download Resume <HiDownload className="text-xl" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/kanwardeep-singh-pannu/"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "tween", ease: "easeOut", duration: 0.6 },
              },
            }}
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full transition hover:shadow-md hover:scale-110"
          >
            <BsLinkedin className="text-2xl" />
          </motion.a>

          <motion.a
            href="https://github.com/kanwarSINGH03"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "tween", ease: "easeOut", duration: 0.6 },
              },
            }}
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] transition hover:shadow-md hover:scale-110"
          >
            <FaGithubSquare className="text-2xl" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
