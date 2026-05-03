import { cn } from "@/lib/utils";

interface AmbientBlobsProps {
  className?: string;
  variant?: "hero" | "soft" | "cta";
}

export function AmbientBlobs({ className, variant = "hero" }: AmbientBlobsProps) {
  if (variant === "cta") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
        aria-hidden="true"
      >
        <div
          className="absolute -left-32 -top-24 h-96 w-96 rounded-full opacity-30 mix-blend-screen blur-3xl animate-drift"
          style={{ background: "radial-gradient(closest-side, #C99858, transparent)" }}
        />
        <div
          className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full opacity-40 mix-blend-screen blur-3xl animate-drift-alt"
          style={{ background: "radial-gradient(closest-side, #4A6FD0, transparent)" }}
        />
      </div>
    );
  }

  if (variant === "soft") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
        aria-hidden="true"
      >
        <div
          className="absolute left-1/4 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, #ECF0FB, transparent)" }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Champagne soft top-right */}
      <div
        className="absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full opacity-50 blur-3xl animate-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,152,88,0.32), transparent 70%)",
        }}
      />
      {/* Accent soft bottom-left */}
      <div
        className="absolute -bottom-32 -left-24 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl animate-drift-alt"
        style={{
          background:
            "radial-gradient(closest-side, rgba(42,79,184,0.20), transparent 70%)",
        }}
      />
      {/* Subtle center glow */}
      <div
        className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(247,238,223,0.6), transparent 70%)",
        }}
      />
    </div>
  );
}
