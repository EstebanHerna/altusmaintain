import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Shield, Globe } from "lucide-react";

const gets = [
  { icon: Target, text: "30 clientes pagando, $360K ARR en 18 meses" },
  { icon: TrendingUp, text: "Precisión del modelo a 85%+ — umbral enterprise" },
  { icon: Shield, text: "Certificación de privacidad SIC Colombia" },
  { icon: Globe, text: "Penetración Colombia + lanzamiento suave en México" },
];

const AskSection = () => (
  <section id="ask" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="container relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">La Inversión</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Ronda Pre-Seed: $150,000</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          18 meses de runway. El milestone que desbloquea viabilidad para Serie A.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-card p-8">
          <div className="text-sm text-primary font-semibold mb-2">Premio Cornell (si otorgado)</div>
          <div className="font-heading text-4xl font-bold text-gradient mb-4">$30,000</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>37% — Infraestructura AWS & datos</div>
            <div>27% — Desarrollo de modelos ML</div>
            <div>18% — Legal & compliance</div>
            <div>12% — Go-to-market</div>
            <div>7% — Operaciones</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border/60 bg-card p-8">
          <div className="text-sm text-muted-foreground font-semibold mb-2">Inversores adicionales</div>
          <div className="font-heading text-4xl font-bold mb-4">$120,000</div>
          <div className="text-sm text-muted-foreground mb-4">Burn rate: ~$8,300/mes</div>
          <div className="rounded-xl bg-primary/10 p-4">
            <div className="text-xs text-primary font-semibold mb-1">¿POR QUÉ AHORA?</div>
            <p className="text-xs text-muted-foreground">Fintech lending LATAM creció 47% en 2024. La ventana de mercado está abierta.</p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="font-heading text-xl font-semibold text-center mb-8">Qué logran $150K</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {gets.map((g, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4">
              <g.icon size={18} className="text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">{g.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center">
          <a href="mailto:contacto@altusapi.co" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow">
            Solicitar Acceso API <ArrowRight size={18} />
          </a>
          <p className="text-sm text-muted-foreground mt-4">contacto@altusapi.co · Bogotá, Colombia</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AskSection;
