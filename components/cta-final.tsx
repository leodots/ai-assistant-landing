"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { LunaOrb } from "./luna-orb";
import { AmbientBlobs } from "./ambient-blobs";

const ease = [0.32, 0.72, 0, 1] as const;

export function CTAFinal() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, ease }}
        className="relative mx-auto overflow-hidden rounded-[28px]"
        style={{
          background:
            "linear-gradient(135deg, #2A4FB8 0%, #243F94 40%, #1F3A8A 100%)",
          maxWidth: 1100,
          minHeight: 360,
          boxShadow:
            "0 40px 80px -24px rgba(31,58,138,0.4), 0 16px 32px -8px rgba(31,58,138,0.16), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <AmbientBlobs variant="cta" />

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />

        <div className="relative grid grid-cols-1 items-center gap-8 px-8 py-14 md:grid-cols-[1fr_240px] md:gap-12 md:px-14 md:py-16 lg:px-20">
          <div className="text-white">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70"
            >
              Comece hoje
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="font-display mt-3 text-[32px] font-semibold leading-[1.05] tracking-[-0.025em] sm:text-[42px] lg:text-[48px]"
            >
              Em 5 minutos<br />
              sua IA está atendendo.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.25 }}
              className="mt-5 max-w-[440px] text-[16.5px] leading-[1.55] text-white/75"
            >
              500 mensagens grátis por mês. Sem cartão. Cancele quando quiser.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.35 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <MagneticButton
                variant="white"
                size="lg"
                icon={<ArrowRight size={16} strokeWidth={2.4} />}
              >
                Criar workspace
              </MagneticButton>
              <a
                href="/contato"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Falar com vendas
              </a>
            </motion.div>
          </div>

          {/* Luna mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="hidden md:flex justify-center"
          >
            <LunaOrb size={220} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
