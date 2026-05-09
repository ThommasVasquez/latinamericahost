import { Globe, Mail, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-surface/50">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo size="small" className="mb-6" />
            <p className="text-muted text-xs font-bold leading-relaxed uppercase tracking-wider mb-8">
              Infraestructura de clase mundial para creadores de Latinoamérica. 
            </p>
            
            {/* MinTIC Section */}
            <div className="flex flex-col gap-4 p-4 border-l-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 flex items-center justify-center rounded-sm">
                  <ShieldCheck size={20} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-tighter leading-none">Vigilado por</span>
                  <span className="text-sm font-black uppercase tracking-tighter text-white">MinTIC</span>
                </div>
              </div>
              <p className="text-[9px] font-bold text-muted leading-tight uppercase tracking-widest">
                Latin Host Inc cumple con la normativa de servicios de información y comunicaciones de la República de Colombia.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-primary">Producto</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold opacity-60">
              <li><a href="#" className="hover:text-primary hover:opacity-100 transition-all">Hosting Estático</a></li>
              <li><a href="#" className="hover:text-primary hover:opacity-100 transition-all">Hosting Dinámico</a></li>
              <li><a href="#" className="hover:text-primary hover:opacity-100 transition-all">Dominios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-primary">Compañía</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold opacity-60">
              <li><a href="#" className="hover:text-primary hover:opacity-100 transition-all">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary hover:opacity-100 transition-all">Contacto</a></li>
              <li><a href="#" className="hover:text-primary hover:opacity-100 transition-all">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-primary">Newsletter</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full bg-surface border-b-2 border-white/10 px-0 py-3 text-sm font-bold focus:outline-none focus:border-primary transition-all"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Latin Host Inc. Todos los derechos reservados.
            </p>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">Vigilado MinTIC</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Globe size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Globe size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Globe size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
