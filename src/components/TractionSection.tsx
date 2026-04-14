import { motion } from "framer-motion";
import { CheckCircle2, Trophy, FileText, Database, Brain, Award } from "lucide-react";

const milestones = [
  { icon: Brain, text: "MVP completo: motor de scoring con 4 tipos de datos alternativos" },
  { icon: Database, text: "1,200 perfiles evaluados; 78% precisión vs 61% baseline de buró" },
  { icon: FileText, text: "2 acuerdos piloto: microfinanciera en Colombia + lender digital en México" },
  { icon: CheckCircle2, text: "Dataset propietario de 8,500 perfiles con lab de investigación de Uniandes" },
  { icon: Trophy, text: "Top 100 global (~1,000 equipos) en AWS AI League AIdeas 2025" },
  { icon: Award, text: "Carta de apoyo de iNNpulsa Colombia por impacto social" },
];

const metrics = [
  { label: "MVP", value: "Desplegado" },
  { label: "Perfiles", value: "1,200" },
  { label: "Precisión", value: "78%" },
  { label: "Pilotos", value: "2 LOIs" },
];

const TractionSection = () => (
  <section id="traction" className="py-24 md:py-32">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Tracción</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">No Es Solo una Idea — Ya Está Construido</h2>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {metrics.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <div className="font-heading text-2xl font-bold text-primary mb-1">{m.value}</div>
            <div className="text-sm text-muted-foreground">{m.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {milestones.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <m.icon size={16} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TractionSection;
