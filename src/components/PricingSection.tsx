import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0.18",
    unit: "/ API call",
    desc: "Para fintechs en etapa semilla",
    features: ["Hasta 5,000 llamadas/mes", "Soporte básico", "Sandbox incluido", "Documentación completa"],
    cta: "Empezar Gratis",
    featured: false,
  },
  {
    name: "Growth",
    price: "$0.10",
    unit: "/ call + $1,500/mes",
    desc: "Para fintechs Series A",
    features: ["Hasta 50,000 llamadas/mes", "SLA 99.5%", "Soporte prioritario", "SDKs Python & Node.js"],
    cta: "Iniciar Growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    desc: "Para neobanks y MFIs",
    features: ["Llamadas ilimitadas", "Modelos personalizados", "Integraciones custom", "Account manager dedicado"],
    cta: "Contactar Ventas",
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 bg-card/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Precios</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Para Fintechs. No para Bancos.</h2>
        <p className="text-muted-foreground text-lg">Precios 8× más bajos que el competidor más cercano para funciones equivalentes.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tiers.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className={`rounded-2xl border p-8 flex flex-col ${t.featured ? "border-primary/40 bg-card glow-card scale-105" : "border-border/60 bg-card"}`}>
            {t.featured && <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">Más Popular</div>}
            <h3 className="font-heading text-xl font-bold mb-1">{t.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
            <div className="mb-6">
              <span className="font-heading text-3xl font-bold">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.unit}</span>
            </div>
            <div className="space-y-3 flex-1 mb-8">
              {t.features.map((f, j) => (
                <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary shrink-0" /> {f}
                </div>
              ))}
            </div>
            <button className={`w-full rounded-lg py-3 text-sm font-semibold transition-all ${t.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:border-primary/40 text-foreground"}`}>
              {t.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
