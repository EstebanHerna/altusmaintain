import { motion } from "framer-motion";
import { Code, Briefcase, Brain, Handshake } from "lucide-react";

const team = [
  { name: "Esteban Hernández", role: "Co-founder & CTO", uni: "Uniandes, Ing. Sistemas, 2027", strength: "AI/ML, AWS, Mobile, LATAM market", icon: Code },
  { name: "Co-founder & CEO", role: "Estrategia & Fundraising", uni: "Universidad por confirmar", strength: "Business dev, strategy, fundraising", icon: Briefcase },
  { name: "Head of Data Science", role: "Modelos ML", uni: "Universidad por confirmar", strength: "ML, estadística, datos fintech", icon: Brain },
  { name: "Head of Partnerships", role: "Alianzas & BD", uni: "Universidad por confirmar", strength: "Ventas, ecosistema fintech LATAM", icon: Handshake },
];

const TeamSection = () => (
  <section id="team" className="py-24 md:py-32">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Equipo</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">LATAM-Nativos. Técnicamente Profundos.</h2>
        <p className="text-muted-foreground text-lg">3 años construyendo sistemas AI en producción. Top 100 en AWS AI League 2025. Experiencia directa en el ecosistema fintech colombiano.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <t.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-1">{t.name}</h3>
            <div className="text-sm text-primary mb-2">{t.role}</div>
            <div className="text-xs text-muted-foreground mb-3">{t.uni}</div>
            <p className="text-sm text-muted-foreground">{t.strength}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
