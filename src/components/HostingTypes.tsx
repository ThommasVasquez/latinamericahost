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
            <div key={idx} className={`card-brutal flex flex-col justify-between ${type.large ? "bento-item-large" : ""}`}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="text-primary">{type.icon}</div>
                  <div className="text-[10px] font-black tracking-widest uppercase opacity-40">{type.tag}</div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">{type.title}</h3>
                <p className="text-muted font-medium mb-8 max-w-md">
                  {type.description}
                </p>
              </div>
              
              <div className="flex justify-between items-end">
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
          
          <div className="card-brutal bento-item-tall bg-[#111] text-white border-white/5 flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold leading-none uppercase mb-6">DOMINIOS <br />PREMIUM</h3>
              <p className="font-bold text-sm opacity-60">Gestiona tu identidad digital con las herramientas más potentes de la industria.</p>
            </div>
            
            <div className="relative z-10 mt-12">
              <button className="btn-boutique w-full justify-center !shadow-none hover:!shadow-none bg-primary text-black">
                Registrar Ahora
              </button>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary opacity-5 rotate-12 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
