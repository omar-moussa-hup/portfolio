'use client';
import { useState } from "react";
import { Menu, X, Rocket, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="top-0 left-0 w-full z-50 bg-black backdrop-blur-xl text-white border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <Rocket className="text-blue-400" />
          <span className="text-2xl font-extrabold">
            <Link href="/">Omar.</Link>
          </span>
        </motion.div>

        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          {links.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link.href} className="hover:text-blue-500">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://github.com/omar-moussa-hup" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/engomarsamy1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black px-6 py-8 space-y-6 border-t border-white/20"
          >
            {links.map((link, i) => (
              <Link href={link.href} key={i} onClick={() => setOpen(false)} className="block text-xl font-semibold hover:text-blue-500">
                {link.name}
              </Link>
            ))}
            {/* Mobile Socials */}
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/omar-moussa-hup" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/engomarsamy1" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}