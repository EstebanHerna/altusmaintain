import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "1,200+", label: "Perfiles evaluados" },
  { value: "78%", label: "Precisión thin-file" },
  { value: "<800ms", label: "Tiempo de respuesta" },
  { value: "2", label: "Pilotos activos" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
    </div>
    <div className="container relative z-10 py-20 md:py-32">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
          <Zap size={14} className="text-primary" />
          <span className="text-xs font-medium text-primary">Cornell EMC² Mark Mobius Pitch 2026</span>
        </div>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
          Credit Intelligence para los{" "}
          <span className="text-gradient">Invisibles</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          El API que da identidad crediticia a los 160 millones de adultos no bancarizados en Latinoamérica — construido con los datos que ya cuentan su historia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#ask" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            Solicitar Acceso API <ArrowRight size={16} />
          </a>
          <a href="#solution" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 font-semibold text-foreground hover:bg-secondary transition-colors">
            Ver Cómo Funciona
          </a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <div key={i} className="rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-5">
            <div className="font-heading text-2xl md:text-3xl font-bold text-gradient mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
