"use client";
import { useState } from "react";
import { Check, ArrowRight, Loader2, PartyPopper } from "lucide-react";

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [successPlan, setSuccessPlan] = useState<string | null>(null);

  const handlePurchase = (planName: string) => {
    setLoadingPlan(planName);
    
    // Simulate checkout process
    setTimeout(() => {
      setLoadingPlan(null);
      setSuccessPlan(planName);
      
      // Redirect to payment link after success message
      setTimeout(() => {
        window.location.href = "https://checkout.bold.co/payment/LNK_MQNYJ0DANX";
      }, 2500);
    }, 2000);
  };

  const plans = [
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
              {successPlan === plan.name && (
                <div className="absolute inset-0 z-50 bg-primary flex flex-col items-center justify-center text-black p-6 text-center animate-fade-in">
                  <PartyPopper size={64} className="mb-4 animate-bounce" />
                  <h3 className="text-3xl font-bold uppercase mb-2">¡EXCELENTE ELECCIÓN!</h3>
                  <p className="font-bold text-sm">Estamos configurando tu instancia {plan.name}. Recibirás un email en segundos.</p>
                </div>
              )}

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
                onClick={() => handlePurchase(plan.name)}
                disabled={loadingPlan !== null}
                className={`btn-boutique w-full justify-center !py-6 !text-sm disabled:opacity-50 ${
                plan.accent ? "bg-black text-white hover:bg-black/90 !border-white !shadow-white/20" : ""
              }`}>
                {loadingPlan === plan.name ? (
                  <>
                    Procesando...
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Contratar Ahora
                    <ArrowRight size={18} strokeWidth={3} />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
