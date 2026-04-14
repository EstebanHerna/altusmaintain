import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Registro", client: "Firma contrato, recibe API key", altus: "Verificación KYB, acceso sandbox", time: "24 horas" },
  { num: "02", title: "Envío", client: "POST datos anonimizados vía HTTPS", altus: "Valida, preprocesa, normaliza", time: "Instantáneo" },
  { num: "03", title: "Score", client: "Consume respuesta JSON", altus: "Ejecuta modelo ensemble", time: "<800ms" },
  { num: "04", title: "Escala", client: "Aumenta volumen de llamadas", altus: "Auto-escala en AWS Lambda", time: "Continuo" },
];

const HowItWorksSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Integración</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Tres Pasos. Cero Historial Requerido.</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border/60 bg-card p-6 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute -top-4 -right-2 font-heading text-7xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">{s.num}</div>
            <div className="relative">
              <div className="text-primary font-mono text-xs mb-3">Paso {s.num}</div>
              <h3 className="font-heading text-xl font-bold mb-4">{s.title}</h3>
              <div className="space-y-3 text-sm">
                <div><span className="text-muted-foreground">Cliente:</span> <span className="text-foreground">{s.client}</span></div>
                <div><span className="text-muted-foreground">Altus:</span> <span className="text-foreground">{s.altus}</span></div>
                <div className="pt-2 border-t border-border/40"><span className="font-mono text-primary text-xs">{s.time}</span></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
