"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { CheckCircle2, FileText, Send, Upload, User } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.32, 0.72, 0, 1] as const;

const steps = [
  {
    number: "01",
    title: "Suba conhecimento",
    body: "Arraste PDFs, FAQs ou cole texto puro. A IA quebra em chunks que você pode revisar.",
  },
  {
    number: "02",
    title: "Revise e publique",
    body: "Cada chunk passa por você antes de virar resposta ao público. Edite, aprove ou descarte.",
  },
  {
    number: "03",
    title: "A IA atende. Você assume quando importa.",
    body: "Conversas vivas em tempo real. Quando você assume, a IA cala — e devolve a fila quando você devolve.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.33) setActive(0);
      else if (v < 0.66) setActive(1);
      else setActive(2);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="relative bg-bg-subtle"
      style={{ minHeight: "260vh" }}
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left: steps */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Como funciona
            </span>
            <h2 className="font-display mb-12 text-[30px] font-semibold tracking-[-0.025em] text-fg sm:text-[36px] lg:text-[44px]">
              Da base ao primeiro<br />
              cliente atendido.
            </h2>

            <div className="relative">
              {/* Progress line */}
              <div className="absolute left-[15px] top-3 h-[calc(100%-1.5rem)] w-px bg-border-strong" />
              <motion.div
                className="absolute left-[15px] top-3 w-px bg-accent"
                style={{ height: lineHeight }}
              />

              <ul className="space-y-10">
                {steps.map((step, i) => (
                  <StepItem
                    key={step.number}
                    step={step}
                    active={active === i}
                    completed={active > i}
                  />
                ))}
              </ul>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[440px]">
              <AnimatePresence mode="wait">
                {active === 0 && <UploadVisual key="upload" />}
                {active === 1 && <ReviewVisual key="review" />}
                {active === 2 && <HandoffVisual key="handoff" />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  active,
  completed,
}: {
  step: (typeof steps)[number];
  active: boolean;
  completed: boolean;
}) {
  return (
    <li className="relative pl-12">
      <div
        className={cn(
          "absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300",
          active
            ? "border-accent bg-accent text-white"
            : completed
              ? "border-accent bg-bg-subtle text-accent"
              : "border-border-strong bg-bg-subtle text-fg-subtle"
        )}
      >
        {completed && !active ? (
          <CheckCircle2 size={14} strokeWidth={2.4} />
        ) : (
          <span className="text-[11px] font-semibold tabular">{step.number}</span>
        )}
      </div>

      <motion.h3
        className="font-display text-[20px] font-semibold transition-colors duration-300"
        animate={{
          color: active ? "#1B1B22" : "rgba(27,27,34,0.45)",
        }}
        transition={{ duration: 0.3, ease }}
      >
        {step.title}
      </motion.h3>
      <motion.p
        className="mt-2 max-w-[420px] text-[15px] leading-[1.55]"
        animate={{
          color: active ? "#6B6B72" : "rgba(107,107,114,0.4)",
        }}
        transition={{ duration: 0.3, ease }}
      >
        {step.body}
      </motion.p>
    </li>
  );
}

function VisualCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease }}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function UploadVisual() {
  return (
    <VisualCard>
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
            Conhecimento
          </span>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
            Novo
          </span>
        </div>

        {/* Drop zone */}
        <motion.div
          className="relative flex flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed border-accent/30 bg-accent-soft/30"
          animate={{
            borderColor: ["rgba(42,79,184,0.3)", "rgba(42,79,184,0.6)", "rgba(42,79,184,0.3)"],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm"
          >
            <Upload size={20} className="text-accent" strokeWidth={2} />
          </motion.div>
          <p className="text-[14px] font-medium text-fg">
            faq-aurora-cafe.pdf
          </p>
          <p className="mt-1 text-[12px] text-fg-subtle">2.4 MB · 18 páginas</p>

          {/* Progress bar */}
          <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full bg-accent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "60%" }}
            />
          </div>
          <p className="mt-2 text-[11px] tabular text-fg-subtle">
            Processando · 32 chunks gerados
          </p>
        </motion.div>

        <div className="mt-4 flex items-center gap-2 text-[12px] text-fg-subtle">
          <FileText size={12} strokeWidth={2.4} />
          PDFs, DOCX, TXT, Markdown · até 50MB
        </div>
      </div>
    </VisualCard>
  );
}

