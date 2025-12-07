
'use client';

import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 transition">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Contact Me
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-10">
          Feel free to reach out for collaborations or just to say hi 👋
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-16">
          
          <a
            href="mailto:youremail@gmail.com"
            className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 
                       text-zinc-900 dark:text-zinc-100 
                       border border-zinc-200 dark:border-zinc-800 
                       hover:scale-110 transition"
          >
            <Mail size={24} />
          </a>

          <a
            href="\https://github.com/omar-moussa-hup\"
            target="_blank\"
            className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 
                       text-zinc-900 dark:text-zinc-100 
                       border border-zinc-200 dark:border-zinc-800 
                       hover:scale-110 transition\"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com\"
            target="_blank\"
            className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 
                       text-zinc-900 dark:text-zinc-100 
                       border border-zinc-200 dark:border-zinc-800 
                       hover:scale-110 transition\"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Contact Box */}
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 
                        border border-zinc-200 dark:border-zinc-800 shadow-lg">
          <p className="text-zinc-900 dark:text-zinc-100 font-medium">
            📩 Email:  
            <span className="text-blue-600 dark:text-blue-400 ml-2">
              omarmoussaa152@gmail.com
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
