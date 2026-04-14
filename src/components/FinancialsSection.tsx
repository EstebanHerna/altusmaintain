import { motion } from "framer-motion";

const rows = [
  { metric: "Clientes Pagando", y1: "8", y2: "28", y3: "72", y4: "160", y5: "310" },
  { metric: "ARR ($K)", y1: "$138K", y2: "$484K", y3: "$1,244K", y4: "$2,765K", y5: "$5,357K" },
  { metric: "Revenue ($K)", y1: "$58K", y2: "$345K", y3: "$1,036K", y4: "$2,350K", y5: "$4,620K" },
  { metric: "Gross Margin", y1: "72%", y2: "76%", y3: "77%", y4: "78%", y5: "79%" },
  { metric: "EBITDA ($K)", y1: "-$53K", y2: "$72K", y3: "$378K", y4: "$1,053K", y5: "$2,450K" },
];

const unitEcon = [
  { label: "ARPC Mensual", value: "$1,440" },
  { label: "CAC", value: "$6,500" },
  { label: "LTV", value: "$103,680" },
  { label: "LTV:CAC", value: "15.9×" },
  { label: "Payback", value: "4.5 meses" },
  { label: "Gross Margin", value: "76%" },
];

const FinancialsSection = () => (
  <section className="py-24 md:py-32 bg-card/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Proyecciones</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Proyecciones Financieras a 5 Años</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="rounded-2xl border border-border/60 bg-card overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left p-4 font-semibold text-muted-foreground">Métrica</th>
                {["Y1", "Y2", "Y3", "Y4", "Y5"].map(y => (
                  <th key={y} className="p-4 text-right font-semibold text-muted-foreground">{y}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-border/30 last:border-0 hover:bg-secondary/20">
                  <td className="p-4 font-medium">{r.metric}</td>
                  <td className="p-4 text-right font-mono text-muted-foreground">{r.y1}</td>
                  <td className="p-4 text-right font-mono text-muted-foreground">{r.y2}</td>
                  <td className="p-4 text-right font-mono text-muted-foreground">{r.y3}</td>
                  <td className="p-4 text-right font-mono text-muted-foreground">{r.y4}</td>
                  <td className="p-4 text-right font-mono font-semibold text-primary">{r.y5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <h3 className="font-heading text-xl font-semibold mb-6">Unit Economics</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {unitEcon.map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-border/60 bg-card p-5 text-center">
            <div className="font-heading text-xl font-bold text-gradient mb-1">{u.value}</div>
            <div className="text-xs text-muted-foreground">{u.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FinancialsSection;