function ReviewVisual() {
  const chunks = [
    { id: 1, status: "published", text: "Funcionamos de seg. a sáb., das 7h às 19h." },
    { id: 2, status: "review", text: "Frete grátis acima de R$ 80. Itaim, Vila Olímpia, Pinheiros." },
    { id: 3, status: "review", text: "Aceitamos Pix, crédito, débito e VR." },
    { id: 4, status: "draft", text: "Café de origem única, torrado semanalmente." },
  ];

  return (
    <VisualCard>
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
            Chunks
          </span>
          <span className="text-[11px] tabular text-fg-subtle">4 de 32</span>
        </div>

        <div className="flex flex-1 flex-col gap-2 overflow-hidden">
          {chunks.map((chunk, idx) => (
            <motion.div
              key={chunk.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: idx * 0.08 }}
              className="rounded-lg border border-border bg-bg-subtle/40 p-3"
            >
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-fg-subtle">
                  Trecho #{chunk.id}
                </span>
                <ChunkStatusBadge status={chunk.status} animated={chunk.id === 2} />
              </div>
              <p className="text-[13px] leading-[1.5] text-fg">{chunk.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg bg-accent-soft p-3">
          <span className="text-[12.5px] font-medium text-fg">
            Publicar selecionados
          </span>
          <motion.button
            className="rounded-md bg-accent px-3 py-1.5 text-[12px] font-semibold text-white"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            Publicar 3
          </motion.button>
        </div>
      </div>
    </VisualCard>
  );
}

function ChunkStatusBadge({
  status,
  animated,
}: {
  status: string;
  animated?: boolean;
}) {
  const styles: Record<string, { bg: string; fg: string; label: string }> = {
    published: { bg: "#dcfce7", fg: "#2F8F5F", label: "Publicado" },
    review: { bg: "#F7EEDF", fg: "#B97E26", label: "Em revisão" },
    draft: { bg: "#F3F0EB", fg: "#8E8E95", label: "Rascunho" },
  };
  const s = styles[status] || styles.draft;

  return (
    <motion.span
      className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
      style={{ backgroundColor: s.bg, color: s.fg }}
      animate={animated ? { scale: [1, 1.06, 1] } : undefined}
      transition={animated ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      {s.label}
    </motion.span>
  );
}

function HandoffVisual() {
  const messages = [
    { side: "user", text: "Posso trocar meu pedido por um maior?", time: "14:41" },
    {
      side: "ai",
      text: "A troca depende do pagamento já feito. Quer que eu chame alguém do time pra resolver?",
      time: "14:41",
    },
    { side: "user", text: "Sim, por favor.", time: "14:42" },
    { side: "system", text: "→ Aguardando atendente humano" },
    { side: "human", text: "Oi! Aqui é a Ana. Vi seu caso, já estou resolvendo. ✨", time: "14:43" },
    {
      side: "user",
      text: "Maravilha, obrigado!",
      time: "14:43",
    },
    {
      side: "human",
      text: "Acabei de atualizar seu pedido. Diferença de R$ 24 já no seu cartão.",
      time: "14:44",
    },
  ];

  return (
    <VisualCard>
      <div className="flex h-full flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
            Conversa #4821
          </span>
          <motion.span
            className="flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Humano
          </motion.span>
        </div>

        <div className="flex flex-1 flex-col gap-2 overflow-hidden">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease, delay: idx * 0.18 }}
              className={cn(
                "flex",
                msg.side === "user"
                  ? "justify-start"
                  : msg.side === "system"
                    ? "justify-center"
                    : "justify-end"
              )}
            >
              {msg.side === "system" ? (
                <div className="rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-[11px] font-medium text-warning">
                  {msg.text}
                </div>
              ) : (
                <div
                  className={cn(
                    "max-w-[78%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug",
                    msg.side === "user"
                      ? "rounded-bl-md bg-bg-subtle text-fg"
                      : msg.side === "ai"
                        ? "rounded-br-md bg-accent-soft text-fg"
                        : "rounded-br-md bg-success/10 text-fg"
                  )}
                >
                  {msg.text}
                  <div className="mt-0.5 text-right text-[10px] tabular text-fg-subtle">
                    {msg.time}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Operator pill */}
        <motion.div
          className="mt-4 flex items-center gap-2 rounded-xl border border-success/20 bg-success/5 p-3"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4, ease }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/15 text-success">
            <User size={14} strokeWidth={2.4} />
          </div>
          <div className="flex flex-1 flex-col leading-tight">
            <span className="text-[12px] font-semibold text-fg">
              Ana Reis assumiu o atendimento
            </span>
            <span className="text-[11px] text-fg-subtle">IA pausada</span>
          </div>
          <Send size={14} className="text-success" strokeWidth={2.4} />
        </motion.div>
      </div>
    </VisualCard>
  );
}
