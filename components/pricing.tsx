"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";

const ease = [0.32, 0.72, 0, 1] as const;

type Period = "monthly" | "yearly";

interface Plan {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "Pra testar a IA no seu negócio",
    monthly: 0,
    yearly: 0,
    features: [
      "500 mensagens/mês",
      "1 agente",
      "1 canal (WhatsApp ou Telegram)",
      "Base de conhecimento até 50 chunks",
      "Inbox colaborativa (até 2 atendentes)",
    ],
    cta: "Começar grátis",
  },
  {
    name: "Pro",
    tagline: "Pra times sérios em produção",
    monthly: 199,
    yearly: 159,
    features: [
      "10.000 mensagens/mês",
      "Agentes ilimitados",
      "Todos os canais",
      "Base ilimitada · RAG completo",
      "Agendamento Google Calendar",
      "Captura de leads + CRM webhook",
      "Insights de lacunas",
    ],
    cta: "Começar 14 dias grátis",
    highlight: true,
    badge: "Mais popular",
  },
  {
    name: "Business",
    tagline: "Pra escala com governança",
    monthly: 599,
    yearly: 479,
    features: [
      "Tudo do Pro",
      "Mensagens ilimitadas",
      "Multi-tenant (workspaces filhos)",
      "SSO + papéis customizados",
      "LGPD avançado · auditoria",
      "SLA 99.9% · suporte dedicado",
    ],
    cta: "Falar com vendas",
  },
];

export function Pricing() {
  const [period, setPeriod] = useState<Period>("yearly");

  return (
    <section id="precos" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-accent"
          >
            Preços
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            className="font-display mt-4 text-[30px] font-semibold tracking-[-0.025em] text-fg sm:text-[36px] lg:text-[44px]"
          >
            Comece de graça.<br />
            Cresça quando precisar.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="mt-4 text-[16.5px] leading-[1.55] text-fg-muted"
          >
            Sem cartão. Sem fidelidade. Você só paga quando faz sentido.
          </motion.p>

          <PeriodToggle period={period} onChange={setPeriod} />
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan, idx) => (
            <PlanCard key={plan.name} plan={plan} period={period} index={idx} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease, delay: 0.4 }}
          className="mt-10 text-center text-[13px] text-fg-subtle"
        >
          Mensagens excedentes em qualquer plano: R$ 0,02 cada.
          {" · "}
          Cancele quando quiser.
        </motion.p>
      </div>
    </section>
  );
}

function PeriodToggle({
  period,
  onChange,
}: {
  period: Period;
  onChange: (p: Period) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease, delay: 0.2 }}
      className="mt-10 inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1 shadow-sm"
    >
      {(["monthly", "yearly"] as Period[]).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className="relative rounded-full px-4 py-1.5 text-[13px] font-medium tracking-tight"
        >
          {period === p && (
            <motion.span
              layoutId="period-pill"
              className="absolute inset-0 rounded-full bg-fg"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          <span
            className={cn(
              "relative z-10 transition-colors",
              period === p ? "text-bg" : "text-fg-muted"
            )}
          >
            {p === "monthly" ? "Mensal" : "Anual"}
            {p === "yearly" && (
              <span
                className={cn(
                  "ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                  period === "yearly"
                    ? "bg-champagne/30 text-champagne"
                    : "bg-champagne-soft text-champagne"
                )}
              >
                −20%
              </span>
            )}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

function PlanCard({
  plan,
  period,
  index,
}: {
  plan: Plan;
  period: Period;
  index: number;
}) {
  const price = period === "monthly" ? plan.monthly : plan.yearly;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, ease, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col rounded-2xl border bg-surface p-7",
        "transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
        plan.highlight
          ? "border-accent/30 shadow-[0_0_0_1px_rgba(42,79,184,0.18),0_24px_48px_-12px_rgba(42,79,184,0.18),0_8px_16px_-8px_rgba(0,0,0,0.06)]"
          : "border-border hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
      )}
    >
      {plan.badge && (
        <div className="absolute -top-3 right-7">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-tight text-white shadow-md">
            <Sparkles size={11} strokeWidth={2.5} />
            {plan.badge}
          </span>
        </div>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-[20px] font-semibold text-fg">
          {plan.name}
        </h3>
      </div>
      <p className="mt-1 text-[13.5px] text-fg-muted">{plan.tagline}</p>

      <div className="mt-6 flex items-end gap-1.5">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`${plan.name}-${period}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease }}
            className="font-display text-[44px] font-semibold tabular leading-none text-fg"
          >
            {price === 0 ? "Grátis" : `R$ ${price}`}
          </motion.span>
        </AnimatePresence>
        {price > 0 && (
          <span className="pb-1 text-[13.5px] text-fg-subtle">/ mês</span>
        )}
      </div>
      {price > 0 && period === "yearly" && (
        <span className="mt-1 text-[12px] text-fg-subtle tabular">
          R$ {plan.yearly * 12} por ano · economiza R$ {(plan.monthly - plan.yearly) * 12}
        </span>
      )}
      {price === 0 && (
        <span className="mt-1 text-[12px] text-fg-subtle">
          Pra sempre · sem prazo
        </span>
      )}

      <div className="my-6 h-px bg-border" />

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-[14px] text-fg">
            <span
              className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                plan.highlight ? "bg-accent text-white" : "bg-bg-subtle text-fg-muted"
              )}
            >
              <Check size={10} strokeWidth={3} />
            </span>
            <span className="leading-[1.5]">{feat}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <MagneticButton
          variant={plan.highlight ? "primary" : "secondary"}
          size="md"
          className="w-full"
        >
          {plan.cta}
        </MagneticButton>
      </div>
    </motion.div>
  );
}
