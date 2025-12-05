'use client';
import { useState } from "react";
import { Menu, X, Sun, Moon, Rocket, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NavbBar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/about" },
    { name: "Contact", href: "/reusme" },
  ];

  return (
    <header className=" top-0 left-0 w-full z-50 bg-white/40 dark:bg-black/40 backdrop-blur-xl border-b border-white/20 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <Rocket className="text-blue-600 dark:text-blue-400" />
          <span className="text-2xl font-extrabold">
            <Link href="/">
            
                        Omar.dev
    
            
            </Link>
            
            
            
            </span>
        </motion.div>

        {/* Desktop Links */}
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
          <a href="https://github.com/omar-moussa-hup" target="_blank" className="hover:scale-110 transition-transform">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/engomarsamy1?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" className="hover:scale-110 transition-transform">
            <Linkedin />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border dark:border-white/20 hover:rotate-12 transition-transform"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
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
            className="md:hidden bg-white k px-6 py-8 space-y-6 border-t border-white/20 dark:border-white/10"
          >
            {links.map((link, i) => (
              
              <Link href={link.href} key={i} onClick={() => setOpen(false)} className="block text-xl font-semibold hover:text-blue-500">

              {link.name}


              </Link>
              
              
              
       
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full py-2 border rounded-xl dark:border-white/20"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            {/* Mobile Socials */}
            <div className="flex gap-6 pt-4">
              <Github className="cursor-pointer" />
              <Linkedin className="cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
