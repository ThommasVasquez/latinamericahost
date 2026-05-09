"use client";
import { useState } from "react";
import { Check, ArrowRight, Loader2, PartyPopper } from "lucide-react";

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

  const handlePurchaseClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsAuthOpen(false);
    window.location.href = "https://checkout.bold.co/payment/LNK_MQNYJ0DANX";
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
