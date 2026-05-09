"use client";
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4 shadow-xl" : "bg-transparent py-6"}`}
      style={{ borderBottom: `1px solid ${isScrolled ? "rgba(255, 255, 255, 0.05)" : "transparent"}` }}
    >
      <div className="container flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-bold uppercase text-[10px] tracking-[0.2em]">
          <button onClick={() => scrollToSection('search')} className="hover:text-primary transition-colors">Dominios</button>
          <button onClick={() => scrollToSection('hosting')} className="hover:text-primary transition-colors">Hosting</button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Precios</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="btn-secondary !py-3 !px-6 !text-[10px]">Log In</button>
          <button onClick={() => scrollToSection('pricing')} className="btn-boutique !py-3 !px-6 !text-[10px]">Comenzar</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col gap-6 animate-fade-in border-t border-white/5">
          <button onClick={() => scrollToSection('hero')} className="text-left py-2 font-bold uppercase tracking-tighter">Dominios</button>
          <button onClick={() => scrollToSection('hosting')} className="text-left py-2 font-bold uppercase tracking-tighter">Hosting</button>
          <button onClick={() => scrollToSection('pricing')} className="text-left py-2 font-bold uppercase tracking-tighter">Precios</button>
          <hr className="border-white/10" />
          <div className="flex flex-col gap-4">
            <button className="btn-secondary justify-center">Log In</button>
            <button onClick={() => scrollToSection('pricing')} className="btn-boutique justify-center">Comenzar Ahora</button>
          </div>
        </div>
      )}

    </nav>
  );
}
