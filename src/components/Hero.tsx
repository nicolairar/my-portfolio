"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

function Typewriter({ text, speed = 150 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const nextChar = text.charAt(index);
      if (nextChar) {
        setDisplayedText((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m{" "}
            <span className="text-blue-600">
              <Typewriter text="Nicolai" speed={300} />
            </span>
          </h1>
          <iframe
            src="https://radio.nicolairar.it/public/nico/embed?theme=dark"
            frameBorder="0"
            style={{ width: "100%", minHeight: "150px", border: "0" }}
          ></iframe>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            There is no cloud, it&apos;s just someone else&apos;s computer
          </p>

          <div className="flex justify-center space-x-4">
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
