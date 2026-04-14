import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Problema", href: "#problem" },
    { label: "Solución", href: "#solution" },
    { label: "Mercado", href: "#market" },
    { label: "Tracción", href: "#traction" },
    { label: "Equipo", href: "#team" },
    { label: "Precios", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold tracking-tight text-gradient">ALTUS</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
          <a href="#ask" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">Solicitar Acceso</a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden md:hidden border-t border-border/50 bg-background">
            <div className="container py-4 flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground py-2">{l.label}</a>
              ))}
              <a href="#ask" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground text-center">Solicitar Acceso</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
