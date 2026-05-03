import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  showWordmark?: boolean;
  size?: number;
  variant?: "default" | "reversed";
}

/**
 * The Aurora Mark
 *
 * Um único orbe — destilação reducionista da Luna. Um círculo
 * (presença / órbita) com um ponto focal deslocado upper-right
 * (o olho atento, o foco que escuta). O ponto rima com a cor do CTA
 * e da tag "Luna · IA" no chat — costurando a identidade.
 */
export function BrandMark({
  className,
  showWordmark = true,
  size = 24,
  variant = "default",
}: BrandMarkProps) {
  const ringColor = variant === "reversed" ? "#FCFBF9" : "#1B1B22";
  const focalColor = "#2A4FB8";
  const wordColor =
    variant === "reversed" ? "text-bg" : "text-fg";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Halo sutil (só visual, premium glow) */}
        <circle cx="20" cy="11" r="6" fill={focalColor} opacity="0.16" />

        {/* Orbe — presença, órbita */}
        <circle
          cx="16"
          cy="16"
          r="13"
          fill="none"
          stroke={ringColor}
          strokeWidth="2"
        />

        {/* Ponto focal — o olho atento, deslocado upper-right */}
        <circle cx="20" cy="11" r="2.8" fill={focalColor} />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-display text-[15px] font-semibold tracking-[-0.02em]",
            wordColor
          )}
        >
          AI Assistente
        </span>
      )}
    </div>
  );
}
