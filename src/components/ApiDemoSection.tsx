import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Terminal, Loader2 } from "lucide-react";

const sampleInput = {
  user_hash: "a1b2c3d4e5f6",
  mobile: { recharge_freq: "weekly", plan_type: "prepaid", avg_topup: 15000 },
  utility: { electricity_ontime: 0.92, water_ontime: 0.88, months_history: 18 },
  ecommerce: { purchases_6m: 23, return_rate: 0.04, wallet_balance: 42000 },
  telecom: { data_usage_gb: 8.2, number_age_months: 36, night_ratio: 0.31 },
};

const sampleOutput = {
  altus_score: 742,
  risk_tier: "B",
  top_factors: {
    positive: ["Utility payment consistency (92%)", "Number stability (36 months)", "Low return rate (4%)"],
    negative: ["Prepaid plan (lower signal)", "Night activity ratio elevated"],
  },
  credit_ceiling_usd: 1200,
  fraud_flag: false,
  latency_ms: 647,
};

const TypewriterJSON = ({ data, speed = 12 }: { data: string; speed?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (idx.current < data.length) {
        setDisplayed(data.slice(0, idx.current + 1));
        idx.current++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [data, speed]);

  return <span>{displayed}<span className="animate-pulse">▌</span></span>;
};

const ApiDemoSection = () => {
  const [phase, setPhase] = useState<"idle" | "sending" | "scoring" | "done">("idle");
  const [score, setScore] = useState(0);

  const runDemo = () => {
    setPhase("sending");
    setScore(0);
    setTimeout(() => {
      setPhase("scoring");
      // Animate score counting up
      let current = 0;
      const target = 742;
      const step = Math.ceil(target / 40);
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setScore(current);
      }, 25);
      setTimeout(() => setPhase("done"), 1200);
    }, 1500);
  };

  const getScoreColor = (s: number) => {
    if (s >= 700) return "text-green-400";
    if (s >= 500) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Demo en Vivo</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">Prueba el API Ahora</h2>
          <p className="text-muted-foreground text-lg">Simula un API call real. Mira cómo Altus convierte datos alternativos en un score crediticio en menos de 800ms.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Request Panel */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
              <Terminal size={14} className="text-primary" />
              <span className="text-xs font-mono text-muted-foreground">POST /v1/score</span>
              <span className="ml-auto text-xs font-mono text-green-400">200 OK</span>
            </div>
            <div className="p-4 overflow-auto max-h-[400px]">
              <pre className="text-xs font-mono text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {JSON.stringify(sampleInput, null, 2)}
              </pre>
            </div>
          </motion.div>

          {/* Response Panel */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-primary/20 bg-card overflow-hidden glow-card">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
              <span className="text-xs font-mono text-primary">Response</span>
              <AnimatePresence>
                {(phase === "sending" || phase === "scoring") && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ml-2 flex items-center gap-1">
                    <Loader2 size={12} className="animate-spin text-primary" />
                    <span className="text-xs text-primary">{phase === "sending" ? "Enviando..." : "Procesando ML..."}</span>
                  </motion.span>
                )}
              </AnimatePresence>
              {phase === "done" && <span className="ml-2 text-xs text-green-400 font-mono">647ms</span>}
            </div>
            <div className="p-4 min-h-[400px] flex flex-col">
              {phase === "idle" && (
                <div className="flex-1 flex items-center justify-center">
                  <button onClick={runDemo}
                    className="flex items-center gap-3 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground hover:opacity-90 transition-opacity group">
                    <Play size={18} className="group-hover:scale-110 transition-transform" />
                    Ejecutar API Call
                  </button>
                </div>
              )}
              {phase === "sending" && (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Validando y preprocesando datos...</p>
                  </div>
                </div>
              )}
              {(phase === "scoring" || phase === "done") && (
                <div className="flex-1 flex flex-col">
                  {/* Score gauge */}
                  <div className="text-center mb-4 py-4">
                    <div className={`font-heading text-6xl font-bold ${getScoreColor(score)} transition-colors`}>
                      {score}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Altus Score</div>
                    {/* Score bar */}
                    <div className="w-full h-2 rounded-full bg-secondary mt-3 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-400"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(score / 1000) * 100}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                      <span>0</span><span>250</span><span>500</span><span>750</span><span>1000</span>
                    </div>
                  </div>
                  {phase === "done" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="overflow-auto flex-1">
                      <pre className="text-xs font-mono text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        <TypewriterJSON data={JSON.stringify(sampleOutput, null, 2)} speed={8} />
                      </pre>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {phase === "done" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-8">
            <button onClick={() => setPhase("idle")} className="text-sm text-primary hover:underline">↻ Ejecutar de nuevo</button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ApiDemoSection;
