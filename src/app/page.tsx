import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HostingTypes from "@/components/HostingTypes";
import Pricing from "@/components/Pricing";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Manifesto Section - Anti AI-Generic */}
      <section className="py-40 bg-primary text-black">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <h2 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter uppercase">
              No somos <br />
              una corporación <br />
              genérica.
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-xl md:text-3xl font-bold leading-tight">
                Latin Host Inc nació de la necesidad de un servicio que hable tu idioma y entienda la latencia de tu región.
              </p>
              <div className="flex flex-col gap-4 font-bold opacity-80">
                <p>— Cero bots en soporte técnico.</p>
                <p>— Servidores optimizados para el cono sur.</p>
                <p>— Infraestructura propietaria, no somos revendedores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HostingTypes />

      <Pricing />

      {/* Final CTA Reimagined */}
      <section className="py-40">
        <div className="container">
          <div className="text-center">
            <div className="badge">Proyecto 001 // Latin Host</div>
            <h2 className="text-7xl md:text-[12rem] font-bold tracking-tighter uppercase mb-12">
              ÚNETE <span className="text-primary">A LA</span> ÉLITE
            </h2>
            <p className="text-xl md:text-3xl font-medium text-muted max-w-3xl mx-auto mb-20">
              Estamos redefiniendo lo que significa el alojamiento web en Latinoamérica. Menos marketing, más ingeniería.
            </p>
            <button className="btn-boutique !text-3xl !px-16 !py-8 group">
              Empieza el Despliegue
              <ArrowRight size={32} strokeWidth={3} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
