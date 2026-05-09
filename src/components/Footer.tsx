import { Globe, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-surface/50">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo size="small" className="mb-6" />
            <p className="text-muted text-xs font-bold leading-relaxed uppercase tracking-wider mb-10">
              Infraestructura de clase mundial para creadores de Latinoamérica. 
            </p>
            
            {/* MinTIC Section con Logo Estable */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-white/5 p-4 border-l-2 border-primary/40">
                <div className="h-10 w-16 flex items-center justify-center bg-white rounded-sm p-1">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Logo_del_Ministerio_de_Tecnolog%C3%ADas_de_la_Informaci%C3%B3n_y_las_Comunicaciones.svg/512px-Logo_del_Ministerio_de_Tecnolog%C3%ADas_de_la_Informaci%C3%B3n_y_las_Comunicaciones.svg.png" 
                    alt="MinTIC Colombia" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-tighter leading-none opacity-40">Entidad Vigilada</span>
                  <span className="text-xs font-black uppercase tracking-tighter text-white">MinTIC Colombia</span>
                </div>
              </div>
              <p className="text-[9px] font-bold text-muted leading-tight uppercase tracking-[0.1em]">
                Servicio sujeto a la normativa de la Ley 1341 de 2009 de la República de Colombia.
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
            <p className="text-gray-500 text-sm font-bold">
              © {new Date().getFullYear()} Latin Host Inc. 
            </p>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Vigilado por MinTIC</span>
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
