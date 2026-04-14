import { motion } from "framer-motion";
import { Rocket, Globe, TrendingUp, ArrowRight, Users, Handshake, Code2, RefreshCw } from "lucide-react";

const phases = [
  {
    phase: "Fase 1",
    title: "Land",
    period: "Meses 0–6",
    target: "10 Clientes",
    color: "from-amber-500 to-orange-500",
    icon: Rocket,
    actions: [
      "Outreach directo a 400+ fintechs en Colombia vía red iNNpulsa y Uniandes",
      "Piloto gratuito de 90 días a 3 clientes estratégicos a cambio de caso de estudio",
      "Exhibición en Fintech Colombia Summit y Latam Fintech Forum",
      "LinkedIn outreach a CTOs y Heads of Risk de fintechs seed-to-Series A",
    ],
  },
  {
    phase: "Fase 2",
    title: "Expand",
    period: "Meses 6–18",
    target: "40 Clientes + México",
    color: "from-orange-500 to-rose-500",
    icon: Globe,
    actions: [
      "Partner con Fintech México — directorio de 8,000+ miembros",
      "Portal developer self-serve: docs, sandbox, Postman, SDKs",
      "Integración como servicio embebido en Kushki y Conekta",
      "Primer hire de ventas: 2 clientes nuevos/mes",
    ],
  },
  {
    phase: "Fase 3",
    title: "Scale",
    period: "Meses 18–36",
    target: "100+ Clientes + Brasil",
    color: "from-rose-500 to-violet-500",
    icon: TrendingUp,
    actions: [
      "Localizar modelos ML para ecosistema CPF brasileño y NLP portugués",
      "Presencia en Distrito y Cubo Itaú (hubs fintech São Paulo)",
      "3 contratos enterprise con MFIs — mayor revenue por contrato",
      "Programa de resellers: 3 partners de implementación",
    ],
  },
];

const flywheel = [
  { icon: Users, label: "Cliente integra API", desc: "Revenue + nuevas señales de datos" },
  { icon: TrendingUp, label: "Cliente crece", desc: "Volumen de API calls escala automáticamente" },
  { icon: Code2, label: "Altus mejora", desc: "Más datos → mejor modelo → mayor precisión" },
  { icon: Handshake, label: "Nuevos clientes", desc: "Word of mouth + modelo superior" },
];

const GoToMarketSection = () => (
  <section className="py-24 md:py-32 bg-card/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Go-To-Market</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Estrategia de Crecimiento</h2>
        <p className="text-muted-foreground text-lg">De 0 a 100+ clientes en 36 meses. Tres fases ejecutables.</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line connecting phases */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="space-y-8 lg:space-y-12">
          {phases.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`grid lg:grid-cols-2 gap-6 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                      <p.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-primary">{p.phase} · {p.period}</div>
                      <h3 className="font-heading text-xl font-bold">{p.title}</h3>
                    </div>
                    <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.target}</span>
                  </div>
                  <ul className="space-y-3">
                    {p.actions.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`hidden lg:flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_4px_hsl(38_92%_50%/0.3)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Growth Flywheel */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mt-20 rounded-2xl border border-primary/20 bg-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-8">
          <RefreshCw size={20} className="text-primary" />
          <h3 className="font-heading text-xl font-semibold">Growth Loop Flywheel</h3>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {flywheel.map((f, i) => (
            <div key={i} className="relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <f.icon size={22} className="text-primary" />
              </div>
              <div className="font-semibold text-sm mb-1">{f.label}</div>
              <div className="text-xs text-muted-foreground">{f.desc}</div>
              {i < flywheel.length - 1 && (
                <ArrowRight size={16} className="hidden md:block absolute -right-3 top-1/3 text-primary/40" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default GoToMarketSection;
