"use client";
import { Search, ArrowRight, Zap, Globe, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8 animate-slide-up">
            <div className="badge">Latin Host Inc // 2026</div>
            <h1 className="text-7xl md:text-[9rem] font-bold mb-10 leading-none tracking-tighter">
              DOMINIOS <br />
              <span className="text-primary">& HOSTING</span> <br />
              BRUTAL.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted max-w-xl mb-12 font-medium">
              Alojamiento de alta costura para la web moderna. 
              Sin adornos innecesarios. Solo velocidad, seguridad y un servicio que realmente entiende a Latinoamérica.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-boutique">
                Explorar Hosting
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary border-none bg-surface/80 font-bold px-8 rounded-none">
                Ver Dominios
              </button>
            </div>
          </div>

          <div className="md:col-span-4 hidden md:block animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="card-brutal bg-primary text-black p-10 border-none rotate-2">
              <h3 className="text-4xl font-bold mb-4">ESTÁTICO <br /> & DINÁMICO</h3>
              <p className="font-bold opacity-80 text-sm mb-6">
                No importa la complejidad, tenemos el hierro para soportarlo.
              </p>
              <div className="flex items-center gap-2 font-black text-xs">
                <div className="w-8 h-[2px] bg-black"></div>
                DESDE $2.99/MES
              </div>
            </div>
          </div>
        </div>

        {/* Domain Search Reimagined - Boutique Version */}
        <div className="mt-24 md:mt-36 border-t border-white/10 pt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold uppercase tracking-tighter leading-none mb-2">
                Busca tu <br /> <span className="text-primary">Identidad</span>
              </h2>
              <p className="text-xs font-black opacity-40 uppercase tracking-widest">Disponibilidad Instantánea</p>
            </div>
            
            <div className="md:col-span-9">
              <div className="relative">
                <div className="flex h-20 md:h-28 border-[4px] border-white/10 focus-within:border-primary transition-all duration-500 overflow-hidden bg-[#111]">
                  <input 
                    type="text" 
                    placeholder="Escribe tu dominio ideal..." 
                    className="flex-1 !bg-transparent border-none outline-none px-6 md:px-12 text-2xl md:text-5xl font-bold text-white placeholder:text-white/10 tracking-tighter w-full search-input-fix"
                  />
                  <button className="w-20 md:w-28 h-full bg-primary text-black flex items-center justify-center hover:bg-white transition-all duration-300 group shrink-0">
                    <Search size={36} strokeWidth={4} className="group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                {/* Decorative background number */}
                <div className="absolute -top-16 -right-6 text-[12rem] font-black opacity-[0.03] pointer-events-none select-none">
                  01
                </div>
              </div>
              
              <div className="flex gap-8 mt-6 overflow-x-auto pb-4 no-scrollbar">
                {['.com', '.net', '.io', '.la', '.tech'].map((ext) => (
                  <div key={ext} className="flex items-center gap-2">
                    <span className="text-sm font-black text-primary">{ext}</span>
                    <span className="text-[10px] font-bold opacity-40 text-white">DISPONIBLE</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Structural Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 border-t border-white/5 -z-10"></div>

    </section>
  );
}
