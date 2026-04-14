import { motion } from "framer-motion";

const markets = [
  { label: "TAM", value: "$15.1B", desc: "Mercado global de datos alternativos de crédito, 2028", cagr: "22% CAGR" },
  { label: "SAM", value: "$2.8B", desc: "Infraestructura de lending digital LATAM, 2028", detail: "3,000+ fintechs" },
  { label: "SOM", value: "$140M", desc: "5% del SAM en 5 años — Colombia, México, Brasil", detail: "400+ fintechs CO" },
];

const tailwinds = [
  "Lending digital en LATAM creció 47% en 2024 (LAVCA)",
  "Colombia promueve regulaciones de Open Finance para 2026",
  "Banco Mundial comprometió $2.5B para inclusión financiera LATAM",
  "58% de adultos colombianos hicieron transacción digital en 2024, vs 31% en 2019",
];

const MarketSection = () => (
  <section id="market" className="py-24 md:py-32 bg-card/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mercado</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Oportunidad de $15B en Expansión</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {markets.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="rounded-2xl border border-border/60 bg-card p-8 text-center">
            <div className="text-sm font-semibold text-primary mb-2">{m.label}</div>
            <div className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-3">{m.value}</div>
            <p className="text-muted-foreground text-sm mb-3">{m.desc}</p>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {m.cagr || m.detail}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="rounded-2xl border border-border/60 bg-card p-8">
        <h3 className="font-heading text-xl font-semibold mb-6">Vientos a Favor del Mercado</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {tailwinds.map((t, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-muted-foreground text-sm">{t}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default MarketSection;
