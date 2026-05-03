"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.32, 0.72, 0, 1] as const;

interface Feature {
  eyebrow: string;
  title: string;
  body: string;
  illustration: () => React.ReactNode;
}

export function Features() {
  return (
    <section id="produto" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Produto"
          title="Operação completa em uma plataforma."
          subtitle="Tudo o que você precisa para colocar IA pra trabalhar — sem encanamento, sem terceiros."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-[640px]">
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.5, ease }}
        className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-accent"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.55, ease, delay: 0.05 }}
        className="font-display mt-4 text-[30px] font-semibold tracking-[-0.025em] text-fg sm:text-[36px] lg:text-[44px]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="mt-4 text-[17px] leading-[1.55] text-fg-muted"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease, delay: index * 0.08 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-surface p-7",
        "transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
      )}
    >
      <div className="mb-8 flex h-32 items-center justify-center">
        <feature.illustration />
      </div>

      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
        {feature.eyebrow}
      </span>
      <h3 className="font-display mt-2 text-[20px] font-semibold text-fg">
        {feature.title}
      </h3>
      <p className="mt-3 text-[14.5px] leading-[1.55] text-fg-muted">
        {feature.body}
      </p>
    </motion.article>
  );
}

const features: Feature[] = [
  {
    eyebrow: "Agentes",
    title: "Agentes que falam como você",
    body: "Defina nome, prompt, tom e identidade. Cada agente vira uma persona consistente em todos os canais.",
    illustration: AgentsIllustration,
  },
  {
    eyebrow: "Conhecimento",
    title: "Sua base, seus chunks",
    body: "Suba PDFs, FAQs ou textos. A IA quebra em pedaços, você revisa e publica. Só vai ao ar o que aprovar.",
    illustration: KnowledgeIllustration,
  },
  {
    eyebrow: "Inbox",
    title: "Conversas em um lugar só",
    body: "Assuma quando importar, devolva quando resolver. A IA não responde mais quando você está na linha.",
    illustration: InboxIllustration,
  },
];

function AgentsIllustration() {
  return (
    <div className="relative h-24 w-32">
      {/* Avatar */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="h-12 w-12 rounded-full"
          style={{
            background: "linear-gradient(135deg, #2A4FB8, #1F3A8A)",
            boxShadow: "0 6px 20px -6px rgba(42,79,184,0.5)",
          }}
        >
          <div className="flex h-full w-full items-center justify-center text-[13px] font-bold text-white">
            L
          </div>
        </div>
      </motion.div>

      {/* Concentric waves */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30"
          style={{ width: 56 + i * 18, height: 56 + i * 18 }}
          animate={{
            opacity: [0.4, 0, 0.4],
            scale: [0.85, 1.1, 0.85],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function KnowledgeIllustration() {
  return (
    <div className="relative h-24 w-32">
      {/* Document stack */}
      <div className="absolute left-2 top-2 h-20 w-14 rounded-md border border-border bg-white shadow-sm" />
      <div className="absolute left-5 top-3 h-20 w-14 rounded-md border border-border bg-white shadow-sm" />
      <div className="absolute left-8 top-4 h-20 w-14 rounded-md border border-border-strong bg-white shadow-md">
        {/* Lines */}
        <div className="space-y-1.5 p-2">
          {[0.7, 1, 0.5, 0.9].map((w, i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full bg-fg-subtle/30"
              style={{ width: `${w * 100}%` }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Arrow + chunks */}
      <motion.div
        className="absolute left-1/2 top-2 flex flex-col gap-1"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {[
          { color: "#ECF0FB", border: "#2A4FB8", w: 22 },
          { color: "#F7EEDF", border: "#C99858", w: 18 },
          { color: "#ECF0FB", border: "#2A4FB8", w: 24 },
          { color: "#DCFCE7", border: "#2F8F5F", w: 20 },
        ].map((chunk, i) => (
          <motion.div
            key={i}
            className="h-1.5 rounded-full border"
            style={{
              backgroundColor: chunk.color,
              borderColor: chunk.border,
              width: chunk.w,
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function InboxIllustration() {
  const channels = [
    { color: "#25D366", label: "W", x: -32 },
    { color: "#2A4FB8", label: "T", x: 0 },
    { color: "#C99858", label: "@", x: 32 },
  ];
  return (
    <div className="relative h-24 w-32">
      {/* Three channels */}
      {channels.map((ch, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold text-white"
          style={{
            backgroundColor: ch.color,
            transform: `translate(calc(-50% + ${ch.x}px), 0)`,
          }}
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          {ch.label}
        </motion.div>
      ))}

      {/* Convergence lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 128 96"
        fill="none"
      >
        {[-32, 0, 32].map((x, i) => (
          <motion.path
            key={i}
            d={`M ${64 + x} 24 Q ${64 + x / 2} 50 64 70`}
            stroke={channels[i].color}
            strokeWidth="1.2"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>

      {/* Inbox */}
      <div className="absolute bottom-1 left-1/2 flex h-9 w-16 -translate-x-1/2 items-center justify-center rounded-md border border-border-strong bg-white shadow-sm">
        <div className="flex flex-col gap-1">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="h-0.5 w-10 rounded-full bg-accent/50"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
