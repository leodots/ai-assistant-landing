"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LunaOrbProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export function LunaOrb({ className, size = 200, glow = true }: LunaOrbProps) {
  return (
    <div
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Outer glow */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-50"
          style={{
            background:
              "radial-gradient(closest-side, rgba(42,79,184,0.55), rgba(201,152,88,0.25) 60%, transparent 80%)",
          }}
        />
      )}

      {/* Orbital ring 1 */}
      <motion.div
        className="absolute inset-[-8%] rounded-full border"
        style={{
          borderColor: "rgba(42,79,184,0.18)",
          borderWidth: 1,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
          style={{ background: "#2A4FB8", boxShadow: "0 0 12px #2A4FB8" }}
        />
      </motion.div>

      {/* Orbital ring 2 (slower, opposite) */}
      <motion.div
        className="absolute inset-[2%] rounded-full border"
        style={{
          borderColor: "rgba(201,152,88,0.20)",
          borderWidth: 1,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
          style={{ background: "#C99858", boxShadow: "0 0 8px #C99858" }}
        />
      </motion.div>

      {/* Main orb (frosted glass) */}
      <motion.div
        className="absolute inset-[12%] rounded-full overflow-hidden"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(135deg, rgba(42,79,184,0.85) 0%, rgba(31,58,138,0.95) 40%, rgba(201,152,88,0.5) 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -8px 24px rgba(0,0,0,0.15), 0 24px 48px -16px rgba(42,79,184,0.4)",
        }}
      >
        {/* Inner glass highlight */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.32), transparent 50%)",
          }}
        />
        {/* Focal "eye" */}
        <motion.div
          className="absolute left-1/2 top-[32%] -translate-x-1/2 rounded-full"
          style={{
            width: size * 0.04,
            height: size * 0.04,
            background: "#FFFFFF",
            boxShadow: "0 0 16px rgba(255,255,255,0.9), 0 0 32px rgba(255,255,255,0.5)",
          }}
          animate={{
            opacity: [1, 1, 0.4, 1],
            scale: [1, 1, 0.7, 1],
          }}
          transition={{
            duration: 5,
            times: [0, 0.92, 0.96, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Subtle aura around eye */}
        <div
          className="absolute left-1/2 top-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: size * 0.18,
            height: size * 0.18,
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.4), transparent 70%)",
            transform: `translate(-50%, -50%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
