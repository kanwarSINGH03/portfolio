"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TextCompletionAnimation from "@/components/TextCompletionAnimation";

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
            👋
          </motion.span>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-4">
        <div className="max-w-md">
          {" "}
          {/* ← limits to ~28rem */}
          <TextCompletionAnimation
            className="text-lg font-medium text-center"
            text={`Hi there! I’m Kanwar Pannu, a Computer Science student at the University of Saskatchewan. I am passionate about 🌐 Full Stack Web, 🤖 AI and 📱 Android development.`}
            speed={0.02}
            showCursor={true}
          />
        </div>
      </div>
    </section>
  );
}
