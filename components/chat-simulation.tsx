"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Check, CheckCheck, Phone, Video, MoreVertical, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Step =
  | { kind: "customer-typing" }
  | { kind: "customer-msg"; text: string; time: string }
  | { kind: "ai-typing" }
  | { kind: "ai-msg"; text: string; time: string }
  | { kind: "resolved" };

const sequence: { step: Step; hold: number }[] = [
  { step: { kind: "customer-typing" }, hold: 1400 },
  {
    step: {
      kind: "customer-msg",
      text: "Oi! Vocês entregam no Itaim hoje?",
      time: "14:32",
    },
    hold: 1100,
  },
  { step: { kind: "ai-typing" }, hold: 1600 },
  {
    step: {
      kind: "ai-msg",
      text: "Olá! Sim, entregamos no Itaim. Pedidos até 16h chegam ainda hoje. ☕",
      time: "14:32",
    },
    hold: 1700,
  },
  { step: { kind: "customer-typing" }, hold: 1200 },
  {
    step: {
      kind: "customer-msg",
      text: "E o frete, quanto fica?",
      time: "14:33",
    },
    hold: 900,
  },
  { step: { kind: "ai-typing" }, hold: 1500 },
  {
    step: {
      kind: "ai-msg",
      text: "R$ 8 fixo na sua região. Acima de R$ 80 é cortesia da casa. 🤍",
      time: "14:33",
    },
    hold: 2200,
  },
  { step: { kind: "resolved" }, hold: 4500 },
];

interface Bubble {
  id: number;
  side: "customer" | "ai";
  text: string;
  time: string;
}

