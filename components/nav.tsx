"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { BrandMark } from "./brand-mark";
import { MagneticButton } from "./magnetic-button";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Produto", href: "#produto" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para empresas", href: "#empresas" },
  { label: "Preços", href: "#precos" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundColor: scrolled
            ? "rgba(252,251,249,0.78)"
            : "rgba(252,251,249,0)",
          backdropFilter: scrolled ? "blur(14px) saturate(180%)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(180%)" : "blur(0px)",
          borderBottomColor: scrolled ? "rgba(232,229,224,1)" : "rgba(232,229,224,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ borderBottom: "1px solid" }}
      />
      <div className="relative mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="flex items-center" aria-label="AI Assistente — início">
          <BrandMark />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-[14px] font-medium text-fg-muted transition-colors hover:text-fg hover:bg-bg-subtle"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="hidden sm:inline-flex h-9 items-center rounded-md px-3 text-[14px] font-medium text-fg-muted transition-colors hover:text-fg hover:bg-bg-subtle"
          >
            Entrar
          </a>
          <MagneticButton
            href="/signup"
            size="sm"
            variant="primary"
            icon={<ArrowRight size={14} strokeWidth={2.4} />}
          >
            Começar grátis
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
}
