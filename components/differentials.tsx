"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  UserPlus,
  ShieldCheck,
  Mic,
  TrendingUp,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.32, 0.72, 0, 1] as const;

const items = [
  {
    icon: CalendarCheck,
    title: "Agenda sozinha",
    body: "Integra com Google Calendar e marca horários direto com o cliente, no canal que ele já usa.",
    accent: "#2A4FB8",
    soft: "#ECF0FB",
  },
  {
    icon: UserPlus,
    title: "Captura de leads",
    body: "Nome, e-mail, telefone e interesse coletados na primeira conversa. Sincroniza com seu CRM.",
    accent: "#2F8F5F",
    soft: "#DCFCE7",
  },
  {
    icon: ShieldCheck,
    title: "Controle e segurança",
    body: "Bloqueia prompt injection, esconde dados sensíveis e nunca responde fora da sua base.",
    accent: "#C99858",
    soft: "#F7EEDF",
  },
  {
    icon: Mic,
    title: "Tom da sua marca",
    body: "Formal, descontraído, técnico, próximo. Configure como cada agente fala — palavra por palavra.",
    accent: "#7C3AED",
    soft: "#EDE9FE",
  },
  {
    icon: TrendingUp,
    title: "Insights de lacunas",
    body: "Perguntas sem resposta viram lista priorizada. A IA aponta onde sua documentação tem furo.",
    accent: "#DB2777",
    soft: "#FCE7F3",
  },
  {
    icon: Building2,
    title: "Multi-tenant nativo",
    body: "Workspaces, papéis e convites do dia 1. Cada cliente seu pode ter o próprio espaço isolado.",
    accent: "#0891B2",
    soft: "#CFFAFE",
  },
];

export function Differentials() {
  return (
    <section id="empresas" className="relative bg-bg-subtle py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[640px]">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-accent"
          >
            Inteligência que importa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            className="font-display mt-4 text-[30px] font-semibold tracking-[-0.025em] text-fg sm:text-[36px] lg:text-[44px]"
          >
            Mais que um chatbot.<br />
            Um time digital.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="mt-4 text-[17px] leading-[1.55] text-fg-muted"
          >
            Recursos que existem porque atender bem é mais do que responder.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <DifferentialCard key={item.title} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentialCard({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease, delay: (index % 3) * 0.06 }}
      className={cn(
        "group relative rounded-2xl border border-border bg-surface p-6",
        "transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
      )}
    >
      <div
        className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ backgroundColor: item.soft }}
      >
        <Icon size={18} style={{ color: item.accent }} strokeWidth={2.2} />
      </div>
      <h3 className="font-display text-[16.5px] font-semibold text-fg">
        {item.title}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.55] text-fg-muted">
        {item.body}
      </p>

      {/* Hover gradient corner */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}
