import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = ["B2B API", "ML LATAM-nativo", "Sin crédito previo", "Integración 2hrs", "Contrato mínimo $0", "Output explicable", "NLP Español nativo", "Pricing para SME"];
const competitors = [
  { name: "Altus", vals: [true, true, true, true, true, true, true, true] },
  { name: "Lenddo/EFL", vals: [true, false, true, false, false, false, false, false] },
  { name: "Datacrédito", vals: [true, false, false, false, false, true, true, false] },
  { name: "Tala", vals: [false, false, true, false, false, false, false, false] },
  { name: "Destacame", vals: [false, false, false, false, false, false, true, false] },
];

const moats = [
  "Flywheel de datos: cada API call genera training data etiquetado",
  "Modelos entrenados en patrones de economía informal LATAM",
  "Developer-first: integración en 2hrs vs 3-6 meses legacy",
  "Pricing 8× menor con precisión equivalente o superior",
];

const CompetitiveSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Diferenciación</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Landscape Competitivo</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="rounded-2xl border border-border/60 bg-card overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left p-4 font-semibold text-muted-foreground">Feature</th>
                {competitors.map(c => (
                  <th key={c.name} className={`p-4 text-center font-semibold ${c.name === "Altus" ? "text-primary" : "text-muted-foreground"}`}>{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-border/30 last:border-0">
                  <td className="p-4 text-muted-foreground">{f}</td>
                  {competitors.map(c => (
                    <td key={c.name} className="p-4 text-center">
                      {c.vals[i] ? <Check size={16} className={`inline ${c.name === "Altus" ? "text-primary" : "text-green-500"}`} /> : <X size={16} className="inline text-muted-foreground/40" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4">
        {moats.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check size={12} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">{m}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompetitiveSection;
