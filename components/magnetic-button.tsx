"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_1px_2px_0_rgba(0,0,0,0.08)]",
  secondary:
    "bg-surface text-fg border border-border-strong hover:bg-bg-subtle",
  ghost: "text-fg hover:bg-bg-subtle",
  white:
    "bg-white text-accent-deep hover:bg-white/95 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset]",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

export function MagneticButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  icon,
  iconPosition = "right",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.18);
    y.set(relY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight",
    "transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]",
    "active:translate-y-[1px]",
    "select-none whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        style={{ x: xSpring, y: ySpring }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={baseClasses}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </motion.button>
  );
}
