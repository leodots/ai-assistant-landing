"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { AmbientBlobs } from "./ambient-blobs";
import { ChatSimulation } from "./chat-simulation";
import { FloatingFragments } from "./floating-fragments";

const line1 = ["Conhecimento", "que"];
const line2 = ["vira", "atendimento."];

const ease = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const chatY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      className="noise relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <AmbientBlobs />
      <FloatingFragments />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-[minmax(0,1fr)_400px] md:gap-10 lg:gap-12">
        {/* Left: copy */}
        <motion.div className="relative" style={{ y: copyY }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-fg">
              Atendimento com IA + humano
            </span>
          </motion.div>

          <h1 className="font-display text-[36px] font-semibold tracking-[-0.035em] text-fg sm:text-[52px] lg:text-[64px] xl:text-[72px]">
            <span className="block">
              {line1.map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.65, ease, delay: 0.1 + i * 0.07 }}
                  className="inline-block"
                  style={{ marginRight: i < line1.length - 1 ? "0.25em" : 0 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {line2.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.65,
                    ease,
                    delay: 0.1 + (i + line1.length) * 0.07,
                  }}
                  className="inline-block"
                  style={{ marginRight: i < line2.length - 1 ? "0.25em" : 0 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.45 }}
            className="mt-6 max-w-[480px] text-[17px] leading-[1.55] text-fg-muted"
          >
            Sua IA aprende com seus documentos, responde nos seus canais e
            devolve pro time quando importar — em minutos, não em meses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              variant="primary"
              size="lg"
              icon={<ArrowRight size={16} strokeWidth={2.4} />}
            >
              Começar grátis
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              size="lg"
              icon={<Play size={14} strokeWidth={2.4} />}
              iconPosition="left"
            >
              Ver demo de 2 min
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease, delay: 0.8 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-fg-subtle"
          >
            <ProofItem text="Sem cartão" />
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-fg-subtle/40" />
            <ProofItem text="500 mensagens grátis" />
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-fg-subtle/40" />
            <ProofItem text="Em produção em 1 dia" />
          </motion.div>
        </motion.div>

        {/* Right: chat simulation */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          style={{ y: chatY }}
          className="relative flex items-center justify-center md:justify-end"
        >
          <ChatSimulation />
        </motion.div>
      </div>
    </section>
  );
}

function ProofItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.5L4.5 8.5L9.5 3.5"
          stroke="#2F8F5F"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </span>
  );
}
