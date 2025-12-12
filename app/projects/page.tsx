'use client' ;  
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";


const projects = [
  {
    title: "E-Commerce UI",
    description: "Fresh Cart – A responsive e‑commerce web app showcasing grocery products with a shopping cart, clean UI, and smooth navigation for desktop and mobile.",
    demo: "https://fresh-cart-jet-two.vercel.app/",
    github: "https://github.com/omar-moussa-hup/fresh-cart",
    IMG:''
  },
  {
    title: "Mealify",
    description: "Mealify‑Pied – A responsive web app showcasing meals, chefs, and gallery content, featuring a clean modern UI, smooth navigation, and optimized layout for desktop and mobile",
    demo: "https://mealify-pied.vercel.app/",
    github: "https://github.com/omar-moussa-hup/Mealify",
  },
  {
    title: "free game hub",
    description: "Free Games Platform – A responsive web app showcasing free online games with category filtering, dynamic data loading, and optimized performance using modern React best practices.",
    demo: "https://free-games-snowy.vercel.app/",
    github: "https://github.com/omar-moussa-hup/free-games",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl transition-all"
            >

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

              <div className="flex items-center gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Live <ExternalLink size={18} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Code <Github size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}