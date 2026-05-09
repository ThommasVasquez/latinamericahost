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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4 shadow-xl" : "bg-transparent py-6"}`}
      style={{ borderBottom: `1px solid ${isScrolled ? "rgba(255, 255, 255, 0.05)" : "transparent"}` }}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-bold uppercase text-[10px] tracking-[0.2em]">
          <a href="#hero" className="hover:text-primary transition-colors">Dominios</a>
          <a href="#hosting" className="hover:text-primary transition-colors">Hosting</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="btn-secondary !py-3 !px-6 !text-[10px]">Log In</a>
          <a href="#" className="btn-boutique !py-3 !px-6 !text-[10px]">Comenzar</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col gap-6 animate-fade-in border-t border-white/5">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Dominios</a>
          <a href="#hosting" onClick={() => setIsMobileMenuOpen(false)}>Hosting</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Precios</a>
          <hr className="border-white/10" />
          <div className="flex flex-col gap-4">
            <a href="#" className="btn-secondary justify-center">Log In</a>
            <a href="#" className="btn-boutique justify-center">Comenzar Ahora</a>
          </div>
        </div>
      )}

    </nav>
  );
}
