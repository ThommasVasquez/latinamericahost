"use client";
import { useState, useEffect } from "react";
import { X, Mail, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
  onSuccess: () => void;
}

export default function AuthModal({ isOpen, onClose, plan }: AuthModalProps) {
  const [step, setStep] = useState<'summary' | 'email'>('summary');
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen || !plan) return null;

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Redirección inmediata a la pasarela de pagos
    setTimeout(() => {
      window.location.href = "https://checkout.bold.co/payment/LNK_MQNYJ0DANX";
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl bg-surface border-4 border-white/10 p-8 md:p-12 animate-slide-up shadow-[20px_20px_0px_0px_rgba(194,253,77,0.1)]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-muted hover:text-white transition-colors"
        >
          <X size={32} />
        </button>

        {step === 'summary' && (
          <div className="animate-fade-in">
            <div className="badge mb-6 text-black">Resumen de Orden</div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-8">Confirmar <span className="text-primary">Configuración</span></h2>
            
            <div className="bg-white/5 border border-white/10 p-6 mb-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                  <p className="text-sm font-medium text-muted">{plan.desc}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">COP ${plan.price}</div>
                  <div className="text-xs font-black opacity-40 uppercase tracking-widest">Pago Anual</div>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2 mt-6 pt-6 border-t border-white/5">
                {plan.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="text-[10px] font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => setStep('email')}
              className="btn-boutique w-full justify-center group"
            >
              Continuar a Identificación
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {step === 'email' && (
          <div className="animate-fade-in">
            <div className="badge mb-6 text-black">Paso 02 // Identidad</div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Ingresa tu <span className="text-primary">Correo</span></h2>
            <p className="text-muted font-medium mb-10">Ingresa tu email para asociarlo a tu nueva cuenta de hosting.</p>

            <form onSubmit={handleSendEmail} className="space-y-6">
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@tuempresa.com"
                  className="w-full bg-white/5 border-2 border-white/10 p-6 text-xl font-bold outline-none focus:border-primary transition-colors placeholder:text-white/10"
                />
                <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20" size={24} />
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="btn-boutique w-full justify-center"
              >
                {isLoading ? <Loader2 size={24} className="animate-spin" /> : "Proceder al Pago Seguro"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
