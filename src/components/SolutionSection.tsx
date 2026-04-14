import { motion } from "framer-motion";
import { Smartphone, Zap, Globe, Shield, BarChart3 } from "lucide-react";

const dataSources = [
  { icon: Smartphone, title: "Móvil", desc: "Patrones de recarga, tipo de plan, frecuencia" },
  { icon: Zap, title: "Servicios", desc: "Pagos de electricidad, agua, gas — puntualidad" },
  { icon: Globe, title: "E-commerce", desc: "Historial de compras, devoluciones, wallet digital" },
  { icon: BarChart3, title: "Telecom", desc: "Uso de datos, comportamiento, estabilidad" },
  { icon: Shield, title: "Conductual", desc: "Interacciones, consistencia, señales de app" },
];

const outputs = [
  { label: "Altus Score", value: "0–1000" },
  { label: "Nivel de Riesgo", value: "A / B / C / D" },
  { label: "Factores Top 3", value: "Positivos y negativos" },
  { label: "Techo Crediticio", value: "Recomendado (USD)" },
  { label: "Flag de Fraude", value: "Binario" },
];

const SolutionSection = () => (
  <section id="solution" className="py-24 md:py-32 bg-card/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">La Solución</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Datos Alternativos. Scores Reales. En 800ms.</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Altus es un REST API que las fintechs integran en horas. Envía un paquete de datos. Recibe un score crediticio, nivel de riesgo y explicación — sin historial crediticio requerido.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="font-heading text-xl font-semibold mb-6">Fuentes de Datos</h3>
          <div className="space-y-4">
            {dataSources.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <d.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-0.5">{d.title}</div>
                  <div className="text-sm text-muted-foreground">{d.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold mb-6">Output por API Call</h3>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-primary/20 bg-card p-6 glow-card">
            <div className="font-mono text-xs text-muted-foreground mb-4">// Response JSON</div>
            <div className="space-y-4">
              {outputs.map((o, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0">
                  <span className="text-sm text-muted-foreground">{o.label}</span>
                  <span className="font-mono text-sm font-semibold text-primary">{o.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
