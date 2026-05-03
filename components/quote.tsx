"use client";

import { motion } from "framer-motion";

const ease = [0.32, 0.72, 0, 1] as const;

export function Quote() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="relative mx-auto max-w-[820px] px-6">
        {/* Decorative open quote */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 -top-2 select-none font-display text-[180px] leading-none text-accent/10 sm:text-[240px]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease }}
        >
          “
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease }}
          className="relative font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-fg sm:text-[26px] lg:text-[30px]"
        >
          Em três dias a Luna aprendeu nosso FAQ inteiro. Em um mês o time de
          atendimento dobrou de tamanho — sem contratar ninguém.
        </motion.blockquote>

        <motion.figcaption
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#C99858] to-[#B97E26] text-[14px] font-semibold text-white">
            LR
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[14px] font-semibold text-fg">
              Leonardo Reis
            </span>
            <span className="text-[12.5px] text-fg-muted">
              Fundador · Aurora Café
            </span>
          </div>
          <span className="ml-2 h-4 w-px bg-border" aria-hidden="true" />
          <span className="text-[12.5px] text-fg-subtle tabular">
            6 lojas · 12 mil pedidos/mês
          </span>
        </motion.figcaption>
      </div>
    </section>
  );
}
