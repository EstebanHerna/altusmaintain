import { motion } from "framer-motion";
import { AlertTriangle, Ban, Clock } from "lucide-react";

const pain = [
  { icon: Ban, stat: "160M+", desc: "Adultos en LATAM sin historial crediticio formal (Banco Mundial, 2023)" },
  { icon: AlertTriangle, stat: "2.4×", desc: "Mayor tasa de impago cuando se presta sin scoring a clientes thin-file" },
  { icon: Clock, stat: "3–6 meses", desc: "Para integrar APIs de buró tradicional, con contratos mínimos de $50K+" },
];

const ProblemSection = () => (
  <section id="problem" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-grid opacity-30" />
    <div className="container relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">El Problema</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">El Catch-22 del Buró de Crédito</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Los burós tradicionales requieren crédito formal previo para generar un score. Los 160 millones de latinoamericanos sin historial — trabajadores informales, vendedores ambulantes, primeros prestatarios digitales — quedan permanentemente excluidos.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {pain.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="rounded-2xl border border-border/60 bg-card p-8 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
              <p.icon size={22} className="text-destructive" />
            </div>
            <div className="font-heading text-3xl font-bold mb-2">{p.stat}</div>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mt-12 rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8">
        <p className="text-lg font-medium text-center">
          <span className="text-destructive font-semibold">El resultado:</span>{" "}
          Las fintechs sobre-rechazan clientes solventes o sobre-prestan y absorben pérdidas.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