export function ChatSimulation() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [showCustomerTyping, setShowCustomerTyping] = useState(false);
  const [showAiTyping, setShowAiTyping] = useState(false);
  const [resolved, setResolved] = useState(false);
  const idRef = useRef(0);
  const cycleRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const run = async () => {
      while (!cancelled) {
        cycleRef.current += 1;
        // Fresh cycle: clear state with smooth fade
        setBubbles([]);
        setShowCustomerTyping(false);
        setShowAiTyping(false);
        setResolved(false);
        await wait(800);
        if (cancelled) return;

        for (const item of sequence) {
          if (cancelled) return;
          const { step, hold } = item;

          if (step.kind === "customer-typing") {
            setShowCustomerTyping(true);
          } else if (step.kind === "ai-typing") {
            setShowAiTyping(true);
          } else if (step.kind === "customer-msg") {
            setShowCustomerTyping(false);
            idRef.current += 1;
            setBubbles((b) => [
              ...b,
              {
                id: idRef.current,
                side: "customer",
                text: step.text,
                time: step.time,
              },
            ]);
          } else if (step.kind === "ai-msg") {
            setShowAiTyping(false);
            idRef.current += 1;
            setBubbles((b) => [
              ...b,
              {
                id: idRef.current,
                side: "ai",
                text: step.text,
                time: step.time,
              },
            ]);
          } else if (step.kind === "resolved") {
            setResolved(true);
          }

          await wait(hold);
          if (cancelled) return;
        }

        await wait(1200);
      }
    };

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    run();
    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[400px]">
      {/* Floating "powered by" tag */}
      <motion.div
        className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 shadow-sm"
        initial={{ opacity: 0, y: -8, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 1,
          duration: 0.5,
          ease: [0.32, 0.72, 0, 1],
        }}
      >
        <Sparkles size={12} className="text-accent" strokeWidth={2.4} />
        <span className="text-[11px] font-semibold tracking-tight text-fg">
          Luna · IA
        </span>
      </motion.div>

      {/* Card */}
      <div
        className="relative overflow-hidden rounded-2xl border border-border bg-surface"
        style={{
          boxShadow:
            "0 1px 0 0 rgba(0,0,0,0.04), 0 24px 60px -20px rgba(27,27,34,0.18), 0 8px 20px -8px rgba(27,27,34,0.08)",
        }}
      >
        {/* Header (WhatsApp-ish) */}
        <div className="flex items-center justify-between border-b border-border bg-[#075E54]/[0.03] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#C99858] to-[#B97E26] flex items-center justify-center text-white text-[13px] font-semibold">
                AC
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#2F8F5F]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold leading-tight text-fg">
                Aurora Café
              </span>
              <span className="text-[11px] text-fg-subtle">online · respondendo</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-fg-subtle">
            <button className="rounded-full p-1.5 hover:bg-bg-subtle" aria-label="Vídeo">
              <Video size={16} strokeWidth={1.8} />
            </button>
            <button className="rounded-full p-1.5 hover:bg-bg-subtle" aria-label="Áudio">
              <Phone size={16} strokeWidth={1.8} />
            </button>
            <button className="rounded-full p-1.5 hover:bg-bg-subtle" aria-label="Mais">
              <MoreVertical size={16} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          className="relative h-[420px] overflow-hidden px-4 py-4"
          style={{
            background:
              "linear-gradient(180deg, #f5f1ec 0%, #f0eae3 100%)",
          }}
        >
          {/* Bg pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, #1B1B22 1px, transparent 1px), radial-gradient(circle at 75% 75%, #1B1B22 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          <div className="relative flex h-full flex-col justify-end gap-1.5">
            {/* Day separator */}
            <div className="mb-2 flex justify-center">
              <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium tracking-wide text-fg-subtle uppercase backdrop-blur">
                Hoje
              </span>
            </div>

            <AnimatePresence mode="popLayout">
              {bubbles.map((b) => (
                <motion.div
                  key={b.id}
                  layout
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    type: "spring",
                    stiffness: 360,
                    damping: 28,
                    mass: 0.6,
                  }}
                  className={cn(
                    "flex",
                    b.side === "customer" ? "justify-end" : "justify-start"
                  )}
                >
                  <ChatBubble
                    side={b.side}
                    text={b.text}
                    time={b.time}
                  />
                </motion.div>
              ))}

              {showCustomerTyping && (
                <motion.div
                  key="customer-typing"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex justify-end"
                >
                  <TypingIndicator side="customer" />
                </motion.div>
              )}

              {showAiTyping && (
                <motion.div
                  key="ai-typing"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex justify-start"
                >
                  <TypingIndicator side="ai" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resolved overlay */}
          <AnimatePresence>
            {resolved && (
              <motion.div
                key="resolved"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-x-4 bottom-4 z-10"
              >
                <div className="flex items-center gap-3 rounded-xl border border-[#2F8F5F]/20 bg-white/95 px-4 py-3 shadow-md backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2F8F5F]/10">
                    <CheckCheck
                      size={16}
                      className="text-[#2F8F5F]"
                      strokeWidth={2.6}
                    />
                  </div>
                  <div className="flex flex-1 flex-col leading-tight">
                    <span className="text-[12px] font-semibold text-fg">
                      Conversa resolvida pela IA
                    </span>
                    <span className="text-[11px] text-fg-muted">
                      14s · sem intervenção humana
                    </span>
                  </div>
                  <span className="text-[11px] font-medium tabular text-[#2F8F5F]">
                    100% Luna
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer (input mock) */}
        <div className="flex items-center gap-2 border-t border-border bg-bg-subtle px-3 py-2.5">
          <div className="flex flex-1 items-center rounded-full border border-border bg-white px-4 py-2 text-[13px] text-fg-subtle">
            Digite uma mensagem
          </div>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white"
            aria-label="Enviar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12L21 4L13 22L11 13L3 12Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  side,
  text,
  time,
}: {
  side: "customer" | "ai";
  text: string;
  time: string;
}) {
  const isCustomer = side === "customer";
  return (
    <div
      className={cn(
        "max-w-[78%] px-3.5 py-2 shadow-sm",
        isCustomer
          ? "rounded-2xl rounded-br-md bg-[#dcf8c6] text-fg"
          : "rounded-2xl rounded-bl-md bg-white text-fg"
      )}
    >
      <p className="text-[13.5px] leading-snug tracking-[-0.005em]">{text}</p>
      <div className="mt-1 flex items-center justify-end gap-1">
        <span className="text-[10px] tabular text-fg-subtle">{time}</span>
        {isCustomer && (
          <CheckCheck
            size={12}
            className="text-[#2A4FB8]"
            strokeWidth={2.4}
          />
        )}
      </div>
    </div>
  );
}

function TypingIndicator({ side }: { side: "customer" | "ai" }) {
  const isCustomer = side === "customer";
  return (
    <div
      className={cn(
        "flex items-center gap-1 px-3.5 py-2.5 shadow-sm",
        isCustomer
          ? "rounded-2xl rounded-br-md bg-[#dcf8c6]"
          : "rounded-2xl rounded-bl-md bg-white"
      )}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-1.5 w-1.5 rounded-full bg-fg-subtle"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: i * 0.16,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
