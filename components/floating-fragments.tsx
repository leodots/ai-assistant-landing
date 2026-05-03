"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Zap } from "lucide-react";

interface FloatingFragmentsProps {
  className?: string;
}

// Apenas dois fragmentos, claramente FORA do chat card, vazando da borda
// direita do viewport. Funcionam como toasts / notificações sutis.
const fragments = [
  {
    text: "+1 lead capturado",
    top: "26%",
    right: "0%",
    delay: 1.2,
    duration: 17,
    icon: Sparkles,
    accent: "#2A4FB8",
  },
  {
    text: "Resolvido em 12s",
    top: "62%",
    right: "1%",
    delay: 3.4,
    duration: 19,
    icon: Zap,
    accent: "#C99858",
  },
];

export function FloatingFragments({ className }: FloatingFragmentsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {fragments.map((frag, idx) => {
        const Icon = frag.icon;
        return (
          <motion.div
            key={idx}
            className="absolute hidden lg:block"
            style={{
              top: frag.top,
              right: frag.right,
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: [0, 0.62, 0.62, 0],
              y: [8, -14, -14, -28],
            }}
            transition={{
              duration: frag.duration,
              delay: frag.delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.18, 0.82, 1],
            }}
          >
            <div
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/65 px-3 py-1.5 backdrop-blur-md shadow-[0_2px_12px_-4px_rgba(27,27,34,0.08)]"
              style={{ fontSize: 12 }}
            >
              <Icon size={12} style={{ color: frag.accent }} strokeWidth={2.4} />
              <span className="text-fg-muted font-medium tracking-tight whitespace-nowrap">
                {frag.text}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
