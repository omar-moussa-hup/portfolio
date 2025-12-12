import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
  <section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-32 
             bg-gradient-to-b from-black to-zinc-900"
>
  <div className="max-w-4xl text-center">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-extrabold mb-6 text-white"
    >
      Hi, I'm <span className="text-blue-400">Omar</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed"
    >
      Frontend Developer specialized in React & Next.js. I build smooth,
      responsive and modern web experiences.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex justify-center"
    >
      <a
        href="/projects"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg 
                   font-semibold bg-blue-500 text-white hover:bg-blue-600 
                   transition-all shadow-lg hover:shadow-xl"
      >
        View My Work <ArrowRight />
      </a>
    </motion.div>
  </div>
</section>

  );
}