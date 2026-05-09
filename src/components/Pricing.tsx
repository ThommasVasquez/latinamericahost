"use client";
import { useState } from "react";
import { Check, ArrowRight, PartyPopper, Rocket, ShieldCheck, Server } from "lucide-react";
import AuthModal from "./AuthModal";

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  accent: boolean;
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handlePurchaseClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = (email: string) => {
    setUserEmail(email);
    setIsAuthOpen(false);
    setIsSuccess(true);
  };

  const plans: Plan[] = [
    {
      name: "STARTER",
      price: "350.000",
      period: "AÑO",
      desc: "Perfecto para experimentos y proyectos personales.",
      features: ["1 Dominio", "10GB SSD", "SSL Gratis", "Soporte Standard"],
      accent: false
    },
    {
      name: "PROFESSIONAL",
      price: "520.000",
      period: "AÑO",
      desc: "Para negocios que crecen rápido y necesitan potencia.",
      features: ["5 Dominios", "50GB NVMe", "SSL + WAF Pro", "Soporte Prioritario", "Hourly Backups"],
      accent: true
    },
    {
      name: "ENTERPRISE",
      price: "780.000",
      period: "AÑO",
      desc: "Infraestructura dedicada para proyectos de alto tráfico.",
      features: ["Dominios Ilimitados", "Recursos Dedicados", "IP Dedicada", "24/7 VIP Support", "CDN Global"],
      accent: false
    }
  ];

  if (isSuccess && selectedPlan) {
    return (
      <section className="py-40 bg-primary text-black min-h-[80vh] flex items-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-32 h-32 bg-black text-primary rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_80px_rgba(0,0,0,0.2)] animate-bounce">
              <PartyPopper size={64} />
            </div>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-none">
              ¡BIENVENIDO <br /> <span className="opacity-40">A LA ÉLITE!</span>
            </h2>
            <div className="text-2xl md:text-4xl font-bold mb-16 max-w-3xl mx-auto leading-tight space-y-4">
              <p>Tu plan <span className="underline decoration-4">{selectedPlan.name}</span> ha sido activado.</p>
              <p className="bg-black text-white py-4 px-6 inline-block rotate-1 shadow-xl">
                Hemos enviado un correo a <span className="text-primary">{userEmail}</span> con tus credenciales de acceso al hosting dinámico VPS.
              </p>
              <div className="pt-4">
                <span className="text-sm font-black uppercase tracking-[0.2em] opacity-40">
                  Nota: El correo con los datos de acceso puede tardar hasta 2 horas en llegar.
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
              <div className="bg-black/5 p-8 border-l-4 border-black">
                <Rocket className="mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">Paso 01</h4>
                <p className="text-sm font-bold">Provisionando Servidores NVMe</p>
              </div>
              <div className="bg-black/5 p-8 border-l-4 border-black">
                <ShieldCheck className="mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">Paso 02</h4>
                <p className="text-sm font-bold">Configurando SSL & WAF</p>
              </div>
              <div className="bg-black/5 p-8 border-l-4 border-black">
                <Server className="mb-4" />
                <h4 className="font-black uppercase text-sm mb-2">Paso 03</h4>
                <p className="text-sm font-bold">Enlazando Repositorios</p>
              </div>
            </div>

            <button 
              onClick={() => window.location.reload()}
              className="btn-boutique bg-black text-white hover:bg-black/90 !px-12 !py-6"
            >
              Ir al Panel de Control
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-32 bg-surface/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="badge">Inversión</div>
            <h2 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter uppercase">
              Planes <br />
              <span className="text-primary">Transparentes.</span>
            </h2>
          </div>
          <p className="text-muted font-medium max-w-sm">
            Sin contratos de permanencia, sin cargos sorpresa. Escalabilidad pura para tu negocio digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {plans.map((plan, idx) => (
            <div key={idx} className={`card-brutal p-12 flex flex-col justify-between group relative ${plan.accent ? "bg-white text-black border-none" : ""}`}>
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className={`text-xs font-black tracking-widest ${plan.accent ? "text-black/50" : "text-primary"}`}>
                    {plan.name}
                  </span>
                  {plan.accent && <span className="bg-black text-white text-[10px] px-2 py-1 font-black">RECOMENDADO</span>}
                </div>
                
                <div className="flex items-start gap-1 mb-6">
                  <span className="text-xl font-bold mt-2">COP $</span>
                  <span className="text-5xl md:text-7xl font-bold tracking-tighter">{plan.price}</span>
                  <span className="text-xs font-bold self-end mb-2">/{plan.period}</span>
                </div>
                
                <p className={`font-medium mb-10 ${plan.accent ? "text-black/60" : "text-muted"}`}>
                  {plan.desc}
                </p>

                <ul className="flex flex-col gap-4 mb-12">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold">
                      <Check size={18} className={plan.accent ? "text-black" : "text-primary"} strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handlePurchaseClick(plan)}
                className={`btn-boutique w-full justify-center !py-6 !text-sm ${
                plan.accent ? "bg-black text-white hover:bg-black/90 !border-white !shadow-white/20" : ""
              }`}>
                Contratar Ahora
                <ArrowRight size={18} strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        plan={selectedPlan}
        onSuccess={handleAuthSuccess}
      />
    </section>
  );
}
