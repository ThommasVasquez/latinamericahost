import { Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-surface/50">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-primary" size={24} />
              <span className="text-xl font-bold tracking-tighter uppercase font-heading">
                LATINHOST <span className="text-primary">INC</span>
              </span>
            </div>
            <p className="text-muted text-xs font-bold leading-relaxed uppercase tracking-wider">
              Infraestructura de clase mundial para creadores de Latinoamérica. 
            </p>
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
                className="w-full bg-surface border-b-2 border-white/10 px-0 py-3 text-sm font-bold focus:outline-none focus:border-primary transition-all search-input-fix"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Latin Host Inc. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white"><Globe size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white"><Globe size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white"><Globe size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
