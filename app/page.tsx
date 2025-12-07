'use client';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (<>


    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 bg-gradient-to-b from-white dark:from-black to-white/10 dark:to-black/10"
    >
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Omar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
        >
          Frontend Developer specialized in React & Next.js. I build smooth, responsive and modern web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
          >
            View My Work <ArrowRight />
          </a>
        </motion.div>
      </div>
    </section>


     <section className="py-20 bg-white dark:bg-zinc-950 transition">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          I’m a frontend developer passionate about crafting clean, modern, and
          fast user interfaces using React, Next.js, and TailwindCSS.
          I enjoy building smooth experiences, solving UI problems,
          and turning ideas into real interactive products.
        </p>

        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mt-4">
          I’m always improving, always learning, and always pushing my work to
          look better and feel better. Coding is becoming my daily routine — 
          and I love every part of it.
        </p>

      </div>
    </section>

  </>


    
  );
}

















