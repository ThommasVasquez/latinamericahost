import { Zap, Activity, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";

export default function HostingTypes() {
  const types = [
    {
      title: "ESTÁTICO",
      tag: "Pure Speed",
      description: "Optimizado para la velocidad de la luz. Portafolios, landings y blogs que cargan antes de que parpadees.",
      icon: <Zap size={40} />,
      features: ["CDN Global", "Despliegue Git", "SSL Ilimitado"],
      large: true
    },
    {
      title: "DINÁMICO",
      tag: "Pro Infrastructure",
      description: "Para apps complejas y e-commerce. Node, Python, PHP con bases de datos SQL dedicadas.",
      icon: <Activity size={40} />,
      features: ["Auto-Scaling", "Daily Backups", "Full API Access"],
      large: false
    },
    {
      title: "SEGURIDAD",
      tag: "Enterprise Grade",
      description: "Certificados SSL, protección DDoS y backups redundantes en múltiples regiones.",
      icon: <ShieldCheck size={40} />,
      features: ["WAF", "DDoS Protection", "Backup Redundancy"],
      large: false
    }
  ];

  return (
    <section id="hosting" className="py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="badge">Nuestros Servicios</div>
            <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter uppercase">
              Infraestructura <br />
              <span className="text-primary">Sin Concesiones.</span>
            </h2>
          </div>
          <p className="text-muted font-medium max-w-sm mb-2">
            No somos el hosting más barato del mercado, somos el que mejor cuida tus bits. Ingeniería pura aplicada a tu presencia digital.
          </p>
        </div>

        <div className="bento-grid">
          {types.map((type, idx) => (
            <div key={idx} className={`card-brutal flex flex-col justify-between overflow-hidden ${type.large ? "bento-item-large" : ""}`}>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-primary">{type.icon}</div>
                  <div className="text-[10px] font-black tracking-widest uppercase opacity-40">{type.tag}</div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">{type.title}</h3>
                <p className="text-muted font-medium mb-8 max-w-md">
                  {type.description}
                </p>
              </div>
              
              {type.large && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] pointer-events-none select-none uppercase">
                  HOST
                </div>
              )}

              <div className="flex justify-between items-end relative z-10">
                <ul className="flex flex-col gap-2">
                  {type.features.map((f, i) => (
                    <li key={i} className="text-xs font-black flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="btn-icon">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </button>
              </div>
            </div>
          ))}
          
          <div className="card-brutal bento-item-wide bg-black text-white border-white/10 flex flex-col md:flex-row justify-between items-center overflow-hidden relative gap-10">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-20 h-20 bg-primary text-black flex items-center justify-center rotate-12 flex-shrink-0">
                <Cpu size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-4xl font-bold leading-none uppercase mb-4">DOMINIOS <br className="hidden md:block" />PREMIUM</h3>
                <p className="font-bold text-sm opacity-60 max-w-xs">Gestiona tu identidad digital con las herramientas más potentes de la industria.</p>
              </div>
            </div>
            
            <div className="relative z-10 w-full md:w-auto">
              <button className="btn-boutique w-full md:w-auto justify-center !shadow-none hover:!shadow-none bg-primary text-black whitespace-nowrap">
                Registrar Ahora
              </button>
            </div>

            {/* Technical background decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
